<template>
    <span class="formButton" @click="selectRadio($event);">
        {{ text }}
        <input class="inputRadio" type="radio" v-bind:name="name" v-bind:value="val"/>
    </span>
</template>
<script>
import store from '@/store';


export default {
    props: ['obj'],
    data (props){
        return {
            text : props.obj.text,
            val : props.obj.val,
            name : props.obj.name,
            move : store.state.move
        }
    },
    methods:{
        selectRadio(e)
        {
            let button = e.target;
            let radios = document.querySelectorAll('input[name=' + button.querySelector('input').getAttribute('name') + ']');

            
            for(let item of radios)
            {
                if(item.parentNode == button)
                {
                    button.classList.add('selectRadio');
                    button.querySelector('input').checked = true;
                    item.setAttribute('data-home',true);
                    this.move(e);

                    let radio = button.querySelector('input');
                    store.state.data[radio.getAttribute('name')] = radio.value;

                }
                else
                {
                    item.parentNode.classList.remove('selectRadio');
                    item.setAttribute('data-home',false);
                }
            }
        },
        // move(e)
        // {
        //     let father = e.target.closest('.slider');
        //     let bro = father.nextSibling;
        //     let move = (bro.offsetLeft - father.offsetLeft);
        //     //slider框
        //     let gp = father.closest('#slider_content');

        //     father.style.transform = "translate(-" + move + "px, 0%) 1s" ;
        //     // console.log(father.style.transform = "translate( -" + move + "px, 0%)");
        //     gp.scrollLeft += move;
        //     console.log(father.offsetLeft,bro.offsetLeft);
        // }
    }
}
</script>

<style  scoped>
   /* .formButton{
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
    /* .formButton:after{
        display:inline-block;
        content:'';
        overflow:hidden;
        width:100%;
        height: 0;
        
    } */

    .selectRadio
    {
        /*background-color: #378DCD !important;*/
        border-radius: 5px;
        /* 第一種*/
        background: radial-gradient(circle farthest-side at center,#858d98,#4e8bc8) !important;
        box-shadow: -1px 8px 10px -4px rgba(255, 255, 255, 0.5) inset, 1px -8px 10px -4px rgba(0, 0, 0, 0.5) inset;
    }
</style>