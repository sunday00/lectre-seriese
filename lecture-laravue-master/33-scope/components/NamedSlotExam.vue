<template>
    <ul>
        <li v-for="item in items" :key="item.idx">
            <slot name="menu-item" :item="item"><strong>{{ item }}</strong></slot>
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