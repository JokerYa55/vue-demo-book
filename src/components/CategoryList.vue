<template>
  <div class="col  border rounded-3 category-list">
    <div v-for="category in getCategoryList" v-bind:key="category">
      <div class="category-item" v-on:click.stop="setCurrentCategory(category)">{{category}}</div>  
    </div>
  </div>
</template>

<script  lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  computed: {
    getCategoryList: function () {
      return this.$store.state.categoryList;
    },
  },
  methods: {
    setCurrentCategory : function(category: any){
      this.$store.state.currentCategory = category;
    }
  }
})
export default class CategoryList extends Vue {}
</script>

<style>
  .category-list {
    margin-right: 10px;
    margin-left: 10px;
  }
</style>