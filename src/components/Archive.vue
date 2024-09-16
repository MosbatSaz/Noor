<template>
<v-card
flat
class="w100 h100 pa-0 ma-0 my-12  back d-flex justify-center align-center">
  <v-card
  v-resize="setH"
  tile
  falt
  class=" w80 h80 elevation-24"
  >

  <v-carousel 
  hide-delimiter-background
  :height="H"
  cycle
  show-arrows-on-hover 
  >
    <v-carousel-item

      v-for="(item,index) in items"
      :key="index"
      src="../assets/illus/hero full-min.png"
      
    >

    <div class="text-center mt-12 display-3"> This Is The Noor </div>

    </v-carousel-item>
  </v-carousel>
      
  </v-card>

</v-card>
</template>



<script>

  export default {
    data : () => ({
      H:0,
      items: [
          {
            src: '../assets/illus/hero full.png',
          },
          {
            src: '../assets/illus/hero full.png',
          },
          {
            src: '../assets/illus/hero full.png',
          },
          {
            src: '../assets/illus/hero full.png',
          },
        ],

  }),

  updated(){
    this.setH();
  },

  methods:{
    setH(){
      this.H = (window.innerHeight)*90/100;
    }
  }

  }
</script>
<style scoped>
</style>