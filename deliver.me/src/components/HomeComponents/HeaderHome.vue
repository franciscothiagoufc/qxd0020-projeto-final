<template>
  <header class="row">
    <div class="col" id="user-info">
      <div class="d-flex flex-row justify-content-end">
        <div class="p-2">
          <router-link v-if="this.$store.state.deliver.id > 0" to="/deliver">{{this.$store.state.user.name}}</router-link>
          <span v-else>{{this.$store.state.user.name}}</span>
        </div>
        <div class="p-2">
          <img alt="profile-pic" class="d-none d-md-inline" id="profile-pic" src="">
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default{
    
  }

</script>

<style scoped>

  /*a{
    text-decoration: none;
    color: black;
  }*/
  img{
      height: 10%;
  }
</style>