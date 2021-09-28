<template>
        <div>
           <v-responsive v-if="activeChat" class="overflow-y-hidden fill-height" height="500"> 
                <v-card
                  flat
                  class="d-flex flex-column fill-height rounded-0" elevation="0px" height="457px">
                  <v-card-text class="flex-grow-1 overflow-y-auto">
                    <template v-for="(msg) in messages" >
                      <div
                      :key="msg.me"
                        :class="{ 'd-flex flex-row-reverse'  :msg.me  } "
                      >
                        <v-menu offset-y pt-10>
                          <template v-slot:activator="{ on }">
                            <!-- <v-hover
                              v-slot:default="{ hover }"
                            > -->
                              <v-chip
                                :color="msg.me ? '#ECFBE8' : '#EFF6FF'"
                                style="height:auto;  white-space: normal; min-height:80px; max-height:100px; width:200px;"
                                class="pa-4 mb-2   rounded"
                                v-on="on"
                              >
                              
                                {{ msg.content }}
                                <br>
                                <sub
                                  class="ml-2 mb-0 mr-0"
                                  style="font-size: 0.5rem; align:bottom; margin-bottom:0px !important;"
                                  
                                >{{ msg.created_at }}</sub>
                                <!-- <v-icon
                                  v-if="hover"
                                  small
                                >
                                  mdi-more
                                </v-icon> -->
                              </v-chip>
                            <!-- </v-hover> -->
                          </template>
                          <v-list>
                            <v-list-item>
                              <v-list-item-title>delete</v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </div>
                    </template>
                    
                  </v-card-text>

                  <v-card-text class=" grey lighten-3">
                      <v-text-field
                      v-model="messageForm.content"
                      class="rounded-pill small"
                      label="type_a_message"
                      solo
                      small
                      type="text"
                      no-details
                      outlined
                      append-outer-icon="mdi-send blue white--text rounded-circle ml- mt-4 px-2 pt-2 pb-2"
                      @keyup.enter="messages.push(messageForm)"
                      @click:append-outer="messages.push(messageForm)"
                      hide-details
                    />
                  </v-card-text>
                </v-card>
            
           </v-responsive>
        </div>
</template>
<script>


export default{
    name:'comments',
    data: () => ({
    activeChat: 1,
    parents: [
      {
        id: 1,
        title: "john doe",
        active: true
      },
      {
        id: 3,
        title: "scarlett",
        active: false
      },
      {
        id: 4,
        title: "scarlett",
        active: false
      },
      {
        id: 5,
        title: "scarlett",
        active: false
      },
      {
        id: 6,
        title: "scarlett",
        active: false
      },
      {
        id: 7,
        title: "scarlett",
        active: false
      },
      {
        id: 8,
        title: "scarlett",
        active: false
      },
      {
        id: 9,
        title: "scarlett",
        active: false
      },
      {
        id: 10,
        title: "scarlett",
        active: false
      },
      {
        id: 11,
        title: "scarlett",
        active: false
      },
      {
        id: 12,
        title: "scarlett",
        active: false
      },
      {
        id: 13,
        title: "scarlett",
        active: false
      },
      {
        id: 14,
        title: "scarlett",
        active: false
      }
    ],
    messages: [
      {
        content: "When you are avaialble for a site visit",
        me: false,
        created_at: "11:11am",
        sender: "Krishna Reddy"
      },
      {
        content: "Today ??",
        me: false,
        created_at: "11:11am",
        sender: "Krishna Reddy"
      },
      {
        content: "Sure",
        me: true,
        created_at: "11:11am",
        sender: "Abhishek"
      },
      
      
    ],
    messageForm: {
      content: "",
      me: true,
      created_at: "11:11am"
    }
  })
    
}
</script>
