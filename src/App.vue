<template>
  <v-app dark>

    <navi></navi>

    <v-content class="pa-0">
      
            <router-view></router-view>

    </v-content>
                
  </v-app>
</template>

<script>
import Navi from './components/Navigation-drawer'
export default {
  name: 'App',
  components:{
    'navi':Navi
  },
  data: () => ({

  }),
};

</script>
<style>


/* @font-face {
  font-family: 'BYekan';
  src: url('./css/Font/BYekan.svg#BYekan') format('svg'),
       url('./css/Font/BYekan.ttf') format('truetype'),
       url('./css/Font/BYekan.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Yekan';
  src: url('./css/Font/Yekan.eot');
  src: url('./css/Font/Yekan.eot?#iefix') format('embedded-opentype'),
       url('./css/Font/Yekan.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
} */


/* use sass in this section to make everything smarter */
.rtl{
  direction: rtl;
}
.ltr{
  direction: ltr;
}
/* opacity */

/* @import url("./css/Font/font.css"); */
/* font */
.v-application {
   /* font-family: 'Lexend Deca', sans-serif; */
    /* font-family: 'Yekan', sans-serif; */
 }

  body {
   /* font-family: 'Yekan'; */
 }


a{
  text-decoration: transparent;
}


.op100{opacity: 1 !important}
.op95{opacity: 0.95}
.op90{opacity: 0.90}


/* height  */
.h100v{ height: 100vh}
.h100{height: 100%}
.h90{height: 90%}
.h80{height: 80%}


/* width */
.w100{width: 100%}
.w90{width: 90%}
.w80{width: 80%}



::-webkit-scrollbar{
  width: 15px;
}

::-webkit-scrollbar-track{
  background: #f2f1f0;
  border-radius: 15px;
}

::-webkit-scrollbar-thumb{
  background: rgb(16, 7, 53);
  border-radius: 15px;
}

::-webkit-scrollbar-thumb:hover{
  background: rgb(255, 1, 119);
}



/* animation */


.float-illus{ animation: float-illus infinite 5s ease-in-out }
@keyframes float-illus {
    50% { transform: translateY(-5px) }
}

.float-illus-reverse{ animation: float-reverse infinite 5s ease-in-out }
@keyframes float-reverse {
    50% { transform: translateY(+5px) }
}


</style>