<template>
  <div>
    <div class="col-md-4">
      <form class="form-horizontal">
        <div class="form-group">
          <label>用户名</label>
          <input type="text"
                 class="form-control"
                 placeholder="用户名"
                 v-model="username"
                 >
        </div>
        <div class="form-group">
          <label>评论内容</label>
          <textarea class="form-control"
                    rows="6"
                    placeholder="评论内容"
                    v-model="content"
                    ></textarea>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="button"
                    class="btn btn-default pull-right"
                    @click="addC"
                    >提交</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Add',
    props:['addComment'],
    components: {},

    data() {
        return {
          username:'',
          content:''
          
        }
    },

    methods: {
      addC(){
        let {username,content} = this
        if (username.trim() && content.trim()) {
          let id = Date.now()
          let obj = {
            username,
            content,
            id
          }
          this.addComment(obj)
          this.username = ''
          this.content = ''
        }else{
          alert('输入完整提交信息')
        }

      }
      
    },
}
</script>

<style scoped>


</style>