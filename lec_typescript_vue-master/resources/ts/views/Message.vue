<template>
  <div class="container messge mx-auto">
    <img alt="Vue logo" src="../assets/logo.png" class="mx-auto" />
    <section class="section mb-10">
      <input
        type="text"
        v-model="message"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <div>{{ message }}</div>
    </section>
    <section class="section mb-10">
      <Children parentMessage="ho?"></Children>
    </section>
    <section class="section mb-10">
      <Children2 :parentMessage="message2"></Children2>
    </section>
    <section class="section mb-10">
      <Children3 :parentMessage2="message3"></Children3>
      <button @click="chgMessage">CHANGE SOMETHING!</button>
    </section>
    <section class="section mb-10">
      <Children4 @counter="counter" @decreseing="decrese"></Children4>
      <p>NOW :: {{ count }}</p>
    </section>
    <section class="section mb-10">
      <Children5></Children5>
    </section>
    <section class="section mb-10">
      <Children6 v-model="checked" @chg="chg"></Children6>
      <span>{{ agreeTxt }}</span>
    </section>
    <section class="section mb-10 h-56">
      <Children7></Children7>
    </section>
    <section class="section mb-10 h-56">
      <Children8></Children8>
    </section>
    <section class="section">
      <Children9></Children9>
    </section>
    <section class="section mb-10 h-56">
      <Children10></Children10>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import Children from '@/components/Children.vue'
import Children2 from '@/components/Children2.vue'
import Children3 from '@/components/Children3.vue'
import Children4 from '@/components/Children4.vue'
import Children5 from '@/components/Children5.vue'
import Children6 from '@/components/Children6.vue'
import Children7 from '@/components/Children7.vue'
import Children8 from '@/components/Children8.vue'
import Children9 from '@/components/Children9.vue'
import Children10 from '@/components/Children10.vue'

@Component({
  components: {
    Children,
    Children2,
    Children3,
    Children4,
    Children5,
    Children6,
    Children7,
    Children8,
    Children9,
    Children10,
  },
})
export default class Message extends Vue {
  message = 'ready for input'
  message2 = 'ho2'
  message3 = 'default'

  chgMessage() {
    this.message3 = 'NOW CHANGED!'
  }

  count = 0

  counter() {
    this.count++
  }
  decrese() {
    this.count--
  }

  @Provide('message') message5 = 'hello inject'

  checked = false
  agreeTxt = 'don`t agree'
  chg(checked: boolean) {
    this.checked = checked
    this.agreeTxt = checked ? 'agree' : 'don`t agree'
  }
}
</script>
