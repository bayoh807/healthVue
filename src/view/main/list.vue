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
        <div id="reserFooter">
            <span>您選擇從「生活」，了解白內障</span>
            <button class="resetChoose">重新選擇</button>
        </div>
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
        border-radius: 5px !important;
        background: #434343;
        color: white;
        border-radius: 10px;
        padding: 1vmin 2vmin;
        border:0px blue none;
    }

</style>

<style module>
    /* #main
    {
        margin-bottom: 10vmin;
    } */

</style>