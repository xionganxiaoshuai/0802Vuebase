<template>
  <div>
    <div role="tabpanel"
         class="tab-pane"
         id="News">
      <ul class="list-group">
        <li class="list-group-item">
          news1
          <button type="button"
                  class="btn btn-primary"
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                  >点击
          </button>
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
    name: 'News',
    data() {
        return {
         
        }
    },
    mounted() {},
    methods: {
      
    },
}
</script>

<style scoped>
</style>