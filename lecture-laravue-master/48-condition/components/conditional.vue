<template>
    <transition name="fade">
        <div v-show="isVisible">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
import inViewport from 'in-viewport';
export default {
    props:[
        'whenHidden'
    ],
    data(){
        return {
            isVisible: false
        }
    },
    mounted(){
        window.addEventListener('scroll', this.checkDisplay, {passive: true});
    },
    methods: {
        checkDisplay(){
            this.isVisible = !inViewport(document.querySelector(this.whenHidden));
        }
    },
}
</script>

<style>
    body{
        height:300vh;
    }
    .button{
        position: fixed;
    }

    .fade-enter-active, .fade-leave-active{
        transition: opacity 500ms;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
</style>