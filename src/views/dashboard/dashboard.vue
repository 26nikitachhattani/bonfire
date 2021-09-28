<template>
<div>
    <Home />
<v-container>
    <v-row no-gutters>
        <v-col cols="1">
          
        </v-col>
        <v-col cols="10">
            <h6>booming hearts</h6>
            <div class="d-flex justify-end mb-6">
                <v-card width="300px" height="150px " >
                    <v-card-title sty>Dream catcher Annoument</v-card-title>
                    <v-card-subtitle>company wide annoucenment every one needs to know</v-card-subtitle>

                    
                </v-card>
            </div>
             <v-card
    class="mx-0"
    width="100%"
    outlined
    flat
  >
  <v-card-title class="justify-center">booming Headquaters</v-card-title>
  <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
        class="px-10"
      >
        <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark>SN</v-avatar>
        <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark>SN</v-avatar>
        <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark>SN</v-avatar>
        <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark>SN</v-avatar>
        <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark>SN</v-avatar>
        <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark>SN</v-avatar>
        <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark>SN</v-avatar>
        <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark>SN</v-avatar>
        <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark>SN</v-avatar>
        <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark>SN</v-avatar>
        <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark>SN</v-avatar>
        <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark>SN</v-avatar>
        <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark>SN</v-avatar>
        <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark>SN</v-avatar>
        <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark>SN</v-avatar>
        <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark>SN</v-avatar>
        <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark>SN</v-avatar>
        <v-chip class="mt-2"  outlined> + Add/Remove people</v-chip>

        

  

     
      </v-chip-group>
  <v-divider></v-divider>
  
    <v-row no-gutters>
        <v-col cols="4">
          <v-card
    class="mx-4 mt-4 mb-4"
    max-width="400"
  >
  
   <v-card-title class="justify-center">Campfire</v-card-title>
   <v-divider></v-divider>
   <h1>Heading</h1>
   <!---<h1>This is a longer heading</h1>-->


    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
    
    </v-card-actions>
  </v-card>
        </v-col>
        <v-col cols="4">

        </v-col>
        <v-col cols="4">

        </v-col>
    </v-row>
  </v-card>
        </v-col>
    </v-row>
</v-container>
</div>
    
</template>
<script>
import Home from '../Home.vue'

export default {
  name:'base',
  components:{
      Home
  }
   
}
</script>
<style>
h6 {
  overflow: hidden;
  text-align: center;
}

h6:before,
h6:after {
  background-color: #000;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}

h6:before {
  right: 0.5em;
  margin-left: -50%;
}

h6:after {
  left: 0.5em;
  margin-right: -50%;
}
</style>