import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const storage = {
    fetch () {
        const arr = [];
        if (localStorage.length > 1){
            for(let i=0; i < localStorage.length; i++){
                if(localStorage.key(i) !== 'loglevel:webpack-dev-server' && localStorage.key(i) !== 'todoIdx'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
        return arr;
    }
}

export const store = new Vuex.Store({
    state: {
        headerText : "TODO with VUE",
        todoItems : storage.fetch(),
    },
});