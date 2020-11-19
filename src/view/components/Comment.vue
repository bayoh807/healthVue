<template>
    <div class="comment">
        <div class='description'>對於內容，您給予幾顆星？</div>
        <div class="starts">
            <div class="start" @click="changeStart($event)">
                <img class="downStart" :src="start" data-shine="false">
                <!-- <img class="upStart" :src="start"> -->
            </div>
            <div class="start" @click="changeStart($event)">
                <img class="downStart"  :src="start" data-shine="false">
                <!-- <img class="upStart" :src="start"> -->
            </div>
            <div class="start" @click="changeStart($event)">
                <img class="downStart"  :src="start" data-shine="false">
                <!-- <img class="upStart" :src="start"> -->
            </div>
            <div class="start" @click="changeStart($event)">
                <img class="downStart"  :src="start" data-shine="false">
                <!-- <img class="upStart" :src="start"> -->
            </div>
            <div class="start" @click="changeStart($event)">
                <img class="downStart"  :src="start" data-shine="false">
                <!-- <img class="upStart" :src="start"> -->
            </div>
        </div>
        <div class="commentConent">
            <textarea name="comment"  maxlength="100" placeholder="評論上限100字"></textarea>
        </div>
        <div class="commentSubmit" >
            <span class="formButton" @click="checkComment($event)">
                送出
            </span>
        </div>
        
    </div>
</template>

<script>

import { apiPostComment } from '@/api';
import store from '@/store';
  
export default {
    data()
    {
        return {
            src : './../src/media/component/',
            start : '',
            yes_start : 'start.png',
            no_start : 'no_start.png'
        }
    },
    methods : {
        changeStart(e)
        {
            let starts = document.getElementsByClassName('downStart');

            //檢查有沒有超過所點的星星
            let check = false;

            for(let item of starts)
            {
                if((item != e.target && !check) || item == e.target)
                {
                    item.setAttribute('src',this.src + this.yes_start);
                    item.setAttribute('data-shine',true);

                    check = item == e.target ? true : false;
                }
                else
                {
                    item.setAttribute('src',this.src + this.no_start);
                    item.setAttribute('data-shine',false);
                }
                
            }
        },
        checkComment(e)
        {
                let shine = document.querySelectorAll('img[data-shine=true]');
                let comment = document.querySelector('textarea[name=comment]').value;

                switch (true) {
                    case shine.length == 0:
                        alert('未選取星星');
                        break;
                    case comment.length == 0:
                        alert('評論未填寫');
                        break;
                    default:
          
                        this.rep = apiPostComment({
                            log_no: store.state.comment.log,
                            appraisal: shine.length,
                            comment: comment
                        }).then((response) => {
                            e.target.setAttribute('disabled','disabled');
                             store.state.showInfo = response.data.code == 1 ? true : false;
                            // response.data.data.map((val,id) => {
                            //     console.log(val);
                                
                            // })
                        });
                        break;
                }
        }

    },
    created(){
        this.start = this.src + this.no_start
    }
}
</script>
<style scoped>
    .comment
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        color: white;
    }
    .commentSubmit
    {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 5vmin 0;

    }
    .formButton{
    
        /* display: inline-block;
        vertical-align: top; */

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
        
    }
    /* .formButton:after{
        display:inline-block;
        content:'';
        overflow:hidden;
        width:100%;
        height: 0;
        
    } */
    .starts
    {
        width: 100%;
        display: flex;
        flex-direction: row;
        margin: 5vmin 0;
        box-sizing: border-box;
    }
    .starts .start{
        cursor: pointer;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .start .downStart{
        width: 100%;
        height: 100%;
        max-height: 100%;
        /* position:absolute; */
    
    }

    .start .upStart{
        border: red 1px solid;
        width: 10vmin;
        height: 10vmin;
        position:absolute;
        z-index: 10000;

    }
    .description
    {
        letter-spacing: 0.6vmin;
        text-align: center;
    }
    .commentConent textarea
    {
        background: #b1b5ba;
        color: black;
        width: 100%;
        height: 40vmin;
        font-size: 5vmin;
        padding: 2vmin 4vmin;
        box-sizing: border-box;
        outline: none;
        resize: none;
    }
</style>