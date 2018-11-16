<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png"> -->
    <page12 msg="Welcome to Your Vue.js App"/>
    <button v-on:click="C:\Users\LYDIA\Documents\hello-world\src\components\page1.vue">tab 1</button>
    <button v-on:click="C:\Users\LYDIA\Documents\hello-world\src\components\page2.vue">tab 2</button>
    <button v-on:click="C:\Users\LYDIA\Documents\hello-world\src\components\page3.vue">tab 3</button>

    <router-link to="/page1">Go to Foo</router-link>
    <router-link to="/page2">Go to Bar</router-link>
    <router-link to="/page3">Go to Bar</router-link>
    <router-view></router-view>

  </div>
</template>

<script>
//import page12 from './components/page12.vue'
import page1 from './components/page1.vue'
import page2 from './components/page2.vue'
import page3 from './components/page3.vue'

export default {
  name: 'app',
  components: {
   
    page1,
    page2,
    page3
    

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
