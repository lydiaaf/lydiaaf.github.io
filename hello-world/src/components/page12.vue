<template> 

<div id="ll">        
                <vue-tabs active-tab-color="#9b59b6" 
                          active-text-color="white"
                >
                   <v-tab title="First tab" icon="ti-user">
                     First tab content

                    <b-button class="button" v-on:click="insert()">insert</b-button>
                   <!--  <button class="button" v-on:click="insert()">insert</button> -->
                     <input v-model="name1" placeholder="edit me">
                     <input v-model="phone1" placeholder="edit me">
                     
                   </v-tab>
               
                   <v-tab title="Second tab" icon="ti-settings">
                     Second tab content
                     

                    <vue-table class="table-bordered" :columns="columns" :rows="rows"></vue-table>
  
                    <table align="center">
                            <tr v-for="k in table1">
                            <td>{{k.name}}</td>
                            <td>{{k.phone}}</td>
                            </tr>
                            </table>

                             <b-button class="button"v-on:click="previous">previous</b-button>
                             <b-button class="button"v-on:click="next">next</b-button>
                             <b-button class="button"v-on:click="sort">Sort</b-button>
                            <!-- <m-button type="info" round>Info</m-button>-->
                            <!--<button class="button"v-on:click="previous">previous</button> -->
                            <!--<button class="button"v-on:click="next">next</button>-->
            
                            <!--<button class="button"v-on:click="sort">Sort</button>-->
                   </v-tab>
               
                   <v-tab title="Third tab" icon="ti-check">
                     Third tab content

                     <input v-model="search1" placeholder="edit me">
                     <b-button class="button"v-on:click="search2">search</b-button>
             <!--<button class="button"v-on:click="search2">search</button> -->
             <table align="center">
                <tr v-for="i in table2">
                <td>{{i.name}}</td>
                <td>{{i.phone}}</td>
                </tr>
                </table>

                   </v-tab>
               </vue-tabs>
               </div>
</template>

<script>
export default {
    name:'page12',
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
       ,
      table: [
        { name: 'Chuck Norris', phone: 9000 },
        { name: 'Chuck Norris1', phone: 9001 },
        { name: 'Chuck Norris2', phone: 9002 },
        { name: 'Chuck Norris3', phone: 9000 },
        { name: 'Chuck Norris4', phone: 9001 },
        { name: 'Chuck Norris5', phone: 9002 }
      ],
      met:true,
      search:'',
      search1:'',
      activetab: 1 ,
      name1: '',
      phone1: '',
      table1: [],
      table2: [],
      activepage: 0,
      x: '',
      ex: false,
      maxsize: 0,
      maxpages: 0
      }
    },


    methods: {
      sort(){
if(this.met){
  this.bubbleSort1()
  this.met=!this.met;
}else{
  this.bubbleSort2()
  this.met=!this.met;
}
      },
      bubbleSort1(){
        var len = this.table.length;
        for (var i = len-1; i>=0; i--){
          for(var j = 1; j<=i; j++){
            if(this.table[j-1].name.toUpperCase()>this.table[j].name.toUpperCase()){
                var temp = this.table[j-1];
                this.table[j-1] = this.table[j];
                this.table[j] = temp;
             }
          }
        }
        console.log(this.table)
        this.activepage=0
        this.pagination()
     },
      bubbleSort2(){
        var len = this.table.length;
        for (var i = len-1; i>=0; i--){
          for(var j = 1; j<=i; j++){
            if(this.table[j-1].name.toUpperCase()<this.table[j].name.toUpperCase()){
                var temp = this.table[j-1];
                this.table[j-1] = this.table[j];
                this.table[j] = temp;
             }
          }
        }
        console.log(this.table)
        this.activepage=0
        this.pagination()
     },
      search2(){
        this.table2=[];
      for(const i of this.table){
      if (i.name.includes(this.search1)){
      this.table2.push(i)
      console.log(this.table2)
      }
      }
     },
      insert() {
         this.ex = false
        var person = { name: this.name1, phone: this.phone1 };
        for ( this.x of this.table) {
          if (person.name == this.x.name) {
            this.ex = true
            alert("error")
          }
        }
        if (!this.ex) {
          this.maxsize = this.table.length;
          this.table.push(person);
          console.log(this.maxsize);
        }
      },
      previous() {
        if (this.activepage > 0) {
          this.activepage--
          this.pagination()
        }
      },
      next() {
        if (this.activepage < this.maxpages) {
          this.activepage++;
          this.pagination();
        }
      },

      pagination() {
        var activepage = this.activepage
       // this.table1 = []
       this.rows=[]
        for (let i = 0; i < 5; i++) {
          
          if (this.table[this.activepage*5 + i]!=undefined){
            this.rows.push(this.table[this.activepage * 5 + i])
          }
          
        }
        console.log(this.rows);
      },
      
    },
   
    mounted() {
      this.pagination();
       this.maxsize = this.table.length;
      this.maxpages = Math.floor(this.maxsize / 5);
      

    }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
