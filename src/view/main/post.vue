<template>
    <div id="questionPage">    
        <!--<div class="pageHeader">
            <img class="sharerImg" :src="avatar" >
            <span class="contentSet" style="text-align: left;" v-html="sharer"></span>
        </div> -->
        <div class="pageTitle">{{ post.title }}</div>
        <div class="pageContent">
           
            <div class="content contentSet" v-html="post.content"></div>
        </div>

        
    </div>
</template>
<script>
import Connection from '@/view/components/Connection.vue';
import { apiPostPost } from '@/api';
import store from '@/store';
  

export default {
    data(){
        return {
            post : {}
            // showInfo : store.state.showInfo
        }
    },
    watch : {
  
    },
    methods : {
   
 
    },
    created() {  
        this.rep = apiPostPost({
            'log_no' : 0,
            'postId' : this.$route.params.postId
        }).then((response) => {
            store.state.loading = false;
            this.post = response.data.data;
            console.log(this.post);
            // store.state.question = {
            //     avatar : './../src/media/questionAvatar/' + question.avatar,
            //     sharer : '內容分享者：<br>' + question.sharer,
            //     title : question.title,
            //     back : question.back,
            //     content : question.content,
            //     video : question.video_src + '',
            //     log : response.data.data.log,
            //     back : question.back,
            //     params : question.params
            // };
            // document.getElementById('header').setAttribute('hidden','true');

            // this.$router.push(
            // {
            //     name : 'question',
            //     params: { name: 'harry' }
            // });
            
            
        
        });

    },
    components : {
        Connection
    }
}
</script>

<style lang="scss">

</style>
<style scoped>
    #questionPage{

        margin: 0 -3vmin;
        /*width: 100vw;*/
        overflow-x: hidden;
        overflow-y: hidden;
  
    }

    .pageHeader{
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        background: rgb(12,20,30) ;
        width: 100%;
        box-sizing : border-box;
        padding: 6.5vmin 0;
        animation-name: TopToIn;/*跟這個標籤(#square)說要執行的動畫名字*/
        animation-duration: 1s;/*跟標籤(#square)說這個動畫要跑多久，我設定1秒即是我完成這個動畫需要1秒的時間*/
        animation-iteration-count: 1; /*跟標籤(#square)說這個動畫要執行幾次，1就是執行1次不會重複*/
    }

    .pageTitle
    {
        margin: 5vmin 8vmin;
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

        animation-name: RightToIn;/*跟這個標籤(#square)說要執行的動畫名字*/
        animation-duration: 3s;/*跟標籤(#square)說這個動畫要跑多久，我設定1秒即是我完成這個動畫需要1秒的時間*/
        animation-iteration-count: 1; /*跟標籤(#square)說這個動畫要執行幾次，1就是執行1次不會重複*/
    }

    .pageContent
    {
        color:white;
        margin: 0 0 10vmin 0;
        animation-name: contentUpIn;/*跟這個標籤(#square)說要執行的動畫名字*/
        animation-duration: 5s;/*跟標籤(#square)說這個動畫要跑多久，我設定1秒即是我完成這個動畫需要1秒的時間*/
        animation-iteration-count: 1; /*跟標籤(#square)說這個動畫要執行幾次，1就是執行1次不會重複*/
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

