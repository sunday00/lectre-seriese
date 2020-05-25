<template>
  <div class="inputBox shadow">
      <form action="" v-on:submit.prevent="addTodo">
        <label for="">
          <input type="text" v-model="newTodoItm">
          <!-- <span class="addContainer">
            <button type="submit">ADD</button>
          </span> -->
          <span class="addContainer" v-on:click.prevent="addTodo">
            <i class="fas fa-plus addBtn"></i>
          </span>
        </label>
      </form>
      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">Dont do that <i class="fas fa-times"></i></h3>
        <p slot="body">Please Input Your job to do Next</p>
        <!-- <button class="modal-default-button" @click="$emit('close')">OK</button> -->
        <!-- <button slot="footer" class="modal-default-button" @click="showModal = false">OK</button> -->
        <button slot="footer" class="modal-default-button" @click="close()">Got it!</button>
      </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  data  (){
    return {
      newTodoItm: "",
      showModal: false,
    }
  },
  methods: {
    addTodo (){
      if (this.newTodoItm !== ''){
        this.$emit('addTodoItem', this.newTodoItm);
        this.clearInput();
      } else {
        this.showModal = !this.showModal
      }
    },
    clearInput (){
      this.newTodoItm = "";
    },
    close (){
      this.showModal = false;
    }
  },
  components: {
    Modal
  }
}
</script>

<style scoped>
  input:focus{
    outline: none;
  }
  .inputBox{
    background-color: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input{
    border-style: none;
    font-size: 1rem;
    width: 80%;
    line-height: 50px;
    height: 50px;
  }
  .addContainer{
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn{
    color: white;
    vertical-align: middle;
  }
</style>