<template>
  <BannerWrapper :background="background">
    <template
      #body
    >
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
    </template>
  </BannerWrapper>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { ButtonsBar, DescriptionBanner, SliderComponent, BannerWrapper } from '@/components';

const background: Ref<string> = ref('https://wallpapers.com/images/featured/powerpuff-girls-plxo676xc77durlk.jpg');
//Methods
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_global.scss';
.home {

  &__swiper {
    p {
      @include font-format($size: 1.3rem, $family: 'Netflix Sans Bold');
      top: 25px;
      position: relative;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

      @media (max-width: 768px) {
        top: 50px;
        z-index: 1;
      }
    }
  }
}

</style>
