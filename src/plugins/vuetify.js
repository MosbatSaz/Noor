import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader


Vue.use(Vuetify);

import fa from 'vuetify/es5/locale/fa'


export default new Vuetify({
    lang:{
      locales:{fa},
      current:'fa'
    },
    icons: {
        iconfont: 'mdi',
      },
      theme: {
        themes: {
          light: {
           back: '#f2f1f0'
          },
          dark: {
            back: '#f2f1f0'
          },
        },
      },
});


