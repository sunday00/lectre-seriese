<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodoItem="addItem"></TodoInput>
    <TodoList v-bind:todoProps="todoItems" v-on:removeTodoItem="removeItem" v-on:toggleTodoCompleteItm="toggleCompleteItem"></TodoList>
    <TodoFooter v-on:clearAllTodoItem="clearAllItem"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  created (){
    console.log("[[[[system]]]] the program is now running");
    this.todoIdx = localStorage.todoIdx ? parseInt(localStorage.todoIdx) + 1 : 0;
    // system start
    this.todoListRefresh();
  },
  components: {
    // componet-name : componentValue
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  data (){
    return {
      todoIdx: 0,
      todoItems: [],
    }
  },
  methods: {
    todoListRefresh (){
      this.todoItems = [];
      if (localStorage.length > 1) {
        // make list
        for (let key in localStorage) {
          if( key.includes('todoItm') ){
            let obj = JSON.parse(localStorage[key]);
            obj = {
              idx: key.substr(7),
              completed: obj.completed,
              itm: obj.itm
            }
            this.todoItems.push( obj );
          }
        }
        // sort list
        this.todoItems.sort((a,b) => {
          return a.idx - b.idx;
        });
      }
    },
    addItem (newTodoItm){
      console.log("[[[[system]]]] " + newTodoItm + " is added");
      localStorage.setItem('todoIdx', this.todoIdx);

      let obj = {
        completed: false,
        itm: newTodoItm
      }

      localStorage.setItem("todoItm"+this.todoIdx, JSON.stringify(obj));
      this.todoIdx ++;

      this.todoListRefresh();
    },
    removeItem (itm, idx){
      let delTarget = (itm.idx);
      localStorage.removeItem("todoItm"+delTarget);
      this.todoItems.splice(idx, 1);
    },
    toggleCompleteItem (item, idx){
      // item.completed = !item.completed;
      this.todoItems[idx].completed = !this.todoItems[idx].completed;
      let obj = {
        completed : item.completed,
        itm: item.itm
      }
      localStorage.setItem( "todoItm"+item.idx, JSON.stringify(obj) );

      // console.log(this.todoItems[idx]);
      if (item.completed){
        console.log("[[[[system]]]] " + item.itm + " was done by you!");
      } else {
        console.log("[[[[system]]]] " + item.itm + " should be done.");
      }
    },
    clearAllItem (){
      let really = confirm("All Todo will be removed. Please make sure your willing to.");

      if (really) {
        localStorage.clear();
        console.log("[[[[system]]]] storage is empty!!");
      } else {
        return false;
      }

      this.todoItems = [];
      this.todoIdx = 0;
      this.todoListRefresh();

    }
  }
}
</script>

<style>
  body{
    text-align: center;
    background-color: #F6F6F6;
  }
  input{
    border-style: groove;
    width: 200px;
  }
  button{
    border-style: groove;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>
