<template>
  <div>
    <Item
      v-for="item in renderList"
      :id="item.id"
      :key="item.id"
      :title="item.title"
      :status="item.status"
    ></Item>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import Item from '@todo/components/Item.vue'
import { mapGetters } from 'vuex'

@Component({
  components: {
    Item,
  },
  computed: {
    ...mapGetters(['allTodo', 'activeTodo', 'clearTodo']),
  }
})
export default class ItemList extends Vue {
  // renderList: any[] = this.$store.getters.allTodo
  public renderList: Item[] = []
  private allTodo!: Item[] | []
  private activeTodo!: Item[] | []
  private clearTodo!: Item[] | []

  created() {
    this.$store.dispatch('initData')
  }

  initRenderList(status: string) {
    if (!status || status == 'all') {
      this.renderList = this.allTodo
    } else if (status === 'active') {
      this.renderList = this.activeTodo
    } else if (status === 'clear') {
      this.renderList = this.clearTodo
    }
  }

  @Watch('$route.params.status')
  routeUpdate(newValue: 'all' | 'active' | 'clear') {
    this.initRenderList(newValue)
  }

  @Watch('$store.state.todoList', { deep: true })
  listUpdate() {
    this.initRenderList(this.$route.params.status)
  }
}
</script>
