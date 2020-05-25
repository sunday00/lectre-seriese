<template>
  <div class="relative">
    <div
      class="relative z-10 block mx-auto h-8 w-24 rounded-full overflow-hidden border-2 border-gray-600 focus:outline-none focus:border-white"
      @click="toggle"
    >
      Featured
    </div>
    <div
      class="relative block mt-2 mx-auto py-2 w-64 bg-white rounded-lg shadow-xl"
      v-show="show"
    >
      <h5
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
      >
        Special title treatment
      </h5>
      <p
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
      >
        With supporting text below as a natural lead-in to additional content.
      </p>
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >Go somewhere</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import Toggle from './Toggle.vue'

@Component({
  components: { Toggle },
})
export default class Children7 extends Mixins(Toggle) {}
</script>

<style></style>
