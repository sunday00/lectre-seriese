<template>
    <div>
        <portal to="destination" :item="hello">
            <p>This slot content will be rendered whereverr the &gt;portal-target&lt; with name 'destination' is located.</p>
            <p>{{ hello }}</p>
        </portal>
    </div>
</template>

<script>
export default {
    data(){
        return {
            hello: "??"
        }
    }
}
</script>

<style>

</style>