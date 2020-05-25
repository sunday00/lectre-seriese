<template>
  <div class="container messge mx-auto">
    <img alt="Vue logo" src="../assets/logo.png" class="mx-auto" />
    <section class="section mb-10">
      <VuexEx1></VuexEx1>
    </section>
    <section class="section mb-10">
      <VuexEx2></VuexEx2>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import VuexEx1 from '@/components/vuexEx/VuexEx1.vue'
import VuexEx2 from '@/components/vuexEx/VuexEx2.vue'

@Component({
  components: {
    VuexEx1,
    VuexEx2,
  },
})
export default class VuexExample extends Vue {}
</script>
