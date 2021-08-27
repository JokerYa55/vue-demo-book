<template>
  <div class="col-8">
    <div class="col" v-for="book in getBookList" v-bind:key="book">
      <div class="card" style="width: 18rem">
        <img v-bind:src="book.img" class="card-img-top" />
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
