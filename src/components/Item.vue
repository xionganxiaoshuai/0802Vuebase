<template>
  <li @mouseenter="isShow = true" @mouseleave="isShow = false" :class="{myClass:isShow}">
    <label>
      <input type="checkbox"
             :checked="todo.isOver"
             @click="updateT"
              />
      <span>{{todo.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteT">删除</button>
  </li>
</template>

<script>
export default {
    name: 'Item',
    props: ['todo','index','updateTodo','deleteTodo'],
    data() {
        return {
          isShow:false
        }
    },
    mounted() {},
    methods: {
       // 修改isOver
      updateT(){
        this.updateTodo(this.index)
      },
      // 删除逻辑
      deleteT(){
        this.deleteTodo(this.index)
      }
    },
}
</script>

<style scoped>

.myClass{
  background-color: seagreen;
}


/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    /* display: none; */
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}
</style>