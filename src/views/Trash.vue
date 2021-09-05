<template>
  <div>
    <trash-list/>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import TrashList from "@/components/TrashList.vue";
@Options({
  components: {
    TrashList
  },
})
export default class Trash extends Vue {}
</script>
