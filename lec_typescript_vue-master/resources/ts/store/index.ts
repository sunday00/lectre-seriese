import Vue from "vue";
import Vuex, { StoreOptions, ActionContext } from "vuex";
import moduleA from './moduleA.store';
import moduleB from './moduleB.store';

Vue.use(Vuex);

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {}
// });

export interface RootState {
  count: number
}

const store: StoreOptions<RootState> = {
  modules: {
    moduleA,
    moduleB
  },
  state: {
    count: 0
  },
  mutations: {
    setCount (state, count: number) {
      state.count = count
    }
  },
  actions: {
    increase({state, commit}){
      commit('setCount', state.count + 1)
    },
    decrease({state, commit}){
      commit('setCount', state.count - 1)
    }
  },
  getters: {
    count: (state) => state.count
  }
}

export default new Vuex.Store(store)
