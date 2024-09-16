<template>
    <v-card
    flat
    class=" rtl ma-0 back pa-0 w100 d-flex justify-center align-center">
    <v-card
    max-width="500"
    flat
    class=" w80 back h100">
     <div
        class="float-illus d-flex justify-center ma-0 my-6 pa-0">
            <v-avatar
            tile
            size="200">
                <v-img
                src="../assets/chat.png">

                </v-img>
            </v-avatar>
        </div>


        <v-textarea
        v-model="comment.comment"
        flat
        outlined
        color="back"
        class="mx-6"
        solo
        >
            <template v-slot:label>
                <div class="rtl">
                بیا صحبت کنیم  <span class="pink--text font-weight-black"> : ) </span>
                </div>
            </template>
        </v-textarea>

        
        <div
        class="d-flex justify-center ma-0 mt-0 pa-0">
            <v-text-field
            v-model="comment.firstName"
            flat
            outlined
            class="darken-3  mx-6 white--text  text-capitalize"
            max-width="300"
            color="deep-purple darken-3"
            solo
            placeholder="نام"
            >
            </v-text-field>
        </div> 

        <div
        class="d-flex justify-center ma-0 mt-0 pa-0">
            <v-text-field
            v-model="comment.lastName"
            flat
            outlined
            class="darken-3  mx-6 white--text  text-capitalize"
            max-width="300"
            color="deep-purple darken-3"
            solo
            placeholder="نام خانوادگی"
            >
            </v-text-field>
        </div> 

        <div
        class="d-flex justify-center ma-0 mt-0 pa-0">
            <v-text-field
            v-model="comment.phoneNumber"
            flat
            outlined
            append-icon="mdi-phone"
            class="darken-3  mx-6 white--text  text-capitalize"
            max-width="300"
            color="deep-purple darken-3"
            solo
            type="number"
            placeholder="شماره همراه"
            >
            </v-text-field>
        </div> 

        <div
        class="d-flex justify-center ma-0 mt-0 pa-0">
            <v-btn
            class="op95 deep-purple w80 accent-3 elevation-16 white--text headline text-capitalize"
            max-width="300"
            @click="submit()"
            height="50">
            Submit
            </v-btn>
        </div> 
        </v-card>
    </v-card>
</template>

<script>
import axios from 'axios';
export default {
    data: () => ({
        bio: '',
        comment:{

            firstName:'',
            lastName:'',
            phoneNumber:null,
            comment:''

        },
    }),

    methods:{
        submit(){
            axios
                .post('', this.comment)
                .then(response => {
                    response;
                    this.comment.firstName = ''
                    this.comment.lastName  = ''
                    this.comment.phoneNumber = ''
                    this.comment.comment = ''
                })

        }
    }
    
}
</script>