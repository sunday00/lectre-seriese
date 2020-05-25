<template>
    <div v-show="false">
        <slot></slot>
    </div>
</template>

<script>
import Tooltip from 'tooltip.js';
export default {
    props:{
        name:{},
        placement:{},
    },
    mounted(){
        document.querySelectorAll(`[data-tooltip="${this.name}"]`).forEach((ele)=>{
            new Tooltip(ele, {
                placement: this.placement || 'top',
                title: this.$el.innerHTML,
                html: true
            });
        });
        
    }
}
</script>

<style>

</style>