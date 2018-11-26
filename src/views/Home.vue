<template>
  <div class="profile">
    <div class="header-container">
      <h1>FRONTEND DEVELOPER</h1>
      <p>Apasionado por las tecnologías, los detalles y las interacciones de interfaz.</p>
      <figure class="avatar">
        <img src="@/assets/images/profile.jpg" alt="">
      </figure>
    </div>
    <section class="cards-container">
      <router-link :to="{ name: 'hslider'}" tag="div" class="card">
        <figure class="card-figure">
          <img src="@/assets/images/csSlider.jpg" alt="">
          <span class="card-text-container">
            <span class="card-text">Slider de radio buttons con solo CSS, que activa sus posiciones mediante inputs y sus cambios de estados.</span>
            <button class="card-button">RBSlider
              <span class="card-button-icon icon-play"></span>
            </button>
          </span>
        </figure>
      </router-link>
      <router-link  :to="{ name: 'vslider'}" tag="div" class="card">
        <figure class="card-figure">
          <img src="@/assets/images/verticalSlider.jpg" alt="">
          <span class="card-text-container">
            <span class="card-text">Slider vertical con transiciones generadas solo por CSS. Las mismas se ejecutan por cambios de estado en los inputs.</span>
            <button class="card-button">VerticalSlider
              <span class="card-button-icon icon-play"></span>
            </button>
          </span>
        </figure>
      </router-link>
    </section>
    <footer>
      <p>Diseños por <a href="https://dribbble.com/ludmilahermida" target="_blank">Ludmila Hermida <ion-icon name="logo-dribbble" class="footer-icon"></ion-icon></a></p>
    </footer>
    <!-- <HeaderComponent /> -->
  </div>
</template>

<script>
export default {
  name: 'home',
}

</script>

<style lang="scss">
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  .header-container {
    width: 100%;
    text-align: center;
    background-color: #1D1E1F;
    padding: 80px 0 145px;
    position: relative;
  }
  h1 {
    font-family: 'Rajdhani', sans-serif;
    font-size: 36px;
    font-weight: 600;
    color: #F5F5F5;
  }
  p {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 14px;
    color: #AAA;
    line-height: 1.5;
  }
  .avatar {
    position: absolute;
    bottom: -66px;
    left: calc(50% - 66px);
    margin: auto;
    width: 132px;
    height: 132px;
    border-radius: 200px;
    box-shadow: 0 8px 10px rgba(0,0,0,.1);
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .cards-container {
    display: flex;
    justify-content: space-between;
    max-width: 932px;
    margin-top: 200px;
    width: 100%;
  }
  .card-text-container {
    position: relative;
    text-align: center;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 35px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
    line-height: 1.3;
    color: #FFF;
    opacity: 0;
    transition: opacity .3s ease-out;
  }
  .card-text {
    display: block;
    margin-bottom: 20px;
  }
  .card-figure {
    cursor: pointer;
    position: relative;
    background-color: #1D1E1F;
    overflow: hidden;
    width: 366px;
    height: 275px;
    border-radius: 10px;
    box-shadow: 0 8px 20px rgba(0,0,0,.1);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      position: absolute;
      transition: transform .4s ease-out, opacity .4s ease-out;
      width: 100%;
    }
    &:hover {
      img {
        opacity: .05;
        transform: scale(1.2)
      }
      .card-text-container {
        opacity: 1;
      }
    }
  }
  .card-button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    margin: auto;
    border: solid 2px #5DDACE;
    appearance: none;
    border-radius: 30px;
    padding: 0 10px 0 15px;
    font-size: 12px;
    color: #F5F5F5;
    font-weight: bold;
    background-color: transparent;
    outline: none;
    &:hover {
      background-color: #5DDACE;
      color: #1D1E1F;
    }
  }
  .card-button-icon {
    padding-left: 10px;
  }
  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
    font-size: 13px;
    color: #888;
    p, .footer-icon {
      vertical-align: middle;
    }
    a {
      text-decoration: none;
      font-weight: bold;
      &:active, &:visited {
        color: #888;
      }
      &:hover {
        color: #666;
      }
    }
    .footer-icon {
      font-size: 18px;
    }
  }
}
</style>

