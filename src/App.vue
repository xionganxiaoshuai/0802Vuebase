<template>
  <div id="app">
    <div>
      <Header></Header>
      <div class="container">
        <Add :addComment="addComment"></Add>
        <List :comments="comments" :deleteComment="deleteComment"></List>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Add from './components/Add.vue'
import List from './components/List.vue'
export default {
    name: 'App',

    components: {
        Header,
        Add,
        List,
    },

    data() {
        return {
            comments: [
              { id: 1, username: 'aaa', content: 'vue不错哦' },
              { id: 2, username: 'bbb', content: '两天学会' },
              { id: 3, username: 'ccc', content: 'webpack' },
              ],
        }
    },

    methods: {
      // 添加的方法
      addComment(contend){
        this.comments.push(contend)
      },
      // 删除的方法
      deleteComment(index){
        this.comments.splice(index,1)
      }

    },
}
</script>

<style scoped>
</style>