<template>
  <div>
      <transition-group name="list" tag="ul">
        <!-- <li v-for="(item, idx) in todoProps" v-bind:key="item.idx" class="shadow list-item"> -->
        <li v-for="(item, idx) in this.$store.state.todoItems" v-bind:key="item.itm" class="shadow list-item">
          <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: item.completed}" v-on:click="toggleComplete(item, idx)"></i>
          <!-- <i class="checkBtn" v-bind:class="{checkBtnCompleted: item.completed}" v-on:click="toggleComplete(item, idx)">V </i>  -->
          <span v-bind:class="{textCompleted: item.completed}"> {{ item.itm }} </span>
          <span class="removeBtn">
            <i class="fas fa-trash-alt" v-on:click="removeTodo(item, idx)"></i>
          </span>
          <!-- <button class="removeBtn" v-on:click="removeTodo(item, idx)">del</button> -->
        </li>
      </transition-group>
  </div>
</template>

<script>
export default {
  props: [
    'todoProps'
  ],
  methods: {
    removeTodo (itm, idx){
      this.$emit("removeTodoItem", itm, idx);
    },
    toggleComplete (itm, idx){
      this.$emit("toggleTodoCompleteItm", itm, idx);
    }
  }
}
</script>

<style scoped>
  ul{
    list-style: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li{
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background-color: white;
    border-radius: 5px;
  }
  .checkBtn{
    line-height: 45px;
    color: #62acde;
    margin: 0 5px;
  }
  .checkBtnCompleted{
    color: #b3adad;
  }
  .textCompleted{
    text-decoration: line-through;
    color: #b3adad;
  }
  .removeBtn{
    margin-left: auto;
    color: #de4343;
  }

  /* list transit */
  .list-enter-active, .list-leave-active {
    transition: all 500ms;
  }
  .list-enter, .list-leave-to { /* enter-to , leave-from opcity : 1 */
    opacity: 0;
    transform: translateY(30px);
  }

</style>
