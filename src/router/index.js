import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { 
        path: '/',
        redirect: '/harry/information' 
    },
    {
        name : 'doctor',
        path: '/:name/information',
        component: require('@/view/main/home.vue').default
    },
    {
      name : 'list',
      path: '/:name/list',
      component: require('@/view/main/list.vue').default
    },
    {
      name : 'question',
      path: '/:name/question',
      component: require('@/view/main/question.vue').default
    },
    {
<<<<<<< HEAD
      name : 'post',
      path: '/harry/post',
      query: { 
        postId : '*'
      },
      // props: (route) => ({ postId: route.query.postId }),
      component: require('@/view/main/post.vue').default
=======
      name : 'postId',
      path: '/post/:postId',
      component: require('@/view/main/post.vue').default,
>>>>>>> ae635c5f284083386fc0e14d046498942e31b930

    },
  
    // {
    //   name : 'post',
    //   path: '/:name/post/:postId',
    //   // query: { 
    //   //   postId : '*'
    //   // },
    //   component: require('@/view/main/post.vue').default
    // },
    // {
    //   path: '/:catchAll(.*)',
    // //   component: require('@/views/404.vue').default
    // }
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router