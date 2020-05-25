<template>
  <div>
    <input
      type="text"
      v-model="message9"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    <button @click="click" class="btn btn-success">Send to component10</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Bus from '@/common/event-bus'

@Component
export default class Children9 extends Vue {
  message9 = ''

  click() {
    Bus.$emit('sendMsg', this.message9)
  }
}
</script>

<style></style>
