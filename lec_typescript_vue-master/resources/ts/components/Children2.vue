<template>
  <div>
    {{ parentMessage }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Children2 extends Vue {
  @Prop() parentMessage?: string
}
</script>

<style></style>
