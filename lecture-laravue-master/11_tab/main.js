Vue.component('tabs', {
    props:[
        
    ],
    template: `<section class="section">
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{'is-active' : tab.isActive}">
                    <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>
                </li>
            </ul>
        </div>

        <div class="tabs-details">
            <slot></slot>
        </div>
    </section>`,
    mounted(){
        
    },
    created() {
        this.tabs = this.$children;
    },
    data(){
        return {
            tabs : []
        }
    },
    methods:{
        selectTab(target){
            this.tabs.forEach(tab => {
                tab.isActive = (target.name == tab.name)
            });
        }
    }
});

Vue.component('tab', {
    props: {
        name: {'required': true},
        selected: {'default': false}
    },
    template: `<div v-show="isActive">
        <slot></slot>
    </div>`,
    data(){
        return {
            isActive: false
        }
    },
    computed:{
        href(){
            return '#' + this.name.toLowerCase().replace(/\s/g, '-');
        }
    },
    mounted(){
        this.isActive = this.selected;
    }
});

let app = new Vue({
    el: '#pz',
    data(){
        return {
            
        }
    },
    mounted(){
        
    },
    methods: {
        
    }
});