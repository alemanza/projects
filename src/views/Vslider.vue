<template>
  <div class="vslider-container">
    <HeaderComponent/>

    <div class="vslider">
      <input v-for="(card, i) in cards.length - 1"
        :key="i"
        type="radio"
        name="vslider"
        :id="`pos${i+1}`"
        :class="`cssl-input -step${i+1}`"
        :checked="i === 0"
      />

      <div class="cssl-nav">
        <label v-for="(card, i) in cards.length - 1"
          :key="i"
          :for="`pos${i+1}`"
          class="cssl-arrow"
        />
      </div>

      <div class="cssl-container">
        <div class="cssl-translation">
          <div class="cssl-card" v-for="(card, i) in cards" :key="i" :style="{'background-image': 'url(' + require(`../assets/images/vslider/barcelona.jpg`) + ')'}">
            <div class="cssl-content">
              <div class="cssl-text-content">
                <h3 class="cssl-title">{{card.name}}</h3>
                <p class="cssl-description">{{card.country}}</p>
              </div>
              <div class="cssl-subcontent">
                <span>Lorem ipsum, dolor sit amet consectetur adipisicin</span>
              </div>
            </div>
          </div>      
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Items from '@/data'
import HeaderComponent from '@/components/HeaderComponent'

export default {
  name: 'vslider',
  components: {
    HeaderComponent
  },
  data(){
    return {
      cards: Items.vslider
    }
  },
  created() {
    console.log(Items.vslider.length);
    
  }
}
</script>

<style lang="scss">

.vslider-container {
  height: 100vh;
  box-sizing: border-box;
  background-color: #000;
  h1 {
    padding: 120px 0 30px;
  }
}
  
.vslider {
  margin: auto;
  position: relative;
  .cssl-container {
    position: relative;
    margin: auto;
    height: 100vh;
    overflow: hidden;
    // width: $containerWidth;
    box-sizing: border-box;
    &:before, &:after{
      z-index: 1;
      content: '';
      position: absolute;
      height: 100%;
      top: 0;
      width: 20px;
    }
    &:before{
      left: 0;
      // background-image: linear-gradient(to left, transparent, #FFEDD7)
    }
    &:after{
      right: 0;
      // background-image: linear-gradient(to right, transparent, #FFEDD7)
    }
  }
  .cssl-translation {
    transition: transform .7s ease-out;
  }

  .cssl-arrow {
    transition: color .5s;
    top: calc(50% - 25px - 5px);
    height: 40px;    
    width: 40px;
    padding: 10px;
    position: absolute;
    display: none;
    z-index: 1;
    align-items: center;
    justify-content: center;
    color: #726049;
    opacity: .6;
    font-size: 40px;
    font-family: 'cssl-icons';
    cursor: pointer;
    &:before {
      content: "\e902";
    }
    &:hover {
      transition-duration: 0s;
      color: #4d4131;
    }
  }

  .cssl-card {
    background-size: cover;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cssl-img {
    width: 100%;
    display: block;
  }
  .cssl-content {
    display: flex;
    justify-content: space-between;
    height: 100px;
    background: gray;
    box-sizing: border-box;
    width: 100%;
  }
  .cssl-title {
    font-size: 124px;
    color: #FFF;
    letter-spacing: -.03em;
    padding-bottom: 5px;
  }
  .cssl-description {
    font-size: 13px;
    color: #888;
  }
  .cssl-subcontent {
    display: flex;
    color: #FF8626;
  }
  .cssl-rating {
    font-size: 13px;
    padding-right: 5px;
    font-weight: 700;
  }
  .cssl-icon {
    font-size: 10px;
    margin-left: 3px;
  }
  .cssl-stars {
    display: flex;
    align-items: center;
  }
  .cssl-input {
    display: none;
    @for $i from 1 through 10 {
      @if $i == 1 {
        &.-step#{$i}:checked ~ {
          .cssl-container {
            transform: translateY(0);
          }
          .cssl-nav .cssl-arrow {
            &:last-of-type {
              display: flex;
              left: 0;
              transform: rotateZ(180deg);
            }
            &:nth-child(2) {
              display: flex;
              right: 0;
            }
          }
        }
      } @else {
        &.-step#{$i}:checked ~ {
          .cssl-container .cssl-translation{
            transform: translateY(calc( -#{ ($i - 1) * 100vh }) );
          }
          .cssl-nav .cssl-arrow {
            &:nth-child(#{$i - 1}) {
              display: flex;
              left: 0;
              transform: rotateZ(180deg);
            }
            &:nth-child(#{$i + 1}) {
              display: flex;
              right: 0;
            }
          }
        }
      }
      &.cssl-input:last-of-type:checked ~ {
        .cssl-nav .cssl-arrow {
          &:first-of-type {
            display: flex;
            right: 0;
          }
        }
      }
    }
  }
}
</style>