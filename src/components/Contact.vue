<template>
    <div
    class="transparent ma-0 pa-0 ltr w100 ">
                <div class="d-flex justify-center"
                >
                <v-avatar
                size="250">
                    <v-img
                    class="float-illus"
                    src="../assets/contact.png">

                    </v-img>
                </v-avatar>
                </div>
                <v-card
                tile
                flat
                class="mx-5"
                >

                <v-list-item class="back">

                <v-list-item-content >
                <!-- <v-list-item-title class="display-1 text-center pt-5">Contact</v-list-item-title> -->
                <v-list-item-subtitle
                class="pb-12  indigo--text">

                    <div 
                    v-for="i in 2" :key="i"
                    class="text-center">
                       <v-icon size="50 " color="green accent-3" class="mb-4 mr-2">mdi-phone</v-icon>
                       <span class="headline font-weight-light">+98 937 1710 729</span>
                    </div>

                            <!-- <div
                            class="d-flex justify-center mx-12">
                            <v-divider class="my-5 mx-12" ></v-divider>
                            </div> -->

                    <div 
                    class="text-center py-5">
                       <v-icon size="50 " color="pink" class=" mr-2">mdi-instagram</v-icon>
                       <span class="headline font-weight-light"> <span class="font-weight-bold">@</span> Noor_Arvand</span>
                    </div>

                            <!-- <div
                            class="d-flex justify-center mx-12">
                            <v-divider class="my-5 mx-12" ></v-divider>
                            </div> -->

                    <div 
                    class="text-center pb-5">
                       <v-icon size="50 " color="indigo" class=" mr-2">mdi-telegram</v-icon>
                       <span class="headline font-weight-light"> <span class="font-weight-bold">@</span> Noor_Arvand</span>
                    </div>

                            <!-- <div
                            class="d-flex justify-center mx-12">
                            <v-divider class="my-5 mx-12" ></v-divider>
                            </div> -->

                    <div 
                    class="text-center pb-5">
                       <v-icon size="50 " color="deep-orange accent-3" class="mb-2 mr-2">mdi-gmail</v-icon>
                       <span class="headline font-weight-light">NoorArvand <span class="font-weight-bold">@</span> gmail.com</span>
                    </div>
                </v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>


                </v-card>

    </div>

</template>

<script>

export default {
    data :  () => ({    

    }),

    methods:{
        //
    },
}
</script>