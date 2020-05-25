<template>
  <div>
    <Count></Count>
    <button class="btn btn-success" @click="increase">+</button>
    <button class="btn btn-danger" @click="decrease">-</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Action, Mutation } from 'vuex-class'
import Count from '@/components/vuexEx/Count.vue'

@Component({
  components: {
    Count,
  },
})
export default class VuexEx1 extends Vue {
  @Action readonly increase!: Function
  @Action readonly decrease!: Function

  @Mutation readonly setCount!: Function

  mounted() {
    this.setCount(30)
  }
}
</script>
