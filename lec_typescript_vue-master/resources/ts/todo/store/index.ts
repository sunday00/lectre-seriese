import Vue from "vue";
import Vuex, { StoreOptions, ActionContext } from "vuex";
import { State, Item } from '@todo/store/store.interface'
import AxiosService from '@todo/service/axios'
import { AxiosResponse } from 'axios';

Vue.use(Vuex);

const store: StoreOptions<State> = {
  modules: {

  },
  state: {
    todoList: []
  },
  mutations: {
    addItem(state, item: Item) {
      state.todoList.push(item)
    },
    changeStatus(state, { id, status } : { id: number, status: 'active'|'clear' }) {
      state.todoList[id].status = status
    },
    removeItem(state, id:number) {
      state.todoList.splice(id, 1)
    },
    setTodoList(state, todoList: Item[]) {
      state.todoList = todoList
    }
  },
  actions: {
    async initData({commit}) {
      const res: AxiosResponse<{todoList: Item[]}> = await AxiosService.instance.get('/fakedb.json')
      commit( 'setTodoList', res.data.todoList )
    }
  },
  getters: {
    allTodo: (state) => state.todoList,
    activeTodo: (state) => {
      return state.todoList.filter((item: Item) => item.status === 'active')
    },
    clearTodo: (state) => {
      return state.todoList.filter((item: Item) => item.status === 'clear')
    },
  }
}

export default new Vuex.Store(store)
