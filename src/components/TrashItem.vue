<template>
  <td>{{ item.id }}</td>
  <td>{{ item.title }}</td>
  <td>{{ item.author }}</td>
  <td>{{ item.isbn }}</td>
  <td>{{ item.count }}</td>
  <td><button @click="delItem(item)">Удалить</button></td>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  props: ["item"],
  methods: {
    delItem: function (item: any) {
      console.log(this.$store.state.trashList[0]);
      delete this.$store.state.trashList[0];
    },
  },
})
export default class TrashItem extends Vue {}
</script>