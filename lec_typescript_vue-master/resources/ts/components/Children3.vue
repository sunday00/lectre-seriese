<template>
  <div :class="color">
    {{ parentMessage2 }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

@Component
export default class Children2 extends Vue {
  @Prop() parentMessage2?: string
  color = ''

  @Watch('parentMessage2', { immediate: false, deep: true })
  update(newValue: string, oldValue: string) {
    this.color = 'text-red-600'
    console.log(oldValue, newValue)
  }
}
</script>

<style></style>
