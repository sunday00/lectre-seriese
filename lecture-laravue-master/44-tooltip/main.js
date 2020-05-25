import ComponentToolTip from './components/ComponentToolTip.vue';
import Tooltip from 'tooltip.js';

Vue.directive('tooltip', {
    bind(elem, bindings){
        new Tooltip(elem, {
            placement: bindings.arg || 'top',
            title: bindings.value
        });
    }
});

let app = new Vue({
    el: '#pz',
    components:{
        componenttooltip: ComponentToolTip
    },
    data(){
        return {
            
        }
    },
    mounted(){
        // document.querySelectorAll('[data-tooltip="toolTip!"]').forEach((ele)=>{
        //     new Tooltip(ele, {
        //         placement: ele.dataset.tooltipPlacement || 'top',
        //         title: ele.dataset.tooltip
        //     });
        // });
    },
    methods: {
        
    }
});