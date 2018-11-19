
<template>
<div>
<vue-table class="table-bordered" :columns="columns" :rows="rows"></vue-table>
  
                    <table align="center">
                            <tr v-for="k in table1">
                            <td>{{k.name}}</td>
                            <td>{{k.phone}}</td>
                            </tr>
                            </table>

                             <b-button class="button" v-on:click="previous">previous</b-button>
                             <b-button class="button" v-on:click="next">next</b-button>
                             <b-button class="button" v-on:click="sort">Sort</b-button>
                             <router-view></router-view>
</div>
                             </template>
                             <script>
                            export default {
                              name:'page2',
                             data () {
                               return{
                                columns: [
          {
            name: "name"
          },{
            name: "phone"
          }
        ],
       /* rows: [
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
        ]*/
       
                               table: [
        { name: 'Chuck Norris', phone: 9000 },
        { name: 'Chuck Norris1', phone: 9001 },
        { name: 'Chuck Norris2', phone: 9002 },
        { name: 'Chuck Norris3', phone: 9000 },
        { name: 'Chuck Norris4', phone: 9001 },
        { name: 'Chuck Norris5', phone: 9002 }
      ],
                               table1 : [],
                               activepage: 0,
                               maxpages: ''
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
        var len = this.rows.length;
        for (var i = len-1; i>=0; i--){
          for(var j = 1; j<=i; j++){
            if(this.rows[j-1].name.toUpperCase()>this.rows[j].name.toUpperCase()){
                var temp = this.rows[j-1];
                this.rows[j-1] = this.rows[j];
                this.rows[j] = temp;
             }
          }
        }
        console.log(this.rows)
        this.activepage=0
        this.pagination()
     },
      bubbleSort2(){
        var len = this.rows.length;
        for (var i = len-1; i>=0; i--){
          for(var j = 1; j<=i; j++){
            if(this.rows[j-1].name.toUpperCase()<this.rows[j].name.toUpperCase()){
                var temp = this.rows[j-1];
                this.rows[j-1] = this.rows[j];
                this.rows[j] = temp;
             }
          }
        }
        console.log(this.rows)
        this.activepage=0
        this.pagination()
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
       
       this.rows=[]
        for (let i = 0; i < 5; i++) {
          
          if (this.table[this.activepage*5 + i]!=undefined){
            this.rows.push(this.table[this.activepage * 5 + i])
          }
          
        }
        console.log(this.rows);
      }
                            }
}
                             </script>