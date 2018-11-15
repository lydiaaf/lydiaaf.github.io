

<template>
                        <b-button class="button" v-on:click="insert()">insert</b-button>
                         <input v-model="name1" placeholder="edit me">
                     <input v-model="phone1" placeholder="edit me">
                     

    </template>       

    <script>
export default {
  name:'page1',
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
      ex: false,
      maxsize: 0,
      name1: '',
      phone1: '',
      x: '',
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
      }
}
    </script>          