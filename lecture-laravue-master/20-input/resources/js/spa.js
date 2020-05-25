import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import router from './routes';
import Form from './utils/Form';

window.Vue = Vue;
Vue.use(VueRouter);
window.axios = axios;
window.Form = Form;

new Vue({
    el: "#pz",
    components:{
        
    },
    data(){
        return {
            
        }
    },
    router
});