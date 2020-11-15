<template>
    <div id="container">    
        <Introduction />
        <Slider />
    </div>
</template>

<script>
import Introduction from '../components/introduction.vue';
import Slider from '../components/sliders.vue';

export default {
    data(){

    },
    components : {
        Introduction,
        Slider
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
</style>