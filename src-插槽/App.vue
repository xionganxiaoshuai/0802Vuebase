<template>
  <div>
    <Child>
      <template>
        <button>哈哈</button>
      </template>
    </Child>

    
  </div>
</template>

<script>
import Child from './components/Child.vue'
export default {
    name: 'App',
    components: {
        Child
    },
    data() {
        return {}
    },
    mounted() {
      
    },
    methods: {
      
    },
}
</script>

<style scoped>

</style>