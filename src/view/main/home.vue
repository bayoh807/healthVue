<template>
    <div id="container">    
        <Introduction />
        <div id="slider_content">
            <div class="slider">
                <div class="fromQuestion">
                    <div class="homeTitle">請問您的身份是?</div>
                    <span class="homeInput">
                        <FormButton v-for="item in first" :key="item" v-bind:obj="item"/>
                    </span>
                </div>
            </div>
            <div class="slider">
                <div class="fromQuestion">
                    <div class="homeTitle">請問患者是?</div>
                    <span class="homeInput">請問您的身份是?</span>
                </div>
            </div>
            <div class="slider">
                <div class="fromQuestion">
                    <div class="homeTitle">請問患者的年齡是?</div>
                    <span class="homeInput">請問您的身份是?</span>
                </div>
            </div>
            <div class="slider">
                <div class="fromQuestion">
                    <div class="homeTitle">請問您想要了解的內容是?</div>
                    <span class="homeInput">請問您的身份是?</span>
                </div>
            </div>
            <div class="slider">
                <div class="fromQuestion">
                    <div class="homeTitle">請問您想從哪個面向了解?</div>
                    <span class="homeInput">請問您的身份是?</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Introduction from '@/view/components/Introduction.vue';
import FormButton from '@/view/components/FormButton.vue';
import store from '@/store';
import { apiPostHome } from '@/api';

export default {
    data(){
        return {
           first : [
               {
                   text : '家屬',
                   name : 'identity',
                   val : 0
               },
               {
                   text : '病患',
                   name : 'identity',
                   val : 1
               }
           ],
           second : [
               {
                   text : '男',
                   name : 'gender',
                   val : 1
               },
               {
                   text : '女',
                   name : 'gender',
                   val : 0
               }
           ],
           four : [],
           five : [],
        };
    },
    methods : {
        
    },
    created() {
        this.rep = apiPostHome({
                'doctor':'harry'
            }).then((response) => {
                response.data.data.map((val,id) => {
                  
                    if(val.kind == 0)
                    {
                        this.four.push ({
                            no : val.no,
                            title : val.title
                        })
                    }
                    else
                    {
                        this.five.push ({
                            no : val.no,
                            title : val.title
                        })
                    }
                })
            });
    },
    components : {
        Introduction,
        FormButton
    }
}

</script>

<style lang="scss">
@import './../../css/introduct.scss';



</style>

<style scoped>

    #slider_content{
        display: flex;
        overflow-x:auto;
        overflow-y:hidden;
    }

    .homeTitle
    {
        font-size: 4.5vmin;
 
    }
   
</style>
