<template>
  <div class="col-md-8">
    <h3 class="reply">评论回复：</h3>
    <h2 style='display: none'>暂无评论，点击左侧添加评论！！！</h2>
    <ul class="list-group">
      <Item v-for="(comment,index) in comments" :key="comment.id" :comment="comment"></Item>
    </ul>
  </div>
</template>

<script>
import Item from './Item.vue'
export default {
    name: 'List',
    props:['comments'], // 声明接收属性
    components: {
        Item,
    },

    data() {
        return {}
    },

    mounted() {},

    methods: {
      
    },
}
</script>

<style scoped>
</style>