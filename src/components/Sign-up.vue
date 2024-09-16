<template>
    
    <v-container fluid class="pa-0 ma-0 indigo darken-3 h90">
        <v-row 
        
        no-gutters
        class=" ma-0 pa-0 h100"
        justify="center"
        align="start"
        >
            <!-- finger-print -->
               


                <v-col 
                cols="12"
                class="ma-0 pa-0 py-12">

                <!-- block spacer -->
                <div
                class="d-flex justify-center w100 mb-6">
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
                    v-model="form.first"
                    :rules="rules.name"
                    solo
                    class="mx-5 hidden-sm-and-up"
                    >
                    </v-text-field>

                    <v-text-field
                    :label="input.label"
                    solo
                    required
                    reverse
                    flat
                    background-color="white"
                    class="mx-8 hidden-xs-only gray--text"
                    >
                    </v-text-field>

                </div>

                <!-- selector -->
                <div
                class="d-flex justify-center">
                    <v-select
                    :items="items"
                    label="select your level"
                    class="mx-8"
                    solo
                    ></v-select>
                </div>

                <!-- checkbox -->
                <div
                class="d-flex justify-center ma-0  pa-0">
                    <v-card
                    flat
                    class="transparent"
                    width="300"
                        >
                        <v-checkbox
                        dark
                        color="pink lighten-1"
                        v-model="checkbox"
                        label="I agree to the terms of Noor Edu"
                        ></v-checkbox>
                    </v-card>
                </div> 

                <!-- sign up -->
                <div
                class="d-flex justify-center ma-0 mt-6 pa-0">
                    <v-btn
                    class="pink lighten-1 white--text headline text-capitalize"
                    width="300"

                    height="50">
                    sign up
                    </v-btn>
                </div> 

                <!-- divider -->
                <div
                class="d-flex justify-center ma-0 mt-6 pa-0">
                <v-divider  class="white mx-5"></v-divider>
                </div>

                <!-- have an account? -->
                <div
                class="d-flex justify-center ma-0 mt-6 pa-0">
                    <v-card
                    flat
                    class="transparent text-center text-capitalize subtitle-1 font-weight-lihgt"
                    width="300"
                        >
                    <v-btn
                    @click="ToggleToSignIn()"
                    color="white"
                    outlined>
                    Already Have an Account ?
                    </v-btn>    
                    </v-card>
                </div> 

            </v-col>

            <!-- sign in btn -->
            <!-- <v-col 
            cols="12"
            class="ma-0 my-n12 pa-0 ">
   
            </v-col>   -->

            <!-- forget password -->


            <!-- sign in with google -->
 
            <!-- block spacer -->


            <!-- create a new account -->
  

                                                     
        </v-row>
    </v-container>


</template>

<script>

export default {
    data () {


    const defaultForm = Object.freeze({
        first: '',
        last: '',
        bio: '',
        
        favoriteAnimal: '',
        age: null,
        terms: false,
      })

        return{
            items: ['level 2', 'level 3', 'level 4', 'level 5'],
            checkbox: false,
            inputs:[
                {label:'First Name',require:true},
                {label:'Last Name',require:true},
                {label:'Phone Number',require:true},
                {label:'Email',require:false},
                {label:'Password',require:true},
                {label:'Password',require:true},
            ],

            form: Object.assign({}, defaultForm),
            rules: {
            age: [
                val => val < 10 || `I don't believe you!`,
            ],
            animal: [val => (val || '').length > 0 || 'This field is required'],
            name: [val => (val || '').length > 0 || 'This field is required'],
            },
            animals: ['Dog', 'Cat', 'Rabbit', 'Turtle', 'Snake'],
            conditions: false,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
            snackbar: false,
            terms: false,
            defaultForm,
            }
    },
 
    methods:{
        ToggleToSignIn(){
            this.$emit('Toggle',0)
        },

    }

}
</script>
<style scoped>
    
</style>