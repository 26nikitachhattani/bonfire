<template>
    <div>
     <h1>Employee List</h1>
     <div>
         <table border="1px">
             <tr>
                 <th>id</th>
                 <th>age</th>
                 <th>name</th>
                 <th>salary</th>
             </tr>
             <tr v-for="item in list" v-bind:key="item.id">
                 <td>{{item.id}}</td>
                 <td>{{item.name}}</td>
                 <td>{{item.image}}</td>
                 <td>iii</td>
             </tr>
         </table> 
         {{list}}

    </div>
    </div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios)
export default{

    name: "employeelist",
    data(){
        return{
            list:null
        }
    },
    mounted(){
        // Vue.axios.get('http://jsonplaceholder.typicode.com/posts')

        
        // .then(resp=>{
        //      this.list=resp.data.data
        //      console.warn(resp.data.data)
        // })
        // .then(response => (this.list = response))
        // .catch(err=>{
        //      console.warn(err)

        //  })
         Vue.axios.get('http://localhost:8080/#/demo/vue/switchable-grid/api/products.json',{
   headers: {

        }
      }).then(res => {
        this.list = res.data
        console.log(res);
         console.log(this.list);
        console.log("success");
      }).catch(err => {
        console.log(err.response);
      });
    }
    
}
</script>