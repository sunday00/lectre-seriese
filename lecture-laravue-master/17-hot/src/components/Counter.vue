<template>
  <div>
      <h2>The count: {{ count }}</h2>
      <button @click="count += 2">Indrease</button>
  </div>
</template>

<script>

let AAA = function (){
    
}
AAA.prototype.alpha = 'alphaka';
AAA.prototype.beta = function(){
    return this.alpha;
}

export default {
    data(){
        return {
            count: 0,
            aaa: new AAA()
        }
    }
}
</script>

<style>

</style>