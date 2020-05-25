<template>
  <div>
    <h1 class="title font-bold">TODO LIST</h1>
    <nav class="bg-grey-light p-3 rounded font-sans w-full">
      <ol class="list-reset flex text-grey-dark">
        <li>
          <router-link to="/todo/todo/all">All</router-link>
        </li>
        <li><span class="mx-2">/</span></li>
        <li>
          <router-link to="/todo/todo/active">Active</router-link>
        </li>
        <li><span class="mx-2">/</span></li>
        <li>
          <router-link to="/todo/todo/clear">Done</router-link>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  
}
</script>
