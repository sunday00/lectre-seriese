<template>
  <div class="container mx-auto">
    <AppHeader></AppHeader>
    <AppInput></AppInput>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Header from '@todo/components/Header.vue'
import Input from '@todo/components/Input.vue'
import Item from '@todo/components/Item.vue'

@Component({
  components: {
    "AppHeader": Header,
    "AppInput": Input,
    Item
  }
})
export default class Todo extends Vue {

}
</script>
