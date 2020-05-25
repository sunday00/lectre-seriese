<template>
  <div class="container mx-auto">
    <AppHeader></AppHeader>
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Header from '@todo/components/Header.vue'

@Component({
  components: {
    AppHeader: Header,
  },
})
export default class About extends Vue {
  
}
</script>
