import { createStore,mapState, mapMutations, mapActions, mapGetters } from 'vuex';


const store = createStore({
  state: {
    doctor : '',
    identity : '',
    gender : '',
    age : '',
    kind : '',
    direction : ''
  },
  getters: {},
  mutations: {},
  // actions: actions
})



export default store