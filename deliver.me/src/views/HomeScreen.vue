<template> 
  <body class="container">
    <HeaderHome/>
    <MainHome/>
  </body>
</template>


<script>
import HeaderHome from'@/components/HomeComponents/HeaderHome.vue'
import MainHome from '@/components/HomeComponents/MainHome.vue';

  export default{
    components:{
    HeaderHome,
    MainHome
}
  }
</script>



<style>
</style>