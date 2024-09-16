<template>

    <v-container fluid  min-height="800" class="pa-0 ma-0 indigo darken-3 h80 minh700">

        <v-row 
        no-gutters
        class=" ma-0 pa-0 h100"
        justify="center"
        align="center"
        >
            <!-- finger-print -->
            <v-col 
            cols="12"
            class="pa-0 ma-0"
            >   
                <div 
                class="d-flex justify-center">
                    <v-avatar
                    size="150">
                    <img
                        src="../assets/Finger-Print.png"
                        alt="John"
                    >
                    </v-avatar>  
                </div>
 
                <!-- block spacer -->
                <div
                class="d-flex justify-center w100 my-6">
                    <v-card
                    
                    class="h100 white--text"
                    width="200"
                    flat
                    >
                    <v-responsive
                    :aspect-ratio="16/1">
                       
                    </v-responsive>
                    </v-card>
                </div>

                 <!--input fields -->
                <div
                v-for="(input, index) in inputs" :key="index"
                class="d-flex justify-center">

                    <v-text-field
                    dense
                    :label="input.label"
                    solo
                    class="mx-5 hidden-sm-and-up"
                    >
                    </v-text-field>

                    <v-text-field
                    :label="input.label"
                    solo
                    reverse
                    flat
                    background-color="white"
                    class="mx-8 hidden-xs-only gray--text"
                    >
                    </v-text-field>

                </div>


                <!-- sign up -->
                <div
                class="d-flex justify-center ma-0 mt-6 pa-0">
                    <v-btn
                    class="pink lighten-1 white--text headline text-capitalize"
                    width="300"

                    height="50">
                    sign In
                    </v-btn>
                </div> 

                <!-- divider -->
                <div
                class="d-flex justify-center ma-0 mt-6 pa-0">
                <v-divider  class="white my-5 mx-5"></v-divider>
                </div>
   



            <!-- forget password -->

            <div
                class="d-flex justify-center ma-0  pa-0">
                    <v-card
                    flat
                    class="transparent text-center text-capitalize subtitle-1 "
                    width="300"
                    height="50">
                    <v-btn
                    @click="ToggleToSignUp()"
                    color="white"
                    class="font-weight-light"
                    text>
                    Forget PassWord?
                    </v-btn>    
                    </v-card>
                </div> 
       
            <!-- block spacer -->
          
        
                <div
                class="d-flex justify-center w100">
                    <v-card
                    class="h100 white--text"
                    width="200"
                    flat
                    >
                    <v-responsive
                    :aspect-ratio="16/1">
                       
                    </v-responsive>
                    </v-card>
                </div>
    
 

            <!-- create a new account -->

                 <div
                class="d-flex justify-center ma-0 mt-6 pa-0">
                    <v-card
                    flat
                    class="transparent text-center text-capitalize subtitle-1 font-weight-lihgt"
                    width="300"
                    height="50">
                    <v-btn
                    @click="ToggleToSignUp()"
                    color="green accent-3"
                    outlined>
                    Create a new account
                    </v-btn>    
                    </v-card>
                </div>    
            </v-col>  

                                                     
        </v-row>
    </v-container>


</template>

<script>

export default {

    data : () => ({

           inputs:[
                {label:'Full Name',require:true},
                {label:'Password',require:true},
            ],
    }),

    methods:{
        ToggleToSignUp(){
            this.$emit('Toggle',1)
        },
    }

 
}
</script>
<style scoped>
    
</style>