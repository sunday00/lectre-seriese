<template>
  <div>
    <button
      @click="counter"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      EMITTER
    </button>
    <button
      @click="decrese"
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      DCREASE
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'

@Component
export default class Children4 extends Vue {
  @Emit()
  counter() {
    //this is empty ok.because @Emit should automatilly
    // trrigered that named same as child emmitted event method
  }
  @Emit('decreseing')
  decrese() {
    // when the name is different, pass through emit decorator
  }
}
</script>

<style></style>
