<template>
  <div>
      <h2>北京我爱你</h2>
      <slot>
        
      </slot>

  </div>
</template>

<script>
  export default {
  name: 'Child',
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
 button{
   width: 800px;
   height: 600px;
   background-color: red;
   color: #fff;
   font-size: 80px;
 }
</style>