<template>
    <div class="bg-gray-200 text-center px-4 py-2 m-2 h-10">
        <span v-text="nowCnt"></span>
    </div>
</template>

<script>
import viewport from 'in-viewport';
export default {
    props: {
        to: Number
    },
    data(){
        return {
            nowCnt: 0,
            interval: null
        }
    },
    computed:{
        increase(){
           return  Math.ceil(this.to / 27);
        }
    },
    mounted() {
        viewport(this.$el, () => {
            console.log("fsd");
            this.interval = setInterval(this.tick, 30);
        });
    },
    methods: {
        tick(){
            if( this.nowCnt + this.increase >= this.to ){
                this.nowCnt = this.to;
            
                return clearInterval(this.interval);
            } else {
                this.nowCnt += this.increase;
            }
        }
    },
}
</script>

<style>

</style>