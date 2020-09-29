import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    choice:{},
    option:{},
    wins:0,
    ties:0,
    loses:0
  },
  mutations: {
    updateUser:function(state,type){
      state.choice=type;
    },
    updateComputer:function(state,type){
      state.option=type;
    },
   
    updateScore:function(state,score){
    if(score==0)
    {
      state.ties++;
    }else if(score==1){
      state.wins++;

    }
    else if(score==-1){
      state.loses++;
    }
    }
    
  },
  actions: {},
  modules: {}
});
