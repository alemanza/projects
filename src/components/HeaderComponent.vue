<template>
  <header class="header">
    <router-link class="header-link" :to="{ name: 'home'}"><ion-icon class="header-arrow" name="ios-arrow-back"></ion-icon>  Home</router-link>
    <router-link class="header-link" :to="{ name: 'vslider'}">Vslider  <ion-icon class="header-arrow" name="ios-arrow-forward"></ion-icon></router-link>
  </header>
</template>

<script>

export default {
  name: 'HeaderComponent'
}

</script>

<style lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
  }
  .header-link {
    text-decoration: none;
    font-size: 12px;
    &:hover{
      color: #222;
    }
    &:active, &:visited {
      color: #56606d;
    }
  }
  .header-arrow {
    vertical-align: middle;
  }
</style>
