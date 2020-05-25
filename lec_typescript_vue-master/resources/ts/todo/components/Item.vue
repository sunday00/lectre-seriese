<template>
  <label class="flex w-full border border-gray-400 rounded">
    <span class="bg-gray-300 w-8 py-2">
      <input
        type="checkbox"
        class="form-checkbox text-indigo-600"
        @change="chgStatus"
        :checked="status === 'clear'"
      />
    </span>
    <span class="flex-1 py-2">
      <input type="text" class="w-full mx-2" :value="title" />
    </span>
    <button
      class="items-right bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
      @click="removeItem"
    >
      X
    </button>
  </label>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Item extends Vue {
  @Prop() readonly id!: string
  @Prop() readonly title!: string
  @Prop() readonly status!: 'active' | 'clear'

  chgStatus($event: Event) {
    const checked: boolean = ($event.target as HTMLInputElement).checked
    if (checked) {
      this.$store.commit('changeStatus', { id: this.id, status: 'clear' })
    } else {
      this.$store.commit('changeStatus', { id: this.id, status: 'active' })
    }
  }

  removeItem() {
    this.$store.commit('removeItem', this.id)
  }
}
</script>
