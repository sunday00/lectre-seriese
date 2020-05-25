import Vue from 'vue';
import Carousel from './components/Carousel.vue';
import PortalFrom from './components/PortalFrom.vue';
import PortalTo from './components/PortalTo.vue';
import PortalVue from 'portal-vue'

Vue.use(PortalVue);

let app = new Vue({
    el: '#pz',
    components:{
        Carousel, PortalFrom, PortalTo
    },
    data(){
        return {
            
        }
    },
    mounted(){
        
    },
    methods: {
        
    }
});