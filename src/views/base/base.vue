<template>
  <div>
    <Home />
    <v-container>
      <v-row no-gutters>
        <v-col cols="1"> </v-col>
        <v-col cols="10">
          <v-card class="mx-0" width="100%" outlined flat>
            <v-card-title class="justify-center"
              >booming Headquaters</v-card-title
            >
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
              class="px-10"
            >
              <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark
                >SN</v-avatar
              >
              <v-avatar size="35" color="green darken-4 white--text  ma-1 ml-0" dark
                >SN</v-avatar
              >
              <v-avatar size="35" color="indigo  white--text  ma-1 ml-0" dark
                >SN</v-avatar
              >
              <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark
                >SN</v-avatar
              >
              <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark
                >SN</v-avatar
              >
              <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark
                >SN</v-avatar
              >
              <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark
                >SN</v-avatar
              >
              <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark
                >SN</v-avatar
              >
              <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark
                >SN</v-avatar
              >
              <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark
                >SN</v-avatar
              >
              <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark
                >SN</v-avatar
              >
              <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark
                >SN</v-avatar
              >
              <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark
                >SN</v-avatar
              >
              <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark
                >SN</v-avatar
              >
              <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark
                >SN</v-avatar
              >
              <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark
                >SN</v-avatar
              >
              <v-avatar size="35" color="indigo white--text  ma-1 ml-0" dark
                >SN</v-avatar
              >
              <v-chip class="mt-2" outlined> + Add/Remove people</v-chip>
            </v-chip-group>
            <v-divider></v-divider>

            <v-row no-gutters>
              <v-col cols="4">
                <v-card class="mx-4 mt-4 mb-4" max-width="400">
                  <v-card-title class="justify-center">Campfire</v-card-title>
                  <v-divider></v-divider>
                  <h1>Heading</h1>
                  <!---<h1>This is a longer heading</h1>-->

                  <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Whitehaven Beach</div>

                    <div>Whitsunday Island, Whitsunday Islands</div>
                  </v-card-text>

                  <v-card-actions> </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card class="mx-4 mt-4 mb-4" max-width="400" height="300">
                  <v-card-title class="justify-center">Campfire</v-card-title>
                  <v-divider></v-divider>
                  <h1>Heading</h1>
                  <!---<h1>This is a longer heading</h1>-->

                  <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

                  <v-card-text class="text--primary">
                    <div>Whitehaven Beach</div>

                    <div>Whitsunday Island, Whitsunday Islands</div>
                  </v-card-text>

                  <v-card-actions> </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card class="mx-4 mt-4 mb-4" max-width="400">
                  <v-card-title class="justify-center">Campfire</v-card-title>
                  <v-divider></v-divider>
                  <v-card-actions
                    align="center"
                    class="justify-center"
                    style="padding:35%;"
                  >
                    <v-icon
                      align="center"
                      class="justify-center x-large "
                      x-large
                      color="green"
                      justify="center"
                      >mdi-gift-outline</v-icon
                    >
                  </v-card-actions>
                </v-card>
              </v-col>
              <v-col cols="4">
                <v-card class="mx-4 mt-4 mb-4" max-width="400">
                  <v-card-title class="justify-center">Add Todos</v-card-title>
                  <v-divider></v-divider>
                  <v-card-actions
                    align="center"
                    class="justify-center"
                    style="padding:35%;"
                  >
                    <v-icon
                      align="center"
                      class="justify-center large "
                      x-large
                      color="indigo darken-3"
                      justify="center"
                      >mdi-panda</v-icon
                    >
                  </v-card-actions>
                </v-card>
              </v-col>
                            <v-col cols="4">
                <v-card class="mx-4 mt-4 mb-4" max-width="400" >
                  <v-card-title class="justify-center">Add Todos</v-card-title>
                  <v-divider></v-divider>
                  <v-card-actions
                    align="center"
                    class="justify-center"
                    style="padding:35%;"
                  >
                    <v-icon
                      align="center"
                      class="justify-center large "
                      x-large
                      color="indigo darken-3"
                      justify="center"
                      @click="dialog=true"
                      >mdi-pen</v-icon
                    >
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import Home from "../Home.vue";

export default {
  name: "base",
  components: {
    Home,
  },
};
</script>
<style>
h1 {
  overflow: hidden;
  text-align: center;
}

h1:before,
h1:after {
  background-color: #000;
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 50%;
}

h1:before {
  right: 0.5em;
  margin-left: -50%;
}

h1:after {
  left: 0.5em;
  margin-right: -50%;
}
</style>
