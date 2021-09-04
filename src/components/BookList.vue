<template>
  <div class="col-8 rounded-3">
    <div class="container">
      <div class="col" v-for="book in getBookList" v-bind:key="book">
        <div class="card" style="width: 18rem">
          <center>
            <figure>
              <img v-bind:src="book.img" class="card-img-top" />
            </figure>
          </center>
          <div class="card-body">
            <div>{{ book.title }}</div>
            <div>{{ book.isbn }}</div>
            <div>{{ book.author }}</div>
            <div>
              <button v-on:click="addTrash(book)">В корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  methods: {
    addTrash: function (book: any) {
      this.$store.state.trashList.push(book);
      console.log(this.$store.state.trashList);
    },
  },
  computed: {
    getBookList: function () {
      if (this.$store.state.currentCategory == 'all') {
        return this.$store.state.bookList;
      } else {
        return this.$store.state.bookList.filter( (e:any) =>{
          return e.category == this.$store.state.currentCategory;
        });
      }
    },
  },
})
export default class BookList extends Vue {}
</script>
