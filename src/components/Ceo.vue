<template>
    <div
    class="transparent ma-0 pa-0 py-12 w100 ">
                <div class="d-flex justify-center"
                >
                <v-avatar
                size="250">
                    <v-img
                    class="float-illus"
                    src="../assets/ceo.png">

                    </v-img>
                </v-avatar>
                </div>
                <v-card
                flat
                class="transparent mx-5 mt-5"
                >

                    <v-card
                    flat
                    class="transparent op95 h100 w100 d-flex justify-center align-start">
                        <v-card
                        width="500"
                        max-width="800"
                        shaped
                        class="w100 rtl  accent-2 lighten-1 mx-5 elevation-24"
                        
                        >
                        <v-list-item>
                        <v-avatar size="80" class="ml-3 my-3">
                        <v-img src="../assets/noor-colorful-min.png"></v-img>
                        </v-avatar>
                        <v-list-item-content>
                        <v-list-item-title class="headline">خانم میرحسینی</v-list-item-title>
                        <v-list-item-subtitle>مدیر نور اروند</v-list-item-subtitle>
                        </v-list-item-content>
                        </v-list-item>

                        <v-tabs
                        v-model="toggle"
                        vertical
                        flat
                        dark
                        color="white"
                        background-color=" teal  "
                        >
                            <v-tabs-slider></v-tabs-slider>

                            <v-tab
                            width="100"
                            v-for="(tab, index) in tabs"
                            :key="index"
                            >
                            {{ tab.title }}
                            <v-icon v-if="icons">{{tab.icon}}</v-icon>
                            </v-tab>

                            <v-tab-item
                            v-for="(tab, index) in tabs"
                            :key="index"
                            >
                            <v-card
                            flat
                            tile
                            class="back"
                            >
                            <v-card-text
                            class="">
                                
                                <span class="body-1 txt black--text" v-if="index == 0">
                                    Amet exercitation magna enim laborum qui in reprehenderit cupidatat elit.
                                    Amet exercitation magna enim laborum qui in reprehenderit cupidatat elit.
                                     Amet exercitation magna enim laborum qui in reprehenderit cupidatat elit.
                                    Amet exercitation magna enim laborum qui in reprehenderit cupidatat elit.
                                     Amet exercitation magna enim laborum qui in reprehenderit cupidatat elit.
                                    Amet exercitation magna enim laborum qui in reprehenderit cupidatat elit.
                                </span>
                                <span class="ltr" v-else>
                                    <div class="my-3" v-for="(icon, index) in icons" :key="index">
                                        <v-icon size="30" class="mr-2" :color="icon.color">{{icon.icon}}</v-icon>
                                        <span class="body-1 black--text">{{icon.text}}</span> 
                                    </div>
                                </span>


                            </v-card-text>
                            </v-card>
                            </v-tab-item>
                            </v-tabs>

                        </v-card>
                    </v-card>


                   
                </v-card>

    </div>

</template>

<script>
export default {
    data :  () => ({
        toggle:null,
        viewport:'',
        icons:[
        {icon:'mdi-phone',color:'green accnet-3',text:'+98 900 000 0000'},
        {icon:'mdi-gmail',color:'deep-orange accent-3',text:'G.me@gmail.com'},
        {icon:'mdi-instagram',color:'pink',text:'@insta_me'},
        {icon:'mdi-telegram',color:'indigo',text:'@ t.me'},
        ],
        tabs:[
            {title:'اهداف',icon:'mdi-talk',color:'purple'},
            {title:' تماس',icon:'mdi-info',color:'orange lighten-3'},
        ]
    }),

    methods:{
        //
    },
    


}
</script>






                    