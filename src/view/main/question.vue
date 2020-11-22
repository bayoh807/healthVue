<template>
    <div id="questionPage">    
        <div class="pageHeader">
            <img class="sharerImg" :src="avatar" >
            <span class="contentSet" style="text-align: left;" v-html="sharer"></span>
        </div>
        <div class="pageTitle">{{ title }}</div>
        <div class="pageContent">
            <div id="videoFrame">
                <div class="videoTitle" v-if="back == 0">影片訪談 : </div>
                <div class="videoTitle" v-else>內容說明 : </div>
                <iframe v-if="back == 0"  width="100%"  :src="video" frameborder="0"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <img class="backImg" :src='backContent' v-else/>
            </div>
            <div class="content contentSet" v-html="content"></div>
        </div>
        <div class="pageForm"  >
            <Comment v-if="back == 0" />
            <Connection v-else/>
        </div>
        <div class="pageBack" >
           <img  :src="otherButton" style="width: 50vmin;height:10vmin" @click="pageBack()" >
            <!--<div class="backList formButton" @click="pageBack()">觀看其他內容</div>-->
        </div>
    </div>
</template>
<script>
import Connection from '@/view/components/Connection.vue';
import Comment from '@/view/components/Comment.vue';
// import PageFrom from '@/view/components/PageFrom.vue';
import { apiPostQuestion } from '@/api';
import router from '@/router';
import store from '@/store';
  

export default {
    data(){
        return {
            question : store.state.question,
            otherButton  : './../src/media/component/otherButton.png',
            backContent : './../src/media/component/shutterstock.png',
            // showInfo : store.state.showInfo
        }
    },
    watch : {
        showInfo : {
               handler : function(){
                   console.log(123);
               }
        }
    },
    methods : {
        showShowinfo (val){
            console.log(val);
        },
         checkValue (obj) {
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
        pageBack()
        {
            //打開header;
            document.getElementById('header').removeAttribute('hidden');
            document.querySelector('.pageForm').removeAttribute('hidden');

            store.state.questionNo = '';
            store.state.showInfo = false;

            router.replace({
                name : 'list',
                params: { name: 'harry' }
            });
        }
    },
    beforeCreate() {
        switch (true) {
            case store.state.data.questionNo == '':
            case store.state.data.identity == '':
            case store.state.data.age == '':
            case store.state.data.gender == '':   
                router.replace({
                    name : 'doctor',
                    params: { name: 'harry' }
                });
                break; 
        
            default:
                break;
        }

        this.avatar =  store.state.question.avatar;
        this.sharer =  store.state.question.sharer;
        this.title = store.state.question.title;
        this.back = store.state.question.back;
        this.content = store.state.question.content;
        this.video = store.state.question.video;
        this.log = store.state.question.log;


    },
    components : {
        Connection,
        Comment
    }
}
</script>

<style lang="scss">

</style>
<style scoped>
 /*.formButton{
        cursor: pointer;
        display:block; 
        text-align:justify;
        text-align-last:justify;
        width: 19vmin;
        font-size: 4vmin;
        padding: 2.7vmin 3vmin;
        box-sizing : border-box; 
        background: url('./../../media/component/radioButton5.png') no-repeat;
        background-size: contain;
        
    }*/
    #questionPage{
  
        /* display: flex;
        flex-direction: column; 
        align-items: center; */
        margin: 0 -2vmin;
        width: 100vw;
        overflow-x: hidden;
        overflow-y: hidden;
        animation-name: fadeUpIn;/*跟這個標籤(#square)說要執行的動畫名字*/
        animation-duration: 5s;/*跟標籤(#square)說這個動畫要跑多久，我設定1秒即是我完成這個動畫需要1秒的時間*/
        animation-iteration-count: 1; /*跟標籤(#square)說這個動畫要執行幾次，1就是執行1次不會重複*/
    }

    .pageHeader{
        display: flex;
        flex-direction: row;
        justify-content: center;
        background: rgb(12,20,30) ;
        width: 100%;
        box-sizing : border-box;
        padding: 6.5vmin 0;
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

    .pageForm
    {
        /* background: rgb(19,30,45) ; */
        background: #19283d;
        box-sizing: border-box;
        margin: 10vmin 6vmin;
        padding: 5vmin 8vmin;
    }

    .pageBack
    {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 10vmin 0;
        box-sizing: border-box;
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

    .backList
    {
       /* background: red;*/
        color: #A9A9A9;
        width: 45vmin;
        cursor: pointer;
        display: block;
        /*text-align: justify;
        text-align-last: justify;*/
        padding: 3vmin 7vmin;
    }

    .backImg
    {
        width: 100%;
        height: auto;
    }
</style>

