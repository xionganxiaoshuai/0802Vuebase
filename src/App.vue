<template>
  <div id="app">
  <div class="container">
    <Header></Header>
    <Main></Main>
    
  </div>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
  export default {
  name: 'App',
  components:{
    Header,
    Main
  },

  data() {
    return {
            
    };
  },
  mounted() {

  },
  methods: {

  },
}
</script>

<style scoped>

</style>