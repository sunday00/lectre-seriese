<template>
  <p
    class="text-blue-600 sm:text-green-600 md:text-indigo-600 lg:text-red-600 xl:text-gray-900"
  >
    msg : {{ message9 }}
  </p>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Bus from '@/common/event-bus'

@Component
export default class Children10 extends Vue {
  message9 = ''
  created() {
    Bus.$on('sendMsg', (message9: string) => {
      this.message9 = message9
    })
  }
}
</script>

<style></style>
