<template>
  <div class="dropdown">
    <button
      class="btn btn-success"
      @click="toggle"
      type="button"
      id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Dropdown button
    </button>
    <div
      class="dropdown-menu show"
      v-show="show"
      aria-labelledby="dropdownMenuButton"
    >
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator'
import Toggle from './Toggle.vue'

@Component({
  components: { Toggle },
})
export default class Children8 extends Mixins(Toggle) {}
</script>

<style></style>
