<template>
    <div class="formSelect" >
        <select name="" id="">
            <option selected>Choose...</option>
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
        console.log(props);
        return {
         
        }
    },
    created()
    {
        console.log(this.props);
    },
    methods:{
  
    }
}
</script>

<style  scoped>

</style>