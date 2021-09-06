<template>
    <div>
        <table>
            <tr>
                <th>Идентификатор</th>
                <th>Название</th>
                <th>Автор</th>
                <th>ISBN</th>
                <th>Кол-во</th>
            </tr>    
            <tr v-for="item in getTrashItemList" v-bind:key="item">
                <trash-item :item="item"/>
            </tr>
            <tr>
                <th>
                    Итого
                </th>
            </tr>
        </table>
        <div>
            <button>Оформить</button>        
        </div>
    </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import TrashItem from "@/components/TrashItem.vue";
@Options({
  components:{
      TrashItem
  },  
  computed: {
      getTrashItemList : function () {
          return this.$store.state.trashList;
      }
  }
})
export default class Trash extends Vue {}
</script>
