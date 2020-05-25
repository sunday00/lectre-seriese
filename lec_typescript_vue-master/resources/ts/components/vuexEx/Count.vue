<template>
  <!-- <p>{{ $store.getters.count }}</p> -->
  <p>{{ count }}</p>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
// import { Getter } from 'vuex-class'
import { State } from 'vuex-class'

@Component
export default class Count extends Vue {
  // @Getter readonly count!: number
  @State readonly count!: number
}
</script>
