<template>
  <div class="container mx-auto">
    <AppHeader></AppHeader>
    <img alt="Vue logo" src="../assets/logo.png" class="mx-auto" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import HelloWorld from '@todo/components/HelloWorld.vue'
import Header from '@todo/components/Header.vue'

@Component({
  components: {
    "AppHeader": Header,
    HelloWorld
  }
})
export default class Home extends Vue {

}
</script>
