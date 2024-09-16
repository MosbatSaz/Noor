<template>
  <div class="back">

    <!-- just for development
    use to show viewport -->
    <v-btn
    v-show="dev"
    depressed
    fixed
    absolute
    bottom
    fab 
    v-resize="onResize"
    right
    class="mb-10 pink title white--text">
    {{viewport}}
    </v-btn>
<!-- place home page in a grid system -->
    <v-container  fluid fill-height class="back pa-0"> 
    <v-row     
      class="ma-0 pa-0 back"
      justify="space-between"
    >



      <!-- hero image -->

        <!-- hero image -->



        
      <v-col 
      cols="12"
      class="back ma-0 pa-0 back">
           <v-row
            align="center"
            justify="center"
            class="h100 w100 pa-0 ma-0 hero back"
          >
            <v-card
            flat
            tile
            :height="heroH"
            
            class="w100 hero back">

              <!-- display on -->

                <!-- lg and xl -->


                <v-img
                src="../assets/heros.png"
                :class="`pa-0 ma-0 h100 w100 d-flex align-end ${viewport == 'xs' ? 'justify-center' : 'justify-end'}`">
                  <div class="rtl text-center mr-12">
                    <v-card
                    flat
                    :class="`${viewport =='xs' || viewport == 'sm' ? 'title font-weight-bold' : 'display-1'} mb-5 font-weight-light transparent `"
                    :max-width="sectionH+100"
                    >
                      آموزشگاه علمی نور اروند با تکیه بر کادری مجرب تا قله ی موفقیت کنار شماست
                    </v-card>
                  </div>
                </v-img>

             </v-card>  
          </v-row>
      </v-col>




      <!-- section cards use for loop-->
      
      <v-col
      cols="12"
      class="ma-0 pa-1 pt-5 back ">
      <v-row     
      :class="`ma-0 pa-0 ${margin}`"
      justify="space-between back"
       >
      <v-col
      v-for="(section, index) in sections" :key="index"
      cols="6" sm="6" md="4" lg="2"
      class="ma-0 pa-1 pt-2 back">
      <v-lazy>
      <router-link   :to='section.route'>
        <v-hover>
          <template v-slot="{ hover }">
            <v-card
              :elevation="hover ? 16 : 4"
              v-resize="mobile"
              :height="sectionH"
              :ripple="false"
               @click="dialog =! dialog"
              class=" pa-0 w100"
            >
              <div
              class="d-flex justify-center h100 w100">
                
                  <v-row
                  justify="center"
                  align="center"
                  class="ma-0 pa-0">
                    <v-col
                    cols="12"
                    class="pa-0 ma-0">
                      <div 
                      class="text-center font-weight-black pa-0 mb-n5">
                        <span class="headline font-weight-bold grey--text text--darken-4" >{{section.title}}</span>
                      </div>
                    </v-col>
                    <v-col
                    cols="12"
                    class="ma-0 pa-0">

                    <!-- illus -->
                      <div
                      class="d-flex justify-center pa-0 ma-0">
                        <v-avatar
                        :size="illusH"
                        tile>

                          <v-img v-show="index == 0" src="../assets/archive-min.png"></v-img>
                          <v-img v-show="index == 1" src="../assets/advisor-min.png"></v-img>
                          <v-img v-show="index == 2" src="../assets/exam-min.png"></v-img>
                          <v-img v-show="index == 3" src="../assets/konkur-0-min.png"></v-img>
                          <v-img v-show="index == 4" src="../assets/classes-min.png"></v-img>
                          <v-img v-show="index == 5" src="../assets/teacher-min.png"></v-img>
                            
                        </v-avatar>
                      </div>
                    </v-col>
                  </v-row>
               
              </div>
            </v-card>
          </template>
         </v-hover>
        </router-link>
        </v-lazy>
      </v-col>
      </v-row>
      </v-col>


      <!-- News -->
      <v-col 
      cols="12"
      class="pa-0 ma-0 mt-12 back rtl" 
      >
        <v-card
        flat
        tile
        class="h100 w100 py-12 pa-0 back">
     
        
            <v-row
            class="pa-0 ma-0 back"
            justify="center"
            align="center">

              <!-- news title-->
              <v-col  cols="12">
                <div class="text-center mb-4">
                  <span
                  class="display-1 font-weight-bold grey--text text--darken-3">
                  تازه ها</span>
                </div>
              </v-col>

              <!-- news (for loop used)-->


              <v-col
              cols="12"
              v-for="(n, index) in news" :key="index">
               <v-card
                max-width="1000"
                class="mx-auto elevation-16"
                >
                <v-list-item>
                <v-avatar class="ml-3">
                <v-img src="../assets/noor-logo-layer-min.png"></v-img>
                </v-avatar>
                <v-list-item-content>
                <v-list-item-title class="headline">{{n.title}}</v-list-item-title>
                <v-list-item-subtitle>نور اروند در تاریخ  {{n.date}}</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>

                <v-img
                contain
                :src="required(n.img)"
                height="300"
                >{{news}}</v-img>

                <v-card-text class="title">
                {{n.brief}}
                </v-card-text>


                <v-expansion-panels
                :flat="true"
                :hover="true"

                >
                <v-expansion-panel
                class=""
                >
                <v-expansion-panel-header
                class="title"><span>بیشتر</span></v-expansion-panel-header>
                <v-expansion-panel-content
                class="back title pt-3"
                >
                 {{n.text}}
                </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
                </v-card>

              </v-col>

            </v-row>
        
        </v-card>
      </v-col>


      <!-- Description -->
      <v-col 
      cols="12"
      class="pa-0 ma-0" 
      >
       <v-lazy 
        v-model="isActive"
        :options="{
          threshold: .5
        }"
        min-height="200"
        transition="fade-transition">
        <v-card
        flat
        class="h100 w100 py-12 pa-0 ma-0 section">

            <v-row
            class="pa-0 ma-0"
            justify="center"
            align="center">

              <!-- description title-->
              <v-col  cols="12">
                <div class="text-center mb-4">
                  <span
                  class="display-1 font-weight-bold grey--text text--darken-3">
                  نور برای همه</span>
                </div>
              </v-col>

              <!-- description (for loop used)-->
             
                <v-col 
                v-for="(description, index) in descriptions" :key="index"
                cols="12" sm="6" md="4" lg="3"
                >
                 <v-img
                 class="elevation-16 pa-3 pt-0 float-illus-reverse"
                  src="../assets/doodles-school-0-min.jpg"
                  >
                  <v-card 
                  class="elevation-8 orange lighten-5  op95  ma-5 mt-10  pa-0 d-flex">
                    <v-card 
                    class=" ma-5 op100 float-illus  elevation-16">

                    <!-- icon -->
                      <div
                      class="d-flex justify-center my-5">
                       <v-avatar
                         tile
                        size="100">
                          <v-img
                              v-show="index == 0"
                              src="../assets/Teacher-1-min.png"
                              alt="John"
                          >
                          </v-img>
                           <v-img
                              v-show="index == 1"
                              src="../assets/parents-min.png"
                              alt="John"
                          >
                          </v-img>
                           <v-img
                              v-show="index == 2"
                              src="../assets/Organ-min.png"
                              alt="John"
                          >
                          </v-img>
                        </v-avatar>
                      </div>

                    <!-- header -->
                      <div
                      class="font-weight-bold d-flex justify-center display-1 mb-5">
                        {{description.title}}
                      </div>
                    <!-- description -->
                      <div
                      class=" text-center ma-2">
                        وب سایت نور اروند راه اندازی شد همه و در هر زمانی در دسترس شما
                        وب سایت نور اروند راه اندازی شد همه و در هر زمانی در دسترس شما
                        وب سایت نور اروند راه اندازی شد همه و در هر زمانی در دسترس شما
                        وب سایت نور اروند راه اندازی شد همه و در هر زمانی در دسترس شما
                        وب سایت نور اروند راه اندازی شد همه و در هر زمانی در دسترس شما
                
                      </div>

                    </v-card>
                    
                  </v-card>
                </v-img>
              </v-col>
            
            </v-row>

        </v-card>
        </v-lazy>
      </v-col>
      




      <!-- proud -->
      <v-col 
      class="medal py-8" 
      cols="12">
      <div
      class="text-center mb-8">
        <span
        class="display-1 font-weight-bold grey--text text--darken-3">
        افتخارات</span>
      </div>
      <v-row
      justify="center"
      align="center"
      >
        <v-col
        cols="12" md="4" lg="3" xl="2"
        v-for="(medal, index) in 4" :key="index"
        >
        
          <!-- medal -->
          <div
          class="d-flex justify-center">
            <v-avatar size="300" tile>
              <v-img v-if="index == 0" src="../assets/medal0-min.png"></v-img>
              <v-img v-else-if="index == 1" src="../assets/medal1-min.png"></v-img>
              <v-img v-else-if="index == 2" src="../assets/medal2-min.png"></v-img>
              <v-img v-else src="../assets/medal3-min.png"></v-img>
            </v-avatar>
          </div>

          <!-- title -->
          <div
          class="d-flex justify-center">
            مدال
          </div>

        </v-col>
      </v-row>  
      </v-col>




      <!-- Footer-->
      <v-col
      class="pa-0" 
      cols="12">
        <v-card
        class="black"
        height="300"
        tile
        dark>


        <!-- footer options ( fops ) -->




        <!-- Map -->
            <v-card
            :height="mapH"
            class="d-flex justify-center orange lighten-4 ma-0 pa-0 h100"
            flat
            tile>
              <v-row
              v-resize="mobile"
              class="ma-0 pa-0 h100 w100"
              justify="center"
              align="stretch">
                <v-col
                :cols="12"
                class="ma-0 pa-0">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.57502456997!2d48.28267815106922!3d30.33460371167148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fc44f12eb39a3c7%3A0xc4ec16f6be22c4da!2sNoor%20Arvand%20Educational%20institution!5e0!3m2!1sen!2s!4v1578324126941!5m2!1sen!2s"
                  class=" w100 h100 deep-purple darken-4"   
                  >
                  </iframe>
                </v-col>

                <!-- side fops -->
                
              </v-row>
            </v-card>  

  

          <v-card
          tile
          height=""
          >
          <div
            
            class="indigo  darken-4 w100 h100 white--text text-center"
          >
           <v-img
           height="150"
           class="h100 py-5"
           src="../assets/doodle-footer-min.png">
             
                <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  class="mx-4 white--text"
                  icon
                  large
                >
                  <v-icon size="36">{{ icon }}</v-icon>
                </v-btn>
           

              <!-- <v-divider class="my-2"></v-divider> -->

              
                <v-row
                class="mt-n3"
                justify="center"
                align="center"
                >
                  <v-col
                  cols="12">
                    <v-avatar
                    tile
                    size="50"
                    class="mb-n10"
                    >
                      <v-img
                      src="../assets/MosbatSaz +saz-overlay-11-min.png">
                      </v-img>
                    </v-avatar> 
                  </v-col>
                  <v-col
                  cols="12">
                    <span
                    class="ml-5 font-weight-light">
                    {{ new Date().getFullYear() }}
                    </span> 
                  </v-col>
                </v-row>            
   
          </v-img>
          </div>
          </v-card>

        </v-card>
      </v-col>
              

    </v-row>




    
    <!-- Dialog -->
 
      <v-dialog
        v-model="dialog"
        :fullscreen="viewport == 'xs'"
        :overlay-opacity="opacity"
        class="pa-0 ma-0 back op95 "
      >

      <v-sheet
      min-height="1000"
      class="d-flex justify-end back" >
        
        
        <v-btn
          class="my-n6 mx-n3 hidden-xs-only elevation-8"
          fab
          fixed
          absolute
          depressed
          color="pink"
          @click="dialog = !dialog"
        ><router-link to="/"><v-icon size="30" color="white">mdi-arrow-right</v-icon></router-link></v-btn>
        

        
        <v-btn
          class="my-10 mx-n3 hidden-sm-and-up elevation-8"
          fab
          fixed
          absolute
          bottom
          depressed
          color="pink"
          @click="dialog = !dialog"
        ><router-link to="/"><v-icon size="30" color="white">mdi-arrow-right</v-icon></router-link></v-btn>
        
        
        <router-view class="rtl"></router-view>
        
        <!-- <component :is="c"></component> -->


      </v-sheet>

        
   
      </v-dialog>

      <!-- Bottom sheet -->

      <v-bottom-sheet 
      v-model="sheet" 
      >
      <v-sheet class="d-flex justify-center" :height="(viewport == 'xs') ? 600 : 500">
        <v-img
        src="../assets/illus/hero full.png">
        <v-btn
          class="my-6 hidden-xs-only"
          depressed
          absolute
          right
          fab
          color="pink"
          @click="sheet = !sheet"
        ><v-icon color="white">mdi-close</v-icon></v-btn>
        <v-btn
          class="mb-12 hidden-sm-and-up"
          depressed
          absolute
          bottom
          right
          fab
          color="pink"
          @click="sheet = !sheet"
        ><v-icon color="white">mdi-close</v-icon></v-btn>

      <router-link :to='btmRoute'>
        <router-view ></router-view>
      </router-link>  

      </v-img>
      </v-sheet>
    </v-bottom-sheet>

    

  </v-container>
  </div>
