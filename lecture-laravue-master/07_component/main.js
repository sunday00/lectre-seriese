let message = Vue.component('message', {
    props:['title', 'body'],
    template: `
<article class="message" v-show="isVisible">
    <div class="message-header">
        <p>{{ title }}</p>
        <button class="delete" aria-label="delete" @click="hideModal"></button>
    </div>
    <div class="message-body">
        {{ body }}
    </div>
</article>
    `,
    data(){
        return {
            isVisible: true,
        }
    },
    methods: {
        hideModal(){
            this.isVisible = !this.isVisible;
        }
    }
});

let app = new Vue({
    el: '#pz',
    components:{
        message
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