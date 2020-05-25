Vue.component('modal', {
    template: `
<div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
        <div class="box">
            <p><slot></slot></p>
        </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
</div>
    `,
    methods:{

    }
});

let app = new Vue({
    el: '#pz',
    data(){
        return {
            isShow:false
        }
    },
    mounted(){
        
    },
    methods: {
        
    }
});