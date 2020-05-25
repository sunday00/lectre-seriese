<template>
  <p>
    <input
      class="input"
      type="checkbox"
      :checked="checked"
      @change="chg(checked)"
    />
  </p>
</template>

<script lang="ts">
import { Component, Vue, Model, Emit } from 'vue-property-decorator'

@Component
export default class Children6 extends Vue {
  @Model('chg', { type: Boolean }) readonly checked!: boolean

  @Emit()
  // chg(e: Event) { return e.target.checked }
  // this is worked. but lint recommend e.target may return null, so null.cheked can be throw exception.
  chg(prevChk: boolean) {
    return !prevChk
  }
}
</script>

<style></style>
