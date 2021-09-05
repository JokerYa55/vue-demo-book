<template>
  <div class="card" style="width: 18rem">
    <center>
      <figure>
        <img v-bind:src="item.img" class="card-img-top" />
      </figure>
    </center>
    <div class="card-body">
      <div>{{ item.title }}</div>
      <div>{{ item.isbn }}</div>
      <div>{{ item.author }}</div>

      <div>
        <button v-on:click="addTrash(item)">В корзину</button>
      </div>
    </div>
  </div>
</template>

<script  lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: ["item"],
  methods: {
    addTrash: function (book: any) {
      this.$store.state.trashList.push(book);
      console.log(this.$store.state.trashList);
    },
  }
})
export default class BookItem extends Vue {}
</script>

<style>
</style>
