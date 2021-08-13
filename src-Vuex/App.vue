<template>
  <div>
    <button @click="increment">+你好{{$store.state.count}}</button><br>
    <button @click="decrement">-</button><br>
    <button @click="incrementIfOdd">奇数再+{{$store.state.count}}</button><br>
    <button @click="incrementAsync">异步去+{{$store.state.count}}</button>
  </div>
</template>

<script>
export default {
    name: 'App',
    // data() {
    //     return {
    //         count: 0,
    //     }
    // },
    methods: {
        increment() {
           this.$store.dispatch('increment')
        },
        decrement() {
            // this.count--
           this.$store.dispatch('decrement')
        },
        incrementIfOdd() {
            // if (this.count % 2 === 1) {
            //     this.count++
            // }
            this.$store.dispatch('incrementIfOdd')
        },
        incrementAsync() {
            // let that = this

            // // console.log(this, '---------this------')
            // setTimeout(function() {
            //     // console.log(that, '---------that------')
            //     that.count++
            // }, 2000)

            // setTimeout(() => {
            //   this.count++
            // }, 2000);
            this.$store.dispatch('incrementAsync')
        },
    },
}
</script>

<style scoped>
button {
    width: 200px;
    height: 200px;
    margin-top: 10px;
    font-size: 20px;
    color: seagreen;
    font-weight: bold;
}
</style>