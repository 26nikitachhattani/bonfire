<template>
  
    <v-toolbar
    class="text-black "
      color="" flat background-color="transperent"  >
      <template>
        
        <v-img
      src="@/assets/level.png"
      lazy-src="@/assets/note.png"
      width="45px"
       height="40px"
      class=" mb-0 ml-5 "
    >
      <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
    </v-img>
     <v-spacer></v-spacer>
    <v-spacer></v-spacer>
        <v-tabs 
          style="margin-left:300px !important; margin-right:200px !important; border-bottom:1px solid black"
          v-model="tab"
           align="center"
          class=" justify-center"
          justify="center"   slider-size="0" >
          <v-tabs-slider  class="rounded-t-xl" color=""></v-tabs-slider>


          <v-tab
            v-for="item in items"
            :key="item"
            :to="item.route"
            text-black>
            {{ item.name }}<v-icon>{{ item.icon }}</v-icon>

          </v-tab>
          </v-tabs>
          
       
           <v-btn icon justify-end class=" mx-2 pa-0  rounded-circle grey darken-3 " style="height:40px; width:40px;" color="primary">
          <v-icon justify-center color="#828282" justify="center" style="height:24px;  width:24px;" class="rounded-circle white"  >mdi-account</v-icon></v-btn>
      
         
       
      </template>
    </v-toolbar>  
   
</template>
<script>
  export default {
    name:'home',
    components:{
      
          },
    data () {
      return {
        tab: null,
        activeTab: `/users`,
        items: [
       {name:'home',icon:'mdi-home-outline' ,route:'/users'}, 
          {name:'Enquiry', icon:'mdi-comment-outline' ,route:'/enquiry'}, 
          {name:'Subscription Plan', icon:'mdi-book-outline',route:'/Plans'}, 
          {name:'User Subscription', icon:'mdi-comment-outline',route:'/subscribers'},
          {name:'Team ', icon:'mdi-comment',route:'/team'},
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>
<style scoped>

.v-application--wrap {
  background-color: #DAA06D !important;

}
</style>
<style>
.v-application--wrap {
  background: #cdc9c9 !important;

}
.theme--light.v-toolbar.v-sheet {
    background: transparent !important;
}

.theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-icon, .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn, .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
     color: #000 !important;
     text-transform: capitalize !important;
     background: transparent;
} 
.theme--light.v-tabs > .v-tabs-bar .v-tab--active, .theme--light.v-tabs > .v-tabs-bar .v-tab--active > .v-icon, .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) > .v-btn, .theme--light.v-tabs > .v-tabs-bar .v-tab--disabled {
     color: #4d4498 !important;
     text-transform: capitalize !important;
     background: transparent;
}
.v-tabs-bar{
 margin-right:50px
}
.v-tab {
    background: transparent;
    cursor: pointer;
    display: flex;
    flex: 0 1 auto;
    font-size: 10px !important;
    font-weight: 400;
    justify-content: center;
    letter-spacing: 0.02857143em !important;
    line-height: normal;
    min-width: 90px;
    max-width: 360px;
    outline: none;
    padding: 10px 16px;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-transform: capitalize;
    transition: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
   
}
</style>
