<template>
  <div class="col-8 rounded-3">
    <div class="container">
      <div class="col" v-for="book in getBookList" v-bind:key="book">
        <book-item :item="book"/>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import { Options, Vue } from "vue-class-component";
import BookItem from "@/components/BookItem.vue";
@Options({
  components: {
    BookItem
  },
  /*methods: {
    addTrash: function (book: any) {
      this.$store.state.trashList.push(book);
      console.log(this.$store.state.trashList);
    },
  },*/
  computed: {
    getBookList: function () {
      if (this.$store.state.currentCategory == "all") {
        return this.$store.state.bookList;
      } else {
        return this.$store.state.bookList.filter((e: any) => {
          return e.category == this.$store.state.currentCategory;
        });
      }
    },
  },
})
export default class BookList extends Vue {}
</script>
