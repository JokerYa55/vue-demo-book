<template>
  <div class="container">
    <div class="row">
      <h1>Книжный магазин</h1>
    </div>
    <div class="row">
      <category-list/>
      <book-list/>
    </div>
    <div class="row">
      <button v-on:click="testClick">Поприветствовать</button>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
import CategoryList from '@/components/CategoryList.vue'
import BookList from '@/components/BookList.vue'
@Options({
  components: {
    CategoryList,
    BookList
  },
})

export default class Main extends Vue {}
</script>