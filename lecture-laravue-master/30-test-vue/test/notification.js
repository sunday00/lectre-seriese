let colors = require('colors');
import Vue from 'vue/dist/vue';
import test from 'ava';
import Notification from '../src/Notification';

test('that it renders a notification', t => {
    let n = new Vue(Notification).$mount();
    console.log("================".cyan);
    t.is(Notification.data().message, 'hello world');
    console.log(n.$el.textContent);

    console.log("================".green);

    let N = Vue.extend(Notification);
    let vm = new N({propsData: {titleProp: 'Foobar'}}).$mount();
    t.regex(vm.$el.textContent, /Foobarrr/);

    console.log("================".cyan);
});