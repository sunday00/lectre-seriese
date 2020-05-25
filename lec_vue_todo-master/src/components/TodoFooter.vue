<template>
  <footer class="clearAllContainer">
      <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </footer>
</template>

<script>
export default {
  methods: {
    clearTodo (){
      this.$emit('clearAllTodoItem');
    }
  }
}
</script>

<style scoped>
  .clearAllContainer {
    width: 8.5rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }
  .clearAllBtn{
    color: tomato;
    display: block;
    margin: 0 auto;
    box-shadow: 2px 2px 4px #ddd;
  }
</style>