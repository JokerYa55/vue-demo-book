<template>
  <div class="container">
    <div class="row">
      <h1>Book LIST</h1>
    </div>
    <div class="row">
      <category-list/>
    </div>
    <div class="row">
      <button v-on:click="testClick">Поприветствовать</button>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import CategoryList from '@/components/CategoryList.vue'
@Options({
  components: {
    CategoryList,
  },
})

export default class Main extends Vue {}
</script>