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
      path: '/:name/list',
      component: require('@/view/main/list.vue').default
    },
    {
      path: '/:name/question',
      component: require('@/view/main/question.vue').default
    },
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