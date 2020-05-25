<template>
    <div class="theme-switcher flex items-center mr-6">
        <button v-for="(color, theme) in themes" :key="color"
         class="rounded-full w-6 h-6 border-4 border-gray-700 mr-2"
         :class="'bg-' + color"
         @click="selectedTheme = theme"></button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            themes: {
                'theme-light':'white', 
                'theme-dark':'black', 
                'theme-christmas':'red-400', 
            },
            selectedTheme: 'theme-light'
        }
    },
    mounted () {
        console.log('Component mounted.');
        this.selectedTheme = localStorage.getItem('theme') || 'theme-light';
    },
    watch : {
        selectedTheme () {
            document.body.className = document.body.className.replace(/theme-\w+/, this.selectedTheme);
            localStorage.setItem('theme', this.selectedTheme);
        }
    }
}
</script>

<style>

</style>