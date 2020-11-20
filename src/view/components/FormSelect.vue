<template>
    <div class="formSelect" >
        <select name="" id="">
            <option selected>請選擇▼</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
    </div>
</template>
<script>
export default {
    props: ['obj'],
    data (props){
        
        return {
          
        }
    },
    created()
    {
    },
    watch : {
        'obj' : function(n,o){
            console.log(n);
            console.log(o);
        }
    },
    methods:{
  
    }
}
</script>

<style  scoped>
    .formSelect{
        width: 100%;
        text-align: center;
    }

    .formSelect select{
        border-color:transparent;
        -webkit-appearance: none;  /* google */
        -moz-appearance: none;  /* firefox */
        appearance: none;       /* IE */
        width: 80%;
        text-align-last: center;
        text-align: center;
        padding: 2vmin 0;
        border-radius: 5px;
        background-color: rgba(255,255,255,0);
        color: white;
        outline: none;
        border-width: 6px;
        border-style: solid;

        -moz-border-image: -moz-linear-gradient(bottom left,#d9dde0 0%, #18222e 100%);
	    -webkit-border-image: -webkit-linear-gradient(bottom left,#d9dde0 0%, #18222e 100%);
        border-image: linear-gradient(to top right,#d9dde0 0%, #18222e 100%);
	    border-image-slice: 1;
    }
    .formSelect select option{
        background-color : transparent;
    }
</style>