<template>
  <div class="container">
  <div class="row">
    <h1>Book LIST</h1>
  </div>
  <div class="row">
    CATEGORY
  </div>
  <div class="row">  
    <button v-on:click="testClick">Поприветствовать</button>
  </div>  
  </div>
</template>

<script>
    module.exports={
      methods: {
        testClick : function(){
          alert(this.$store.state.categoryList)    
        }
      }      
    }
</script>