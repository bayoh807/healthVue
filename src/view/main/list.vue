<template>
    <div id="container">    
        <div id="slider_content">
            <div class="slider">
                <div class="fromQuestion">123</div>
            </div>
            <div class="slider">
                <div class="fromQuestion">123</div>
            </div>
            <div class="slider">
                <div class="fromQuestion">123</div>
            </div>
            <div class="slider">
                <div class="fromQuestion">123</div>
            </div>
        </div>
        <div id="reserFooter">123</div>
    </div>
</template>
<script>
console.log(123);

export default {
    data(){

    }
}
</script>

<style lang="scss">

</style>
<style scoped>
    #reserFooter{
        flex: 0 0 auto;
        width: 100%;
        z-index: 500;
        background: red;
        position: absolute;
        bottom: 0;
        left: 0;
    }
</style>