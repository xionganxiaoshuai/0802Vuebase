<template>
  <div>
    <h2 v-if="isFirst">请输入关键字进行搜索</h2>
    <h2 v-else-if="isLoading">正在搜索中，请稍后...</h2>
    <h2 v-else-if="errMsg">请求失败--{{errMsg}}</h2>
    <div class="row"
         v-else>
      <div class="card" v-for="(user,index) in users" :key="user.username">
        <a :href="user.userUrL"
           target="_blank">
          <img :src="user.userImg"
               style='width: 100px' />
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Main',
    data() {
        return {
            isFirst: true,
            isLoading: false,
            users: [],
            errMsg:'',
        }
    },
    mounted() {
        this.$bus.$on('searchAjax', this.searchAjax)
    },
    methods: {
        searchAjax(keyword) {
            this.isFirst = false, 
            this.isLoading = true

            // 发请求
            axios({
                url: 'https://api.github.com/search/users',
                method: 'get',
                params: {
                    q: keyword,
                },
            })
                .then(response => {
                    // avatar_url: "https://avatars.githubusercontent.com/u/28438?v=4"
                    // login: "aa"
                    // url: "https://api.github.com/users/aa"

                    this.isLoading = false
                    this.errMsg = ''
                    let users = response.data.items.map(item => ({
                        username: item.login,
                        userImg: item.avatar_url,
                        userUrL: item.url,
                    }))

                    this.users = users

                    console.log(response.data)
                })
                .catch(error => {
                    this.isLoading = false
                    this.users = []
                    this.errMsg = error.message
                    console.log(error.message)
                })
        },
    },
}
</script>

<style scoped>
.card {
    float: left;
    width: 33.333%;
    padding: 0.75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
}

.card > img {
    margin-bottom: 0.75rem;
    border-radius: 100px;
}

.card-text {
    font-size: 85%;
}
</style>