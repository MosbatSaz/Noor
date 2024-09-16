<template >
<div v-resize="onResize">
  
 <!-- Toolbar -->     
    <!-- <v-app-bar
    v-resize="mobile"
    app 
    flat
    class=" red pa-0 ma-0 w100" 
    :height="navH"> -->
    
    <!-- LOGO -->

     <v-btn
          v-resize="mobile"
          class="mt-10"
          text
          disabled
          fixed
          absolute
          top
          left
          fab
          :height="navH"
          :width ="navH">
            <v-avatar
            :size="logoH">
            <v-img
                src="../assets/noor-colorful.png"
                alt="Noor"
            >
            </v-img>
          </v-avatar>
      </v-btn>


        <!-- use in dev mode -->

         <v-btn
         v-show="dev"
          depressed
          fixed
          absolute
          bottom
          left
          fab 
          right
          @click="switching()"
          class="mb-10 pink title white--text">
          {{viewport}}
          </v-btn>


      <!-- TEST  use this testing btn to toggle navigation drawer statement -->
      <!-- <v-btn  fixed icon height="80" width="80" class="pink white--text textFade" @click="switching()"> Toggle </v-btn> -->


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
          v-for="(btm, index) in btms" :key="index"
          v-resize="mobile"
          v-show="true"
          @click="openDialog()"
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




   
  <!-- </v-app-bar> -->


  <!-- Navigation drawer -->

  <!-- <v-navigation-drawer 
  
  @drag="checkToggle()"
  floating
  width="350" 
  class="" 
  color=" black--text" 
  app   
  right
  disable-resize-watcher 
  v-model="toggle">

  <v-img
  src="../assets/doodle-footer-v-min.png"
  class="ma-0 pa-0 h100">

      <div
      class="d-flex  justify-center">
        <v-btn
        @click="toggledrawer()"
        text
        class="white hidden-xs-only pa-0 ma-0 mt-2 right"
        icon
        large
        >
          <v-icon
          color="deep-purple darken-4"
          >
            mdi-close
          </v-icon>
        </v-btn>
      </div>  

       <div
      class="d-flex justify-center">
        <v-btn
        @click="toggledrawer()"
        text
        absolute
        bottom
        class="white flex hidden-sm-and-up pa-0 ma-0 mt-2 right"
        icon
        large
        >
          <v-icon
          color="deep-purple darken-4"
          >
            mdi-close
          </v-icon>
        </v-btn>
      </div>  




      <div
      v-show="true"
        color=" blue"
        height="80"
        class="mt-5"
        >

          <div
          class="w100 d-flex justify-center">
            <div
            class="w40 d-flex mx-5 justify-space-around">

                <v-hover
                v-for="(fop, index) in fops" :key="index" >
                 <template v-slot="{ hover }">
                  <v-fab-transition>
              <v-btn :class="` ${fop.color}  black--text mx-1 elevation-16`"
              height="60"
              :elevation="hover ? 16 : 8"
              @click="toggleTabs(index)"
              text
              large>
              
                <div
                class="h100 w100">

             
                  <div
                  class="d-block text-center mb-2">
                    <v-icon
                    size="30">
                    {{fop.icon}}</v-icon>
                  </div>
                  
                 
                  <div
                  class="d-block text-center">
                    <span>{{fop.title}}</span>
                  </div>

                </div>
              
              </v-btn>
              </v-fab-transition>
             </template>
            </v-hover>
            </div>
          </div>

        </div> 
        
        
        







        <component
        class="ma-0 pa-0" 
        :is="c"
        ></component>
 

  </v-img>
 </v-navigation-drawer> -->

 </div>
</template>

<script>

// import Ceo from '../components/Ceo'
// import Contact from '../components/Contact'
// import Faq from '../components/Faq'
// import Comment from '../components/Comment'
import { bus } from '../main'
import Resize from '../mixins/resize'
export default {

  name: 'Home-page',

  components:{
    // Ceo,
    // Contact,
    // Faq,
  },

  data: () => ({
    // c: Ceo,
    isSwitched: false,
    show: true,
    toggle: false,
    bn:true,
    viewport:'',
    navH:100,
    logoH:120,
    fingerH:80,
    dev:false,
    btmTarget:'',
    //fab options
    direction: 'bottom',
    fab: false,


    fops:[
      {title:'CEO',icon:'mdi-glasses',color:"orange "},
      {title:'Contact',icon:'mdi-phone-classic',color:"deep-purple accent-3"},
      {title:'FAQ',icon:'mdi-frequently-asked-questions',color:"pink"},
    ], 
    
    btms:[
      '/Ceo',
      '/Contact',
      '/Faq',
      '/Comment'
    ]

  }),
  //use updated lifecycle hook to sync sign-btn (on the top right hand side)
  //with the show/hide state of drawer, notice if you dont use updated the btn will
  // desapear as you drag to close the drawer in the mobile viewport
  updated(){
    // this.checkToggle();
    this.onResize(); // this function is mixin thats indicate the viewport
    this.mobile();  // this function makes the page responsive (horizontally)
  },

  methods:{

    openDialog(){
      bus.$emit('openDialog', true)
    },

    //this method use make the drawer vertically responsive
    mobile(){
    if(this.viewport == 'xs'){ //xs
      this.navH = 60;
      this.logoH = 72;
      this.fingerH = 48
    }
    else{ //lg and xl
      this.navH = 80;
      this.logoH = 100;
      this.fingerH = 80;
    }

    },

    //these methods use to control the show/hide of drawer 
    //and the activater btn 
    // toggledrawer(){
    //   this.toggle =! this.toggle 
    //   this.show =! this.show
    // },
    // checkToggle(){
    //   (this.toggle == false) ? this.show = true : ''
    // },
    // toggleTabs(index){
    //   if(index == 0){this.c = Ceo}
    //   else if(index == 1){this.c = Contact}
    //   else{this.c = Faq}
    // }
    
  },
 
  mixins:[Resize] 
  
};
</script>
<style scoped>
  #create .v-speed-dial {
    position: absolute;
  }

  #create .v-btn--floating {
    position: relative;
  }
</style>