import { createStore,mapState, mapMutations, mapActions, mapGetters } from 'vuex';
import router from '@/router';

const store = createStore({
  state: {
    doctor : '',
    identity : '',
    gender : '',
    age : '',
    questionNo: '',
    showInfo : false,
    direction : {
      'no' : '',
      'title' : '',
      'kind' : '',
    },
    kind : {
      'no' : '',
      'title' : '',
      'kind' : '',
    },
    comment : {
      log : 0,
      back : 0,
    },
    move : function(e)
    {
          let father = e.target.closest('.slider');
          let bro = father.nextSibling;

          //還有下一個可以移動的話
          if(bro != null)
          {
            let move = (bro.offsetLeft - father.offsetLeft);
            //slider框
            let gp = father.closest('#slider_content');

            father.style.transform = "translate(-" + move + "px, 0%) 1s" ;
            // console.log(father.style.transform = "translate( -" + move + "px, 0%)");
            gp.scrollLeft += move;
          }
          else
          {
            console.log(this.state);

            router.replace({
                name : 'list',
                params: { name: 'harry' }
            });
            console.log('到底了');
          }
    }
  },
  getters: {},
  mutations: {},
  // actions: actions
})



export default store