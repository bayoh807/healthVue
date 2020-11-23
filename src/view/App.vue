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
import store from '@/store';
    const app = {
        data(){
            return {
                // loading : store.state.loading
            };
        },
        created(){
            // console.log(this.$route);
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