<template>
    <div class="container">    
        <div id="slider_content">
            <QuestionBorder v-for="item in data" :key="item" v-bind:obj="item" @click="questionPage(item.id)" :ref="item.id"/>
        </div>
        <div id="reserFooter">
            <span>您選擇從「 {{ direction }} 」，了解 {{ kind }}</span>
            <router-link class="link" :to="{ name: 'doctor', params: { name: 'harry' }}"   replace>
                <button class="resetChoose" @click="resetChoose()">
                    重新選擇
                </button>
            </router-link>
            <!-- <button class="resetChoose" @click="resetChoose()">
               
                    重新選擇
            </button> -->
        </div>
    </div>
</template>
<script>
import QuestionBorder from '@/view/components/QuestionBorder.vue';
import store from '@/store';
import { apiPostList,apiPostQuestion } from '@/api';
  

export default {
    data(){
        return {
            kind : store.state.data.kind.title,
            direction : store.state.data.direction.title,
            data : store.state.list,
            questionNo :  ''
        }
    },
    watch : {
        questionNo : {
            handler : function(val)
            {
                store.state.questionNo = val;
               
                this.rep = apiPostQuestion({
                    'no' : store.state.questionNo,
                    'identity' : store.state.data.identity,
                    'age' : store.state.data.age,
                    'gender': store.state.data.gender,
                }).then((response) => {
                    let question = response.data.data.question;

                    store.state.question = {
                        avatar : './../src/media/questionAvatar/' + question.avatar,
                        sharer : '內容分享者：<br>' + question.sharer,
                        title : question.title,
                        back : question.back,
                        content : question.content,
                        video : question.video_src + '',
                        log : response.data.data.log,
                        back : question.back,
                        params : response.data.data.params
                    };
                    // document.getElementById('header').setAttribute('hidden','true');

                    this.$router.push(
                    {
                        name : 'question',
                        params: { name: 'harry' }
                    });
                    
                 
                
                });
            }
        }
    },
    methods : {
        questionPage(question)
        {
            //隱藏header;
            // document.getElementById('header').setAttribute('hidden','true');
            this.questionNo = question;

      
        },
        resetChoose() {
            store.state.data = {
                doctor : '',
                identity : '',
                gender : '',
                age : '',
                kind : {
                    'no' : '',
                    'title' : '',
                    'kind' : '',
                },
                direction : {
                    'no' : '',
                    'title' : '',
                    'kind' : '',
                }
            }
        }
    },
    beforeCreate() {
        // document.getElementById('header').removeAttribute('hidden');
        // this.rep = apiPostList({
        //     'identity' : store.state.identity,
        //     'age' : store.state.age,
        //     'kind' : store.state.kind.no,
        //     'direction': store.state.direction.no,
        // }).then((response) => {
        //     this.data = response.data.data;
        //     // response.data.data.map((val,id) => {
        //     //     console.log(val);
                
        //     // })
        // });
    },
    components : {
        QuestionBorder
    }
}
</script>

<style lang="scss">

</style>
<style scoped>
    #slider_content{
        min-height: calc(100% + 100vmin);
    }
    #reserFooter{
        font-family: '新細明體';
        box-sizing : border-box; 
        width: 100%;
        z-index: 500;
        padding: 2.5vmin 0vmin;
        color: white;
        background: black;
        position: fixed;
        bottom: 0;
        left: 0;

        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    #reserFooter > span {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .resetChoose{
        font-size: 4vmin;
        border-radius: 5px !important;
        background: #434343;
        color: white;
        border-radius: 10px;
        padding: 1vmin 2vmin;
        border:0px blue none;
    }

    .slider{
         margin: 10vmin 2vmin;
    }

</style>

<style module>
    /* #main
    {
        margin-bottom: 10vmin;
    } */

</style>