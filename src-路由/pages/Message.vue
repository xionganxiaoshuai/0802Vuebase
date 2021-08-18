<template>
  <div>
    <div role="tabpanel"
         class="tab-pane active"
         id="Message">
      <ul class="list-group">
        <li class="list-group-item">
          <router-link to="/home/message/messagedateil">message01</router-link>
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
        return {}
    },
    mounted() {},
    methods: {},
}
</script>

<style scoped>
</style>