<template>
  <header class="row">
    <div class="col" id="user-info">
      <div class="d-flex flex-row justify-content-end">
        <div class="p-2"><a id="username" href="home.html">{{this.$store.state.user}}</a></div>
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

  a{
    text-decoration: none;
    color: black;
  }
  img{
      height: 10%;
  }
</style>