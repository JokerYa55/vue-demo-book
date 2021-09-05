<template>
    <div>
        <div v-for="item in getTrashItemList" v-bind:key="item">
            {{item}}
        </div>
    </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
@Options({
  computed: {
      getTrashItemList : function () {
          return this.$store.state.trashList;
      }
  }
})
export default class Trash extends Vue {}
</script>
