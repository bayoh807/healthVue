<template>
    <div class="comment">
        <div class='description'>請留下您的資訊</div>
        <div class="commentConent">
            <div class="backInformation">
                <label  v-if="(user_input.length ==  0)">
                    <img :src="user" >
                </label>
                <input type="text" name="name" validate="姓名" 
                    v-model="user_input"
                    @focus="checkPoint($event)"
                    @blur="checkPoint($event)"
                />
            </div>
            <div class="backInformation">
                <label v-if="(phone_input.length ==  0)">
                    <img :src="phone" >
                </label>
                <input type="text" name="phone"  validate="電話" 
                    v-model="phone_input" 
                    @focus="checkPoint($event)"
                    @blur="checkPoint($event)"
                />
            </div>
            <div class="backInformation">
                <label v-if="(mail_input.length ==  0)">
                    <img :src="mail" >
                </label>
                <input type="text" name="user_mail"  validate="信箱" 
                    v-model="mail_input" 
                    @focus="checkPoint($event)"
                    @blur="checkPoint($event)"
                />
            </div>
        </div>
        <div class="commentSubmit" >
            <span class="formButton" @click="checkComment($event)">
                送出
            </span>
        </div>
    </div>
</template>

<script>
import { apiPostConnection } from '@/api';
import store from '@/store';

export default {
    data()
    {
        return {
            user : './../src/media/icon/user.png',
            phone : './../src/media/icon/phone.png',
            mail : './../src/media/icon/mail.png',
            user_input : '',
            phone_input : '',
            mail_input : '',
            data : {
                log_no : store.state.question.log,
            }
        };
    },
    watch : {
    },
    methods : {
        checkPoint(e){
            let input = e.target;

            input.previousSibling.hidden = window.event.type == 'focus' ? true : false;
   
        },
        checkComment(e)
        {
           let inputs = document.querySelectorAll('input');
            let data = {};
        
           for(let input of inputs)
           {
                if(input.value == '')
                {
                    alert(input.getAttribute('validate') + '未填');
                    break;
                }
                else
                {
                    this.data[input.getAttribute('name')] = input.value;
                }
           }
            this.rep = apiPostConnection(this.data).    
                    then((response) => {
                        if(response.data.code == 1)
                        {
                            this.user_input = '';
                            this.phone_input= '';
                            this.mail_input = '';
                            alert(response.data.data.message);
                            document.querySelector('.pageForm').setAttribute('hidden','true');

                        }
                   
                    });

        }
    }
}
</script>
<style scoped>
    .description
    {
        letter-spacing: 0.6vmin;
        text-align: center;
    }
    .comment
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        color: white;
    }

    .backInformation  {
        margin: 4vmin 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .backInformation label {
        pointer-events: none;
        position: absolute;
        box-sizing: border-box;
        padding: 0 2vmin;
    }

    .backInformation input {
        border: 0;
        box-sizing: border-box;
        padding: 2vmin 3vmin;
        background: #b1b4b9;
        font-size: 20px;
        letter-spacing: 2px;
        font-weight: bold;
        color: rgb(30,40,61);
        height: 9vmin;
        outline: none;
        resize: none;
    }
    .backInformation label img{
        width: 28vmin;
    }

    .commentConent
    {
        display: flex;
        flex-direction: column;
        padding: 1vmin 0;
    }

    .commentSubmit
    {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 5vmin 0;

    }

    .formButton{
        cursor: pointer;
        letter-spacing: 6px;
        display:block; 
        text-align:justify;
        text-align-last:justify;
        width: 19vmin;
        font-size: 4vmin;
        padding: 10px  10px 10px 15px;
        box-sizing : border-box; 
        background: url('./../../media/component/radioButton.png') no-repeat;
        background-size: contain;      
    }
 

</style>