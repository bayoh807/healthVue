<template>
    <div class="pageForm">
        <Comment v-if="back == 0"/>
        <Connection v-else/>
    </div>
</template>

<script>

import Connection from '@/view/components/Connection.vue';
import Comment from '@/view/components/Comment.vue';
import store from '@/store';
  

export default {
    data()
    {
        // console.log('form : ' + store.state);
        return {
            log : '',
            back : ''
        }
    },
    components : {
        Connection,
        Comment
    },
    beforeUpdate()
    {

        // this.log = store.state.comment.log,
        // this.back = store.state.comment.back
    }
}
</script>