<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {mapState} from 'vuex'

export default {
  // components: {HelloWorld},

  computed: {
    ...mapState(['user'])
  },
}
</script>

<template>
  <div>
    <router-view></router-view>
    <pre>{{user.data.name}}</pre>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
