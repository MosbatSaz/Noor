<template>
    <div
    class="  pa-0 ma-0 my-12  w100">
        <div 
        class="text-center w100 display-3 mb-12">
          کلاس ها
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
              src="../assets/illus/class-min.png">  
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
                    وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما                    وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
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
        <v-divider class=" indigo mt-12"></v-divider>
        <div 
        class="text-center w100 display-3 my-12">
          کلاس های نور
        </div>
            <div
            v-for="(teacher, index) in teachers" :key="index"
            class="d-flex justify-center mx-5">
                <v-card
                max-width="800"
                class="w100 my-5 elevation-16"
                
                >
                <v-list-item>
                <v-avatar size="80" class="mr-3 my-3">
                <v-icon size="80" :color="teacher.color">mdi-school</v-icon>
                </v-avatar>
                <v-list-item-content>
                <v-list-item-title class="headline"> کلاس {{teacher.title}} </v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>

                <v-img
                src="../assets/illus/hero full-min.png"
                height="194"
                ></v-img>

                <v-card-text>
                    وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
                    وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
                    وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
                    وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
                    وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
                </v-card-text>


                <v-expansion-panels
                :flat="true"
                :hover="true"

                >
                <v-expansion-panel
                class=""
                >
                <v-expansion-panel-header
                class="title"><span><v-icon class="mr-2 mb-1" :color="teacher.color">mdi-clock</v-icon>زمانبندی</span></v-expansion-panel-header>
                <v-expansion-panel-content
                >
                    وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
                    وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
                    وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
                    وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
                    وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما        
                </v-expansion-panel-content>
                </v-expansion-panel>
                </v-expansion-panels>
                </v-card>
            </div>  
    </div>
</template>

<script>

export default {
  name: 'App',
  components:{ },

  data: () => ({
      teachers:[
        {title:'ریاضی',color:'orange'},
        {title:'فیزیک ',color:'indigo'},
        {title:'شیمی',color:'pink'},

      ]   
  }),

 
};

</script>

