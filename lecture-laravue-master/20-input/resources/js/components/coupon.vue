<template>
  <input type="text"
   :value="code"
   @input="updateCode($event.target.value)"
   ref="input">
</template>

<script>
export default {
    props:['code'],
    data(){
        return {
            
        }
    },
    methods:{
        updateCode(code){

            if(code === 'ALLFREE'){
                alert('Sorry');
                this.$refs.input.value = code = '';
            }

            this.$emit('input', code);
        }
    }
}
</script>

<style>

</style>