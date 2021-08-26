<template>
    <div>
        <div v-for="category in getCategoryList" v-bind:key="category"></div>
    </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component';
@Options({
  computed :{
        getCategoryList: function(){
            return this.$store.state.categoryList;
        }
    }
})
export default class CategoryList extends Vue {}
</script>
