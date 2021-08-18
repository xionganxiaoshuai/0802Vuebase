<template>
  <div>
    <div role="tabpanel"
         class="tab-pane active"
         id="Message">
      <ul class="list-group">
        <li class="list-group-item" v-for="(msg,index) in messages" key="msg.id">
          <router-link :to="'/home/message/messagedateil/' + msg.id + '?content=' + msg.content ">{{msg.content}}</router-link>
          <!-- <a href="##">message01</a> -->
        </li>
        
      </ul>
      <div class="alert alert-success"
           role="alert">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Message',
    data() {
        return {
          messages:[
            {id:1,content:'msgN'},
            {id:2,content:'msgW'},
            {id:3,content:'msgU'}
          ]
        }
    },
    mounted() {},
    methods: {},
}
</script>

<style scoped>
</style>