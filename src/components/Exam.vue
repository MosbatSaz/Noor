<template>
    <div
    class=" pa-0 ma-0 my-12  w100 ">
        <div 
        class="text-center display-3">
          آزمون
        </div>

        <!-- back card -->
                <v-card
        class="indigo elevation-24 my-5 pl-4 mx-5">
        <v-card
        tile
        flat
        class=" py-12">
          <v-row
          class="h100 pa-0 ma-0"
          justify="center"
          align="center">

          <!-- illus -->
            <v-col
            cols="12" md="4"
            class="d-flex justify-center float-illus mx-5  align-center ">
              <v-img
              contain
              class=""
              src="../assets/illus/konkur.png">  
              </v-img>
            </v-col>

          <!-- text -->
           <v-col
            cols="12" md="7"
            class="d-flex justify-center">
              <v-card
              tile
              max-width="600"
              class="pr-2 indigo elevation-0">
                <v-card
                tile 
                flat
                class="white elevation-0"
                height="">
                  <v-card-text
                  class="indigo--text text--darken-3 title">
                   وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
                   وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
                   وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
                   وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
                   وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
                   وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
                   وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
                  </v-card-text>
                </v-card>
              </v-card>
            </v-col>
            
          </v-row>
          </v-card>
        </v-card>
        <v-divider class=" indigo my-12"></v-divider>

        <!-- exam cards -->
        <v-row 
        class="mx-2"
        justify="center"
        align="center">
          <v-col
          class="d-flex justify-center"
          cols="12" md="4"
          v-for="(exam, index) in exams" :key="index">
            <v-card 
            flat
            height=""
            class=" h100  elevation-16 w100  pa-1  py-3">

            <div
            class="text-center display-2">{{exam.title}}</div>
                <v-row
                class="h100 pa-0 ma-0"
                justify="center"
                align="center">

                <!-- exam logo -->
                    <v-col
                    cols="12"
                    class="d-flex justify-center">
                    <v-avatar
                        size="100"
                        tile
                        class=""
                    >
                        <img v-if="index == 0" src="../assets/gaj-log-min.png" alt="alt">
                        <img v-else-if="index == 1" src="../assets/maz-logo-min.png" alt="alt">
                        <img v-else src="../assets/sanjesh-min.png" alt="alt">
                        
                    </v-avatar>

                    </v-col>

                    <!-- exam text -->
                    <v-col>
                    <v-card
                    class="indigo pr-1"
                    flat
                    tile>
                    <v-card
                    class=""
                    flat
                    tile>
                        <v-card-text
                        class="indigo--text text--darken-4 back body-1">
                            {{exam.description}}
                        </v-card-text>
                    </v-card>
                    </v-card>
                    </v-col>
                </v-row>

                <v-card-actions
                class="ma-0 pa-0 w100">
                    <a
                    target="_blank"
                    :href="exam.readMore">
                        <v-btn
                        class="indigo back--text text--lighten-1 ml-3 darken-3">
                            بیشتر
                        </v-btn>
                    </a>
                </v-card-actions>

            </v-card>

          </v-col>
        </v-row>
    </div>
</template>

<script>

export default {
  name: 'App',
  components:{ },

  data: () => ({
      exams:[
        {title:'گاج',description:'وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شماوب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما',readMore:"http://azmoon.gaj.ir/"},
        {title:'ماز',description:'وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شماوب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما',logo:'../assets/maz-logo.png',readMore:"https://biomaze.ir/"},
        {title:'سنجش',description:'وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شماوب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما',logo:'../assets/sanjesh.png',readMore:"http://92.242.195.129/sanjeshserv_regsarasari/"},

      ]
  }),
};

</script>

