
// import  { vueGrid }  from '@liqueflies/vue-grid'
window.onload = function () {
/*var BootstrapVue = require('bootstrap-vue');
 Vue.use(BootstrapVue);*/

 //Vue.use(vueGrid.VueGrid, { /* your configuration */ })

  new Vue({
    
    el: '#ll',
    data: {
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
    },


    methods: {
      sort: function(){
if(this.met){
  this.bubbleSort1()
  this.met=!this.met;
}else{
  this.bubbleSort2()
  this.met=!this.met;
}
      },
      bubbleSort1: function(){
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
      bubbleSort2: function(){
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
      search2: function(){
        this.table2=[];
      for(i of this.table){
      if (i.name.includes(this.search1)){
      this.table2.push(i)
      console.log(this.table2)
      }
      }
     },
      insert: function () {
        ex = false
        var person = { name: this.name1, phone: this.phone1 };
        for (x of this.table) {
          if (person.name == x.name) {
            ex = true
            alert("error")
          }
        }
        if (!ex) {
          maxsize = this.table.length;
          this.table.push(person);
          console.log(maxsize);
        }
      },
      previous: function () {
        if (this.activepage > 0) {
          this.activepage--
          this.pagination()
        }
      },
      next: function () {
        if (this.activepage < this.maxpages) {
          this.activepage++;
          this.pagination();
        }
      },

      pagination: function () {
        var activepage = this.activepage
        this.table1 = []
        for (i = 0; i < 5; i++) {
          //for (i=0;i<5;i++)
          //{
          //  this.table1.push(this.table[this.activepage*5+i])
          //}
          if (this.table[this.activepage*5 + i]!=undefined){
            this.table1.push(this.table[this.activepage * 5 + i])
          }
          
        }
        console.log(this.table1);
      },
      /*,
          mounted(){
            this.pagination
          },
          pagination: function (){
            
          
          }
          */
    },
    mounted() {
      this.pagination();
      maxsize = this.table.length;
      this.maxpages = Math.floor(maxsize / 5);
      //for (i=0;i<5;i++)
      //{
      //  this.table1.push(this.table[this.activepage*5+i])
      //}

    }

  });

}