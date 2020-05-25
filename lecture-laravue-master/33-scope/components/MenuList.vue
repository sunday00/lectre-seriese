<template>
<ul>
  <li v-for="item in items" :key="item.idx">
      <slot :item="item" thing="foo" bar="baz" qux="quux">{{ item }}</slot>
  </li>
</ul>
</template>

<script>
export default {
    props:[
        'items'
    ]
}
</script>

<style>

</style>