import FixedTop from './components/FixedTop.vue';

let app = new Vue({
    el: '#pz',
    components:{
        FixedTop
    },
    data(){
        return {
            isFixed: false
        }
    },
    mounted(){

    },
    methods: {
        toggleFix(isFixed){
            this.isFixed = isFixed;
        }
    }
});