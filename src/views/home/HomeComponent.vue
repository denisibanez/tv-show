<template>
  <div
    class="home"
    :style="{
      backgroundImage: `url('https://wallpapers.com/images/featured/powerpuff-girls-plxo676xc77durlk.jpg`,
    }"
  >
    <div class="home__fade--top" />
    
    <div class="home__wrapper">
      <div class="row desktop-hide">
        <div class="col">
          <ButtonsBar />
        </div>
      </div>

      <div class="row mobile-hide">
        <div class="home__descriptionBanner col">
          <DescriptionBanner />
        </div>
      </div>

      <div class="home__swiper">
        <div class="row">
          <div class="col">
            <p class="q-ma-none">
              Episodes
            </p>
          </div>
        </div>
        <SliderComponent />
      </div>
    </div>

    <div class="home__fade--bottom" />
  </div>
</template>

<script lang="ts" setup>
import { ButtonsBar, DescriptionBanner, SliderComponent } from '@/components';
//Methods
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_global.scss';
.home {
  width: 100%;
  min-height: 100vh;
  align-items: center;
  color: $color-text;
  display: flex;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;

  &__wrapper {
    width: 100%;
    padding: 3rem;
    position: fixed;
    bottom: -30px;

    @media (max-width: 768px) {
      padding: 1rem;
      position: relative;
      top: 10rem;
    }
  }

  &__descriptionBanner {
    margin-bottom: 5.5rem;
  }

  &__swiper {

    p {
      @include font-format($size: 1.3rem, $family: 'Netflix Sans Bold');
      top: 25px;

      @media(max-width: 768px) {
        top: 50px;
        z-index: 1;
      }
      position: relative;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }
  }

  &__fade {
    &--top,
    &--bottom {
      position: absolute;
      width: 100%;
      height: 30%;
      pointer-events: none;
    }
    &--top {
      top: 0;
      background-image: linear-gradient(
        0deg,
        transparent,
        rgba(37, 37, 37, 0.3),
        $color-background
      );
    }
    &--bottom {
      bottom: 0;
      @media(max-width: 768px) {
        height: 70%;
        background-image: linear-gradient(
          180deg,
          transparent,
          rgba(12, 12, 12, 0.7),
          $color-background
        );
        z-index: 0;
        bottom: 48px;
      }
      background-image: linear-gradient(
        180deg,
        transparent,
        rgba(37, 37, 37, 0.3),
        $color-background
      );
    }
  }
}
</style>
