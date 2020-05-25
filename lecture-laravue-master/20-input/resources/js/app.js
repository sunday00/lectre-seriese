import Vue from 'vue';
window.Vue = Vue;

import axios from 'axios';
window.axios = axios;

import coupon from './components/coupon.vue';




new Vue({
    el: "#pz",
    components:{
        coupon
    },
    data(){
        return {
            coupon: 'freebie'
        }
    },
});