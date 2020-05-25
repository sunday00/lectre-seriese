<template>
  <div>
    {{ $store.state }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class VuexEx2 extends Vue {
  created() {
    console.log(this.$store.state)
    console.log(this.$store.state.count)
    console.log(this.$store.getters)
    console.log(this.$store.getters.data)
    console.log(this.$store.getters['moduleA/data'])
  }
}
</script>
