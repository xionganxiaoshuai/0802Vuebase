<template>
  <div>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text"
               placeholder="enter the name you search" 
               v-model="keyword"
      />
        <button @click="search">Search</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
          keyword:''
        }
    },
    mounted() {},
    methods: {
      search(){
        console.log(11111);
        let {keyword} = this
        this.$bus.$emit('searchAjax',keyword)
        this.keyword = ''
      }
    },
}
</script>

<style scoped>
</style>