<template>
    <div id="main">
        <img id="header" src="" alt="">
        <div class="container">   
            <router-view></router-view>    
        </div>
        
        <div class="loading" v-if="loading">
            <div class="load"></div>
        </div>
    </div>
</template>

<script>
import { apiPostPost } from '@/api';
import store from '@/store';
    const app = {
        data(){
            return {
                // loading : store.state.loading
            };
        },
        created(){
<<<<<<< HEAD
           console.log(this.$route);
           
            switch (true) {
                case this.$route.name == 'post':
                    console.log(123);
                    this.rep = apiPostPost({
                        'log_no' : 1,
                        'postId' : this.router.query.postId,
                    }).then((response) => {
                        console.log(response);
                        // store.state.list = response.data.data;
            
                        // this.$router.push(
                        //     {
                        //         name : 'list',
                        //         params: { name: 'harry' }
                        //     });
                    });
                    break;
                // case store.state.data.questionNo == '':
                // case store.state.data.identity == '':
                // case store.state.data.age == '':
                // case store.state.data.gender == '':   
                //     // router.replace({
                //     //     name : 'doctor',
                //     //     params: { name: 'harry' }
                //     // });
                //     this.$router.push(
                //     {
                //         name : 'doctor',
                //         params: { name: 'harry' }
                //     });
                //     break; 
            
                default:
                    break;
            }
=======
         
                switch (true) {
                    case store.state.data.questionNo == '':
                    case store.state.data.identity == '':
                    case store.state.data.age == '':
                    case store.state.data.gender == '':   
               
                        if(window.location.pathname.match('\/post\/') == null)
                        {
                            this.$router.push(
                            {
                                name : 'doctor',
                                params: { name: 'harry' }
                            });
                        }
                       
                        break; 
                
                    default:
                        break;
                }
           
           
>>>>>>> ae635c5f284083386fc0e14d046498942e31b930
        },
        watch : {
            '$route'(to, from) {
                // const toDepth = to.path.split('/').length
                // const fromDepth = from.path.split('/').length
                // this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
                // var elem = document.getElementById("myAnimation");   
                // var pos = 0;
                // var id = setInterval(frame, 10);
                // function frame() {
                //     if (pos == 350) {
                //     clearInterval(id);
                //     } else {
                //     pos++; 
                //     elem.style.top = pos + 'px'; 
                //     elem.style.left = pos + 'px'; 
                //     }
                // }
                window.scrollTo(0, 0);
            },
            loading : {
                handler : function()
                {
                    setTimeout(() => {
                        store.state.loading = false;
                        // window.scrollTo(0, 0);
                    },500);
                }
            }
        },
        computed : {
            loading : function()
            {
                //監聽loading狀態
                return store.state.loading;
            }
        }
 
    };

    export default app;
</script>
<style  scoped>

</style>