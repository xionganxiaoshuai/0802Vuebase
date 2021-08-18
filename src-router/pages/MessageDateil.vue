<template>
  <ul class="list-group">
    <li class="list-group-item">{{$route.params.msgId}}</li>
    <li class="list-group-item">{{$route.query.content}}</li>
   
  </ul>
</template>

<script>
export default {
    name: 'MessageDateil',
    data() {
        return {}
    },
    mounted() {},
    methods: {},
}
</script>

<style scoped>
</style>