window.onload = function() {

new Vue({
    el: '#ll',
    data: {
        table:[
            {name:'Chuck Norris',phone:9000},
            {name:'Chuck Norris1',phone:9001},
            {name:'Chuck Norris2',phone:9002}

        ],
        name1:'',
        phone1:'',
        table1:[],
        activepage:1,
        x:'',
        ex: false
    },
    methods: { 
           
        insert: function () { 
          ex= false
        var person = {name:this.name1 , phone:this.phone1};
        
        for (x of this.table) {

        if (person.name == x.name){
          ex=true
          alert("error")

        } 
        }
        if(!ex){
        this.table.push(person);
      }
      },
     /* previous: function (){
                this.activepage--
      },
      next: function (){

                this.activepage++
      },

      mounted(){

        this.pagination
      },
      pagination: function (){
        do {
      this.table1[i]=this.table[this.activepage*5+i]
            i++
      } while (i < 5);
      
      }
      */  
       }

});

}