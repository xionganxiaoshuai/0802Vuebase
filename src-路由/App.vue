<template>
  <div>
    <div class="container">
      <div class="page-header">
        <h1>ROUTER-VUE</small>
        </h1>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <!-- Nav tabs -->
        <ul class="nav nav-stacked col-md-6" role="tablist">
          <li role="presentation"
              class="active">

            <router-link to="/home"
                         aria-controls="home"
                         role="tab"
                         data-toggle="tab">
                         Home
            </router-link>

            <!-- <a href="#home"
               aria-controls="home"
               role="tab"
               data-toggle="tab">
              Home
            </a> -->
          </li>
          <li role="presentation">

            <router-link to="/about"
                         aria-controls="About"
                         role="tab"
                         data-toggle="tab">
                         About
            </router-link>




            <!-- <a href="#About"
               aria-controls="About"
               role="tab"
               data-toggle="tab">About</a> -->
          </li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content col-md-6">

          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {}
    },
    mounted() {},
    methods: {},
}
</script>

<style scoped>

</style>