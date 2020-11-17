<template>
    <div id="questionPage">    
        <div class="pageHeader">
            <img class="sharerImg" :src="avatar" >
            <span class="contentSet" style="text-align: left;" v-html="sharer"></span>
        </div>
        <div class="pageTitle">{{ title }}</div>
        <div class="pageContent">
            <div id="videoFrame">
                <div class="videoTitle">影片訪談 : </div>
                <iframe  width="100%"  :src="video" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="content contentSet" v-html="content"></div>
        </div>
    </div>
</template>
<script>

import { apiPostQuestion } from '@/api';
import router from '@/router';
import store from '@/store';
  
export default {
    data(){
        return {
            question : '',
            index : '',
            title : '',
            avatar : '',
            sharer : '',
            content : '',
            video : '',
        }
    },
    methods : {
         checkValue (obj) {
            console.log(obj);
            return obj.content;
            if(obj.video_src == "")
            {
                return obj.content;
            }
            else
            {
                return obj.content.replace('{{video}}','<div id="videoFrame"><div class="videoTitle">影片訪談 : </div><iframe  width="100%"  src="' + obj.video_src + '" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')

            }
        },
    },
    created() {
        switch (true) {
            case store.state.questionNo == '':
            case store.state.identity == '':
            case store.state.age == '':
            case store.state.gender == '':   
                router.replace({
                    name : 'list',
                    params: { name: 'harry' }
                });
                break;
        
            default:
                break;
        }

        this.rep = apiPostQuestion({
            'no' : store.state.questionNo,
            'identity' : store.state.identity,
            'age' : store.state.age,
            'gender': store.state.gender,
        }).then((response) => {
            console.log(response.data.data);
            let question = response.data.data.question;

            this.avatar = './../src/media/questionAvatar/' + question.avatar;
            this.sharer = '內容分享者：<br>' + question.sharer
            // this.title = question.title.replace('{{video}}',"{{" + question.avatar + "}}")
            this.title = question.title;
            this.content = this.checkValue(question);
            this.video = question.video_src + '';
            // this.data = response.data.data;
            // response.data.data.map((val,id) => {
            //     console.log(val);
                
            // })
        });
    },
    components : {
    }
}
</script>

<style lang="scss">

</style>
<style scoped>
    #questionPage{
        margin: 0 -2vmin;
        width: 100vw;
        
    }

    .pageHeader{
        display: flex;
        flex-direction: row;
        justify-content: center;
        background: rgb(12,20,30) ;
        width: 100%;
        box-sizing : border-box;
        padding: 5vmin 0;
    }

    .pageTitle
    {
        margin: 5vmin 6vmin;
        padding: 5vmin 8vmin;
        font-size: 5vmin;
        color: #c9c9c9;
        letter-spacing: 1vmin;
        line-height: 7vmin;
        box-sizing: border-box;
   
        background:linear-gradient(to left, #c9c9c9, #c9c9c9) left top no-repeat, 
                linear-gradient(to bottom, #c9c9c9, #c9c9c9) left top no-repeat, 
                /* linear-gradient(to left, #c9c9c9, #c9c9c9) right top no-repeat,
                linear-gradient(to bottom, #c9c9c9, #c9c9c9) right top no-repeat,  */
                /* linear-gradient(to left, #c9c9c9, #c9c9c9) left bottom no-repeat,
                linear-gradient(to bottom, #c9c9c9, #c9c9c9) left bottom no-repeat, */
                linear-gradient(to left, #c9c9c9, #c9c9c9) right bottom no-repeat,
                linear-gradient(to left, #c9c9c9, #c9c9c9) right bottom no-repeat;
        background-size: 4px 30px,20px 4px,4px 30px,20px 4px;
    }

    .pageContent
    {
        color:white;
        margin: 0 0 10vmin 0;
    }

    .contentSet
    {
        letter-spacing: 0.6vmin;
        line-height: 6vmin;
    }

    .sharerImg{
        max-width: 20vmin;
        max-height: 20vmin;
        width: 100%;
        height: auto;
        box-sizing : border-box;
        margin: 0 3vmin;
    }

   .contentSet
   {
       
       font-size: 4vmin;
       color: #A9A9A9;
   } 

    .videoTitle
    {
        text-align: center;
        margin: 5vmin 0;
        font-size: 4.5vmin;
        color: #A9A9A9;
    } 

    #videoFrame iframe
    {
        height: 60vmin;
        margin: 5vmin 0;
    }
    .content{
        padding : 0 12vmin;
        color: white;
        font-size: 4vmin;
    }
</style>

