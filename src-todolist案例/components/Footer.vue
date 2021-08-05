<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isCheckAll"/>
      <!-- <input type="checkbox" :checked="isCheckAll" /> -->
    </label>
    <span>
      <span>已完成{{overNum}}</span> / 全部{{allNum}}
    </span>
    <button class="btn btn-danger" @click="deleteA">清除已完成任务</button>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    props:['todos','updateAll','deleteAll'],
    data() {
        return {}
    },
    computed: {
      allNum(){
        return this.todos.length
      },
      overNum(){
        // return this.todos.filter(itme => itme.isOver).length
        // reduce功能：做统计使用的 返回的是一个统计好的东西
        // reduce参数：两个参数，第一个是回调函数（参数，上一次统计的参数，itme，index，arr），第二个参数是统计时候的初始值
        // reduce返回值：返回统计好的东西
        return this.todos.reduce((prev,itme,index)=>{
          if (itme.isOver) {
            prev += 1
          }
          return prev
        },0)
      },

      isCheckAll:{
        get(){
          return this.allNum === this.overNum && this.allNum > 0
        },
        set(val){
          this.updateAll(val)
        }
      }
    },
    methods: {
      deleteA(){
        this.deleteAll()
      }
    },
}
</script>

<style scoped>

/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}

</style>