<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addTodo="addTodo"></Header>
      <List :todos="todos"
            :updateTodo="updateTodo"
            :deleteTodo="deleteTodo"
      ></List>
      <Footer :todos="todos" :updateAll="updateAll" :deleteAll="deleteAll"></Footer>

    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import List from './components/List.vue'
import Footer from './components/Footer.vue'
export default {
    name: 'App',
    components: {
        Header,
        List,
        Footer,
    },

    data() {
        return {
            todos: [
                { id: 1, content: '抽烟', isOver: false },
                { id: 2, content: '喝酒', isOver: true },
                { id: 3, content: '烫头', isOver: false },
            ],
        }
    },

    mounted() {},

    methods: {
        // 添加信息
        addTodo(todo){
          this.todos.push(todo)
        },
        // 修改isOver
        updateTodo(index) {
            this.todos[index].isOver = !this.todos[index].isOver
        },
        // 删除逻辑
        deleteTodo(index){
          this.todos.splice(index,1)
        },

        updateAll(val){
          this.todos.forEach(item => item.isOver = val)
        },

        deleteAll(){
          this.todos = this.todos.filter(item => item.isOver === false)
        }
    },
}
</script>

<style scoped>
/*app*/
.todo-container {
    width: 600px;
    margin: 0 auto;
}
.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
</style>