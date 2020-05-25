// window.Event = new Vue();

window.Event = new class {
    constructor(){
        this.vue = new Vue();
    }

    fire(e, data = null){
        this.vue.$emit(e, data);
    }

    listen(e, callback){
        this.vue.$on(e, callback);
    }
}

Vue.component('coupon', {
    template: `
    <input type="text" class="input" @blur="onCouponApplied" placeholder="Enter Your Coupon code" />
    `,
    methods:{
        onCouponApplied(e){
            // this.$emit('applied', e.target.value);
            // Event.$emit('applied', e.target.value);
            Event.fire('applied', e.target.value);
        }
    }
});

let app = new Vue({
    el: '#pz',
    data(){
        return {
            couponApplied: false,
            couponNo : ''
        }
    },
    mounted(){
        
    },
    methods: {
        // onCouponApplied(msg){
        //     this.couponNo = msg;
        //     this.couponApplied = true;
        // }
    },
    created(){
        // Event.$on('applied', (msg)=>{
        Event.listen('applied', (msg)=>{
            this.couponNo = msg;
            this.couponApplied = true;
        });
    }
});