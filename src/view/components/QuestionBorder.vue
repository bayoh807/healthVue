<template>
    <div class="slider" @click="questionPage(question)">
        <div class="fromQuestion">
            <div class="listContent">
                <span class="listLeft listNo">{{ index }}</span>
                <span class="listTitel">{{ title }}</span>
            </div>
            <div class="listContent">
                <span class="listLeft">
                    <img class="sharerImg" :src="avatar" >
                </span>
                <span class="listSharer" v-html="sharer"></span>
            </div>
        </div>
    </div>
</template>

<script>

import router from '@/router';
import store from '@/store';

export default {
    props: ['obj'],
    data(props){
        return {
            question : props.obj.id,
            index : props.obj.sort,
            title : props.obj.title,
            avatar : './../src/media/questionAvatar/' + props.obj.avatar,
            sharer : '內容分享者：<br>' + props.obj.sharer
        }
    },
    methods : {
        questionPage(question)
        {
            //隱藏header;
            document.getElementById('header').setAttribute('hidden','true');

            store.state.questionNo = question;
  
            router.replace({
                name : 'question',
                params: { name: 'harry' }
            });
        }
    },
    beforeCreate(){
        this.index = parseInt(this.index) < 10 ? ('0' + this.index) : this.index;
    },
    components : {
  
    }
}
</script>


<style  scoped>
    .fromQuestion{
        box-sizing : border-box;
        padding: 0 5vmin;
        justify-content: space-evenly;
    }

    .listContent{
        display: flex;
        flex-direction: row;
        width: 100%;

    }

    .listLeft
    {
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-content: center;
        box-sizing : border-box;
        max-width: 15vmin;
        margin: 0 2.5vmin;
        /* padding: 0 1vmin; */
    }

    .listNo {
        color : #378DCD;
        font-size: 11vmin;
        /*padding: 0 10vmin;
        width: 10%; */
    }


    .listTitel,.listSharer
    {
        letter-spacing: 0.6vmin;
        line-height: 6vmin;
    }

   .listSharer
   {
       font-size: 3.5vmin;
       color: #A9A9A9;
   } 
   
    .sharerImg{
        max-width: 15vmin;
        width: 100%;
        height: auto;
    }
</style>