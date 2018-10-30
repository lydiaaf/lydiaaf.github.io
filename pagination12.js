window.onload = function () {

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
      search2: function(){
      for(i of this.table){
      if (i.name.include(this.search1)){
      this.table2.push(i)
      console.log(table2)
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