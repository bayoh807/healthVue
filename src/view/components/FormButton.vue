<template>
    <span class="formButton" @click="selectRadio($event)">
        {{ text }}
        <input class="inputRadio" type="radio" v-bind:name="name" v-bind:value="val" />
    </span>
</template>
<script>
export default {
    props: ['obj'],
    data (props){
        return {
            text : props.obj.text,
            val : props.obj.val,
            name : props.obj.name
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
                }
                else
                {
                    item.parentNode.classList.remove('selectRadio');;
                }
            }
        }
    }
}
</script>

<style  scoped>
    .formButton{
        cursor: pointer;
        display:block; 
        text-align:justify;
        text-align-last:justify;
        width: 20vmin;
        font-size: 4vmin;
        padding: 2.7vmin 3vmin;
        box-sizing : border-box; 
        background: url('./../../media/component/radioButton.png') no-repeat;
        background-size: contain;
        
    }

    .selectRadio
    {
        background-color: #378DCD;
        border-radius: 5px;
    }
</style>