</template>

<script>

// import Archive from '../components/Archive'
// import Konkur from '../components/Konkur'
// import Advicer from '../components/Advicer'
// import Classes from '../components/Classes'
// import Teachers from '../components/Teachers'
// import Exam from '../components/Exam'
import { bus } from '../main'
import Resize from '../mixins/resize'
import axios from 'axios'; 

export default {
  name: 'home',

  // components:{
  //   Archive,
  //   Konkur,
  //   Advicer,
  //   Classes,
  //   Teachers,
  //   Exam
  // },
  data: () =>({   
    //data
    // c : Classes,
    dialog: false,
    sheet: false,
    heroH:0,
    sectionH:0,
    viewport:'',
    fopsHorizon:true,
    mapH:400,
    illusH:50,
    margin:'mx-12',
    mapBP:12, 
    dev:false,
    isActive:false,
    opacity:.8,

    sections:[
      {title:'تصاویر', route:'/Archive'},
      {title:'مشاوره', route:'/Advicer'},
      {title:'آزمون', route:'/Exam'},
      {title:'کنکور', route:'/Konkur'},
      {title:'کلاس ها', route:'/Classes'},
      {title:'اساتید', route:'/Teachers'},
    ],

    descriptions:[
      {title:'اساتید'},
      {title:'والدین'},
      {title:'سازمان ها'},
    ],

    icons:[
        'mdi-google-plus',
        'mdi-telegram',
        'mdi-instagram',
      ],
      
      news: null,

      // the news JASON should be like this
        
        // news:[
        //   {
        //   title:'نور آنلاین شد',
        //   img:'../assets/illus/hero full-min.png',
        //   date:''
        //   brief:' وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما',
        //   text:'وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شماوب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما'
        //   }
        // ]
  }),

    created(){
      bus.$on('openDialog', (data) =>{
        this.dialog = data;
      });
      this.getNews();  //enable this line of code to get api
    },


    mounted () {
      this.onResize(); // this function is mixin thats indicate the viewport
      this.mobile();  // this function makes the page responsive (horizontally)
    },
 
    methods: {

      //get news from data base
      getNews(){
        axios
          .get('https://jsonplaceholder.typicode.com/todos/1')       //place api here 
          .then(response => (this.news = response))
      },
      mobile(){
        if(this.viewport == 'xs'){ //xs
          this.heroH = (window.innerWidth)
          this.sectionH = (window.innerWidth)/2
          this.fopsHorizon = false;
          this.mapBP = 9;
          this.mapH = 500;
          this.illusH = 60;
          this.margin ='mx-0';

        }
        else if(this.viewport == 'sm'){ //sm
          this.heroH = (950)*40/100
          this.sectionH = (950)*18/100
          this.fopsHorizon = true;
          this.mapBP = 12;
          this.mapH = 400;
          this.illusH = 70;
          this.margin ='mx-4';
        }
        else if(this.viewport == 'md'){ //md
          this.heroH = (950)*55/100
          this.sectionH = (950)*20/100
          this.fopsHorizon = true;
          this.mapBP = 12;
          this.mapH = 400;
          this.illusH = 90;
          this.margin ='mx-6';
        }
        else{ //lg and xl
          this.heroH = (950)*70/100
          this.sectionH = (950)*25/100
          this.fopsHorizon = true;
          this.mapBP = 12;
          this.mapH = 400;
          this.illusH = 110;
          this.margin ='mx-12';
        }

      },
  },
  mixins:[Resize] // viewport indicator mixin
}
</script>

<style scoped>

.hero{
  background-image: linear-gradient(to bottom,white, #f2f1f0);
}

.section{
  background-image: linear-gradient(to bottom,#f2f1f0, #fff3e0);
}

.medal{
  background-image: linear-gradient(to bottom,#fff3e0, #fcdca8);
}

</style>