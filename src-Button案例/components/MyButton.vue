<template>
  <div>
    <h1>航科</h1>
    <button @click="count++">点我{{count}}次</button>
    <a href="javascript:;">百度</a>
  </div>
</template>

<script>
export default {
  name: 'MyButton',

  components: {  },

  directives: {  },

  data() {
    return {
      count:0
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style scoped>
 
</style>