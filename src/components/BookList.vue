<template>
  <div class="col-8">
    <div v-for="book in getBookList" v-bind:key="book">
      <div class="card" style="width: 18rem">
        <img src="11.jpg" class="card-img-top" alt="" />
        <div class="card-body">
          <div>{{ book.title }}</div>
          <div>{{ book.isbn }}</div>
          <div>{{ book.author }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  computed: {
    getBookList: function () {
      return this.$store.state.bookList;
    },
  },
})
export default class BookList extends Vue {}
</script>
