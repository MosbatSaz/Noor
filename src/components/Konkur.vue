<template>
    <div
    class=" ltr d-flex justify-center w100 pa-0 ma-0 my-12  back">
    
        <!-- back card -->
        <v-card
        tile
        flat
        max-width="800"
        class=" w100 align-center elevarion-0 back">
        <v-row
        class="pa-0 ma-0 "
        justify="center"
        align="center">

          <v-col
          cols="12">
            <div class="d-block text-center display-3">
              کنکور
            </div>
          </v-col>

          <v-col
          cols="12">
            <div class="d-block text-center headline">
              همه چیز با یه انتخاب خوب شروع میشه
            </div>
          </v-col>
                 
        
          <v-col
          cols="12"
          class="h100">
          <v-timeline
          class="w100 back pa-0 ma-0 elevation-0"
            :align-top="alignTop"
            :dense="dense"
            :reverse="reverse"
          >
            <v-timeline-item
            class="pa-0 py-5 d-flex justify-end elevetion-0 mx-1"
              v-for="n in 4"
              color="pink lighten-1"
              :key="n"
              :fill-dot="false"
              :hide-dot="false"
              :icon="l"
              icon-color="pink"
              :left="false"
              :right="false"
              :small="false"
            >
              <span slot="opposite"></span>
              <v-card
              class="rtl elevation-24 orange lighten-3 float-illus">
                <v-card-title class="headline">Lorem ipsum</v-card-title>
                <v-card-text>
                    وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
                    وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
                    وب سایت نور اروند راه اندازی شد همه جا و در هر زمانی در دسترس شما
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
          </v-col>

          <v-col
          cols="12">
            <div class="d-block text-center display-3">
              موفقیت 
            </div>
          </v-col>
          </v-row>
        </v-card>

    </div>
</template>

<script>

export default {
  name: 'App',
  components:{ },

  data: () => ({
    alignTop: false,
    avatar: false,
    dense: false,
    fillDot: false,
    hideDot: false,
    icon: false,
    iconColor: false,
    left: false,
    reverse: false,
    right: false,
    small: false,
    days:0,
    hours:0,
    minutes:0,
    seconds:0,
    timeLines:[
      {title:'',text:'',sidetxt:''},
      {title:'',text:'',sidetxt:''},
      {title:'',text:'',sidetxt:''},
      {title:'',text:'',sidetxt:''},
    ]
  }),
 
  methods:{
    // countDown(){
    //      // Set the date we're counting down to
    //     var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

    //     // Update the count down every 1 second
    //     var x = setInterval(function() {

    //     // Get today's date and time
    //     var now = new Date().getTime();

    //     // Find the distance between now and the count down date
    //     var distance = countDownDate - now;

    //     // Time calculations for days, hours, minutes and seconds
    //     this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //     this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //     this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //     this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      

    //     // If the count down is finished, write some text
    //     if (distance < 0) {
    //     clearInterval(x);
    //     document.getElementById("demo").innerHTML = "EXPIRED";
    //     }
    //     }, 1000);
    // }
  }
};

</script>
<style >
 
</style>

