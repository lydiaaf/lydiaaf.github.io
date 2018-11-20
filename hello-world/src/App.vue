<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png"> -->
    <!--<page1 msg="Welcome to Your Vue.js App"/> -->
    

    <router-link to="/page1">tab 1</router-link>
    
    <router-link to="/page2">tab 2</router-link>
    
    <router-link to="/page3">tab 3</router-link>
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
    page3},
    data () {
                               return{
columns: [
          {
            name: "name"
          },{
            name: "phone"
          }
        ],
        rows: [
          {
            name: "Robert Duvak",
            phone: "jose26"
          },{
            name: "Isabelle Champion",
            phone: "isa"
          },{
            name: "Alberto Tulador",
            phone: "beber"
          }
        ]
                               }
  },
methods: {

check1(){



}


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
