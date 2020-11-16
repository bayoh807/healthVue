<template>
    <span class="formButton" >
        <!-- <input type="radio" v-name="" v-model="val"/> -->
    </span>
</template>
<script>
export default {
    props: ['obj'],
    data (props){
        // console.log(props.obj);
        return {
            // text : props.obj.text,
            // val : props.obj.val,
            // name : props.obj.name
        }
    }
}
</script>

<style  scoped>
    .formButton{
        background: red;
    }
</style>