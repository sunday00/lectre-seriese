import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./components/home.vue').default
    },
    {
        path: '/about',
        component: require('./components/about.vue').default
    },
    {
        path: '/spa',
        component: require('./components/spa.vue').default
    }
];

export default new VueRouter({
    routes,
    linkActiveClass : 'is-active'
});