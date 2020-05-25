<template>
    <div class="dropdown relative">
        <!-- trigger -->
        <div @click.prevent="isOpen = !isOpen">
            <slot name="trigger"></slot>
        </div>

        <!--  body  -->
        <div v-show="isOpen" 
         class="dropdown-menu absolute bg-card py-2 rounded shadow mt-2
          border border-gray-400"
         :class="align === 'left' ? 'pin-l' : 'pin-r'"
         :style="{ width }">
            <slot name="default"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        width: {default:'auto'},
        align: {default:'left'}
    },
    data(){
        return {
            isOpen : false
        }
    },
    watch: {
        isOpen(isOpen){
            if(isOpen) document.addEventListener('click', this.closedropdown);
        }
    },
    methods: {
        closedropdown(e){
            if( !e.target.closest('.dropdown') ){
                this.isOpen = false;
                document.removeEventListener('click', this.closedropdown);
            }
        }
    }
}
</script>

<style>

</style>