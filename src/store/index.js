import { createStore,mapState, mapMutations, mapActions, mapGetters } from 'vuex';


const store = createStore({
  state: {
    doctor : '',
    identity : 1,
    gender : 1,
    age : 60,
    questionNo: '',
    direction : {
      'no' : '4',
      'title' : '年齡',
      'kind' : 2,
    },
    kind : {
      'no' : 1,
      'title' : "白內障手術",
      'kind' : 1,
    }
  },
  getters: {},
  mutations: {},
  // actions: actions
})



export default store