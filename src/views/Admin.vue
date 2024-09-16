<template>
  <div class="gradiant d-flex justify-center align-center h100 w100 ma-0 pa-0">
    <v-card class="transparent w100 pa-0 ma-0"
    flat>
    <div class="d-flex justify-center">

    <v-card
    class=" ma-0 pa-0 py-12 w100 mx-12 float-illus elevation-24 "
    max-width="500"
    >


      <div class="d-flex  justify-center align-center w100">
        <v-avatar
        size="250">
          <v-img
          src="../assets/admin.jpg">
          </v-img>
        </v-avatar>
      </div>

      <div
      max-width="400"
      v-for="(input, index) in inputs" :key="index"
      class="w100 rtl  d-flex justify-center">

          <v-text-field
          dense
          flat
          :label="input.label"
          solo
          outlined
          class="mx-12 pink hidden-sm-and-up"
          >
          </v-text-field>

          <v-text-field
          :label="input.label"
          solo
          outlined
          color="indigo"
          flat
          background-color="white"
          class="mx-12  hidden-xs-only gray--text"
          >
          </v-text-field>

      </div>

      <div
      class="w100 d-flex mx  justify-center ma-0  pa-0 mt-5">
        <v-btn
        class="indigo darken-3 lighten-1 elevation-24 white--text headline text-capitalize"
        width="200"
        height="50">
                   sign in
        </v-btn>
      </div> 

       <div
      class="w100 d-flex mx  mt-5 justify-center ma-0 op70  pa-0">

          <v-btn
          v-show="true"
          depressed
          fab 
          height="75"
          width="75"
          class=" transparent title white--text">
          <v-avatar
          size="75"
          tile>
            <v-img
            src="../assets/noor-colorful-min.png">
            </v-img>
          </v-avatar>
          </v-btn>

          <v-btn
          v-show="true"
          depressed
          fab 
          height="75"
          width="75"
          class=" ml-12 transparent title white--text">
          <v-avatar
          tile
          size="75"
          color=""
          >
            <v-img 
            src="../assets/MosbatSaz +saz-overlay-min.png">
            </v-img>
          </v-avatar>
          </v-btn>

      </div> 


     
      </v-card>
      </div>
    </v-card>

          
  </div>
</template>


<script>
export default {
  name:'test',
  data:() => ({
    inputs:[
      {label:'Full Name',require:true},
      {label:'Password',require:true},
  ],
  })
}
</script>
<style scoped>

.gradiant{
  background-image: linear-gradient(to bottom,#ffffff, #e22c78);
}


</style>