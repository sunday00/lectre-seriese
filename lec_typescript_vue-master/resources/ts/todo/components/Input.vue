<template>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2 hidden" for="todo">
      input todo
    </label>
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="todo"
      type="text"
      v-model="title"
      placeholder="input your todo"
      @keyup.enter="addItem"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { mapState } from 'vuex'
import Item from '@todo/components/Item.vue'

@Component({
  computed: mapState(['todoList']),
})
export default class Input extends Vue {
  title = ''
  todoList!: Item[]
  addItem() {
    this.$store.commit('addItem', {
      id: this.todoList.slice(-1)[0].id + 1,
      title: this.title,
      status: 'active',
    })
  }
}
</script>
