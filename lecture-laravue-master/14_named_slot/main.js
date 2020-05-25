Vue.component('modal', {
    template: `<div class="modal" :class="{ 'is-active' : isActive }">
    <div class="modal-background"></div>
    <div class="modal-card">

      <header class="modal-card-head">
        <p class="modal-card-title">
            <slot name="header"></slot>
        </p>
        <button class="delete" aria-label="close" @click="isActive = false"></button>
      </header>

      <section class="modal-card-body">
        <h1> <slot>If no prop is coming into here, this text will be show.</slot> </h1>
      </section>

      <footer class="modal-card-foot">
        <button class="button is-success"><slot name="footer-btn">OK</slot></button>
        <button class="button">Cancel</button>
      </footer>

    </div>
  </div>`,
  data(){
    return {
      isActive: true
    }
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