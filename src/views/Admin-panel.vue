<template>
  <div class="back rtl ma-0 pa-0 h100 w100">

  <!-- Content -->




  <!-- News -->

  <div v-show="news" class="back ma-0 pa-0 h100 w100">


              <!-- create a new post -->

              <!-- title -->
              <div
              class="display-1 text-center py-5">
              <span class="display-1 indigo--text">+</span> Create a New Post <span class="display-1 indigo--text">+</span>
              </div>

              <!-- posts -->
              <div class=" w100 d-flex justify-center">
                <v-card
                max-width="800"
                class="h100 w90 elevation-16 ma-2"
                
                >
                <v-list-item>
                <v-avatar class="ml-3">
                <v-img src="../assets/noor-logo-layer.png"></v-img>
                </v-avatar>
                <v-list-item-content>
                <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
                <v-list-item-subtitle>by Noor</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>

                <v-img
                src="../assets/illus/hero full.png"
                height="200"
                ></v-img>

                <v-card-text>
                Visit ten places on our planet that are undergoing the biggest changes today.
                </v-card-text>


                <v-expansion-panels
                :flat="true"
                :hover="true"

                >
                <v-expansion-panel
                class=""
                >
                <v-expansion-panel-header
                class="title"><span>More</span></v-expansion-panel-header>
                <v-expansion-panel-content
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
                </v-card>
                </div>


                  <!-- divider -->
                      <v-divider class="mt-12"></v-divider>





              <!-- post archive -->

              <!-- title -->
              <div
              class="display-1 text-center mb-5">
              <span class="display-4 indigo--text">.</span> Post Archive <span class="display-4  indigo--text">.</span>
              </div>

              <!-- posts -->
              <div v-for="(post, index) in posts" :key="index" class="w100 d-flex justify-center">
                <v-card
                max-width="800"
                class="h00 w90 elevation-16 ma-2 mb-4">
                
                    <v-btn
                    class="mt-3 hidden-xs-only elevation-16 float-illus"
                    fab
                    left
                    absolute
                    depressed
                    color="pink"
                    @click="remove(index)"
                    ><v-avatar size="35" tile class="">
                    <v-img src="../assets/bin.png"></v-img>
                    </v-avatar></v-btn>

                    <v-btn
                    class="mt-3 ml-12 hidden-xs-only "
                    fab
                    left
                    text
                    absolute
                    depressed
                    color="indigo"
                    @click="hide(index)"
                    ><v-avatar size="35" tile class="">
                    <v-img src="../assets/hide.png"></v-img>
                    </v-avatar></v-btn>

                    <v-btn
                    class="mt-12 hidden-sm-and-up elevation-16 float-illus"
                    fab
                    left
                    absolute
                    depressed
                    color="pink"
                    @click="remove(index)"
                    ><v-avatar size="35" tile class="">
                    <v-img src="../assets/bin.png"></v-img>
                    </v-avatar></v-btn>

                    <v-btn
                    class="mt-12 ml-12 hidden-sm-and-up"
                    fab
                    left
                    text
                    absolute
                    depressed
                    color="indigo"
                    @click="hide(index)"
                    ><v-avatar size="35" tile class="">
                    <v-img src="../assets/hide.png"></v-img>
                    </v-avatar></v-btn>

                    



                
                <v-list-item>
                <v-avatar class="ml-3">
                <v-img src="../assets/noor-logo-layer.png"></v-img>
                </v-avatar>
                <v-list-item-content>
                <v-list-item-title class="headline">Our Changing Planet</v-list-item-title>
                <v-list-item-subtitle>by Noor Post Number {{post.number}}</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>

                <v-img
                src="../assets/illus/hero full.png"
                height="200"
                ></v-img>

                <v-card-text>
                Visit ten places on our planet that are undergoing the biggest changes today.
                </v-card-text>


                <v-expansion-panels
                :flat="true"
                :hover="true"

                >
                <v-expansion-panel
                class=""
                >
                <v-expansion-panel-header
                class="title"><span>More</span></v-expansion-panel-header>
                <v-expansion-panel-content
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
                </v-card>
              </div>  
  </div>




  <!-- comments -->

  <div v-show="!news" class="back ma-0 pa-0 h100 w100">
    <div class="d-flex justify-center">


                <div v-for="(comment, index) in comments" :key="index" class="py-12 w100 d-flex justify-center">
                <v-card
                max-width="800"
                class="h100 w90 elevation-16 ma-2"
                
                >
                <v-list-item>
                <v-avatar class="ml-3 float-illus">
                <v-img src="../assets/noorino.png"></v-img>
                </v-avatar>
                <v-list-item-content>
                <v-list-item-title class="headline">By {{ comment.firstName }} {{ comment.lastName }}</v-list-item-title>
                <v-list-item-subtitle>Posted at {{comment.date}}</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>

                <v-img
                src="../assets/divider.png"
                height="20"
                 ></v-img>

                <v-card-text>
                  {{comment.comment}}
                </v-card-text>
                </v-card>
                </div>
    </div>
  </div>


  <!-- Navigation -->

    <v-speed-dial
      v-model="fab"
      absolute
      fixed
      top
      right
      :direction="direction"
       >
      <template v-slot:activator>
      <v-hover>
        <template v-slot="{ hover }">
          <v-btn
          v-model="fab"
          v-resize="mobile"
          v-show="true"
          class="mb-n3"
          :elevation="hover ? 12 : 5"
          text
          fab
          :height="navH"
          :width ="navH">
          <v-avatar
          class="white accent-3"
            :size="navH-10">
            <v-avatar
              tile
             class="white accent-3"
            :size="navH-30">
 

            
            <v-img
                v-if="fab"
                src="../assets/more.png"
                alt="Noor"
            >
            </v-img>
            

            
            <v-img 
                v-else
                src="../assets/menu.png"
                alt="Noor"
            >
            </v-img>
            

            
            </v-avatar>
           </v-avatar>
          </v-btn>
        </template>
      </v-hover>
      </template>
      
       <v-btn
          v-for="(tool, index) in 3" :key="index"
          v-resize="mobile"
          v-show="true"
          @click="btnFunction()"
          class=""
          :elevation="hover ? 12 : 5"
          text
          fab
          :height="navH-10"
          :width ="navH-10">
          <router-link :to="btm">
          <v-avatar
          class="white accent-3"
            :size="navH-20">
            <v-avatar
              tile
             class="white accent-3"
            :size="navH-40">
 

            <v-img
                v-if="index == 0"
                src="../assets/ceo (1).png"
                alt="Noor"
            >
            </v-img>
            <v-img
                v-else-if="index == 1"
                src="../assets/contact.png"
                alt="Noor"
            >
            </v-img>
            <v-img
                v-else-if="index == 2"
                src="../assets/faq.png"
                alt="Noor"
            >
            </v-img>
            <v-img
                v-else
                src="../assets/chat.png"
                alt="Noor"
            >
            </v-img>

            
            </v-avatar>
           </v-avatar>
           </router-link>
          </v-btn>  
          
    </v-speed-dial>



    <v-bottom-sheet v-model="sheet" inset>
      <v-sheet class="text-center" height="100">
        <span class="display-2">Coming Soon</span>
      </v-sheet>
    </v-bottom-sheet>


    <v-dialog
      v-model="logout"
      max-width="400"
    >
      <v-card>
        <v-card-title class="headline">Do you Want to Log Out?</v-card-title>
        <div
        class="d-flex justify-center">
          <v-avatar
          size="100"
          tile>
            <v-img src="../assets/logout.png">
            </v-img>
          </v-avatar>
        </div>
        <v-card-text>
          This Means You Want to Leave Admin Panel.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="indigo"
            text
            @click="logout()"
          >
            Disagree
          </v-btn>

          <v-btn
            color="pink"
            text
            @click="logout()"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>


<script>
export default {
  name:'test',

  data:() => ({
    news:true,
    sheet:false,
    logout:false,

    posts:[
      {number:1,hidden:false},
      {number:2,hidden:false},
      {number:3,hidden:false},
      {number:4,hidden:false},
      {number:5,hidden:false},
      {number:6,hidden:false},
    ],

    comments:[
      {
        firstName:'nobuddy',
        lastName:'nobuddyian',
        phoneNumber:'0930 000 0000',
        comment:'Visit ten places on our planet that are undergoing the biggest changes today.Visit ten places on our planet that are undergoing the biggest changes today.Visit ten places on our planet that are undergoing the biggest changes today.Visit ten places on our planet that are undergoing the biggest changes today.',           
        date:'4:42 PM 2/19/2020',
      }
    ]
  }),

  methods:{
    btnFunction(index){

      if(index == 0){this.news = true}
      else if(index == 1){this.news = false}
      else if(index == 2){this.sheet = true}
      else{this.logout = true}

    },
    remove(index){
      this.posts.splice(index,1);
    },
    hide(index){
      this.posts[index].hidden = true;
    }
  }
}
</script>

<style scoped>
.nav{
  border-bottom-left-radius: 45px;
}  
</style>

