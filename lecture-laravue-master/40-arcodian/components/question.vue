<template>
    <div>
        <item v-for="(question, index) in questions" 
            :key="index" 
            :question="question"
            @toggled="onToggle"
            :is-open="activeIdx == index"></item>
    </div>
</template>

<script>
import item from './item.vue';
export default {
    components:{
        item
    },
    props: {
        questions : Array
    },
    data() {
        return {
            // isOpen: false
            activeIdx: null
        };
    },
    methods: {
        onToggle(index){
            this.activeIdx = this.activeIdx != index ? index : null;
        }
    }
};
</script>