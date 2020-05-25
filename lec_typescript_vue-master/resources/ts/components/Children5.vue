<template>
  <div>
    {{ message }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Inject } from 'vue-property-decorator'

@Component
export default class Children5 extends Vue {
  @Inject() readonly message!: string
}
</script>

<style></style>
