<template>

    <div class="container">    
        <Introduction />
         <div id="slider_content" @scroll="changeScroll($event)">
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
                    <span class="homeInput">
                        <FormButton v-for="item in second" :key="item" v-bind:obj="item"/>
                    </span>
                </div>
            </div>
            <div class="slider">
                <div class="fromQuestion fromRange">
                    <div class="homeTitle">請問患者的年齡是?</div>
                    <span class="homeRange">
                        <input id="age_range" type="range" min="16" max="100" step="1" v-model="age" data-home="false"  name="age" @input="changeAge($event)">
                     
                    </span>
                     <span class="homeInput">
                        <span class="homeAge" >
                            {{ age }}<span style="font-size:5vmin;">歲</span>
                        </span>
                        <span class="formButton" @click="move($event);changeValue($event)">
                            確認
                        </span>
                    </span>
                </div>
            </div>
            <div class="slider">
                <div class="fromQuestion">
                    <div class="homeTitle">請問您想要了解的內容是?</div>
                    <span class="homeInput">
                        <FormSelect :obj="four"/>
                    </span>
                </div>
            </div>
            <div class="slider">
                <div class="fromQuestion">
                    <div class="homeTitle">請問您想從哪個面向了解?</div>
                    <span class="homeInput">
                        <FormSelect :obj="five"/>
                    </span>
                </div>
            </div>
        </div>
        <div class="countPersent">
           <span class="left">◀</span>
           <span class="center">{{ persent }}%</span>
           <span class="right">▶</span>
       </div>
    </div>
</template>

<script>
import Introduction from '@/view/components/Introduction.vue';
import FormButton from '@/view/components/FormButton.vue';
import FormSelect from '@/view/components/FormSelect.vue';
import { apiPostHome,apiPostList } from '@/api';
import store from '@/store';

export default {
    data(){
        return {
            persent : 0,  
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
                   text : '男性',
                   name : 'gender',
                   val : 1
               },
               {
                   text : '女性',
                   name : 'gender',
                   val : 0
               }
           ],
            four : [{'name' : 'kind'},[]],
            five : [{'name' :'direction'},[]],
            age : 58,
            move : store.state.move,
            goNext :  store.state.data
        };
    }, 
    watch : {
        goNext : {
            handler : function(val)
            {
                if(val.age != '' && 
                   val.identity != '' && 
                   val.gender != '' && 
                   val.direction.no != '' &&
                   val.kind.no != ''
                )
                {
                    this.rep = apiPostList({
                        'identity' : store.state.data.identity,
                        'age' : store.state.data.age,
                        'kind' : store.state.data.kind.no,
                        'direction': store.state.data.direction.no,
                    }).then((response) => {
                        store.state.list = response.data.data;
            
                        this.$router.push(
                            {
                                name : 'list',
                                params: { name: 'harry' }
                            });
                    });
                }
            },
            deep: true,
            immediate : true
        }
 
    },
    computed  :{
    
    },
     methods : {
        changeScroll(e){
           this.persent = Math.round((e.target.scrollLeft / (e.target.scrollWidth - e.target.offsetWidth)) * 100) ;
           // console.log(this.persent,e.target.scrollLeft,e.target.scrollWidth);
        },
        changeAge(e)
        {
            let input = e.target;
            
            input.style.background = 'linear-gradient(to right, rgb(78, 139, 200) ' + (1 - ((input.max - input.value) / (input.max - input.min))) * 100 + '% , rgb(35, 57, 84) 0%)';
            console.log(input.style.background);
        },
        changeValue(e){
            let input = document.getElementById('age_range');

            store.state.data[input.getAttribute('name')] = input.value;
          
        },
    
    },
    created() {
        console.log(this.$route.params);
    },
    mounted () {

        store.state.noActivated  = true;

        store.state.doctor = this.$route.params.name
        this.rep = apiPostHome({
            'doctor' : store.state.doctor
        }).then((response) => {
            response.data.data.map((val,id) => {
                if(val.kind == 1)
                {
                     this.four[1].push ({
                        no : val.no,
                        title : val.title,
                        kind : val.kind,
                     })
                }
                else
                {
                    this.five[1].push ({
                        no : val.no,
                        title : val.title,
                        kind : val.kind,
                     })
                }

                store.state.noActivated  = false;
            })
     
        });


    },
    components : {
        Introduction,
        FormButton,
        FormSelect
    }
}

</script>

<style lang="scss">
@import './../../css/introduct.scss';



</style>

<style scoped>
    .countPersent{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        color: white;
        margin: 10vmin 0;
    }
    .left,.right{
        cursor: pointer;
        font-size: 5vmin;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .center
    {
        width: 40%;
        font-size: 8vmin;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .fromQuestion{
        justify-content: space-evenly;
    }

    .fromRange{
        box-sizing: border-box;
        padding: 8vmin 0;
    }



    .homeAge{
        padding: 0 10vmin;
        box-sizing: border-box;
        color: #378DCD;
        font-size: 7vmin;
        margin: 0 5vmin;
        font-weight: 300;
    }
   /* .formButton{
        -webkit-text-align: center;
        cursor: pointer;
        display:block; 
        text-align:justify;
        text-align-last:justify;
        width: 19vmin;
        font-size: 4vmin;
        padding: 2.7vmin 3vmin;
        box-sizing : border-box; 
        background: url('./../../media/component/radioButton.png') no-repeat;
        background-size: contain;
        
    }*/

    #slider_content{
        display: flex;
        overflow-x:auto;
        overflow-y:hidden;
    }

    .homeTitle
    {
        font-size: 4.5vmin;
 
    }

    .slider{
        margin: 0 2vmin;
    }

    .homeRange
    {
        display: flex;
        flex-direction: column;
        width: 100%;
        box-sizing: border-box;
        padding: 0 10vmin;
    }

    /* #age_range{
        background: linear-gradient(to right, rgb(78, 139, 200) 52.381%, rgb(35, 57, 84) 0%) ;
    } */

    .homeRange input[type=range]
    {
        -webkit-appearance: none;
        background: linear-gradient(to right, rgb(78, 139, 200) 52.381%, rgb(35, 57, 84) 0%) ;
        width: inherit;
        height: 0.3rem;
        border-radius: 10px;
    }

    .homeRange input[type=range]::-webkit-slider-thumb
    {
        -webkit-appearance: none;
        height: 1rem;
        width: 1rem;
        background: rgb(78, 139, 200);
        border-radius: 50%;
        box-shadow: 0 .125em .125em #3b4547;
    }
   
</style>
