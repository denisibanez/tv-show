<template>
  <BannerWrapper
    :background="background"
    :is-detail="true"
  >
    <template #body>
      <div class="detailView">
        <div class="row justify-center">
          <div class="col detailView__title text-center q-pa-md">
            <p class="q-ma-none">
              EP. 1 Power Puff Girls
            </p>
          </div>
        </div>

        <div class="row">
          <div class="detailView__descriptionBanner col">
            <DescriptionBanner />
          </div>
        </div>
      </div>
    </template>
  </BannerWrapper>   
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';
import { BannerWrapper, DescriptionBanner } from '@/components';

const background: Ref<string> = ref('https://wallpapers.com/images/featured/powerpuff-girls-plxo676xc77durlk.jpg');

</script>

<style lang="scss" scoped>
@import '@/assets/scss/_global.scss';
  .detailView {
    .detailView__title {
      position: fixed;
      top:10rem;
      max-width: 600px;
      background-color: rgba(0, 0, 0, 0.5);
      @include font-format(
        $size: 2.5rem,
        $family: 'Netflix Sans bold',
        $line-height: 3rem,
        $transform: uppercase,
      );

      @media (max-width: 768px) {
        background-color: transparent;
      }
    }
    &__descriptionBanner {
      position: fixed;
      bottom: 4rem;

      @media (max-width: 768px) {
        bottom: 6.5rem;
      }
    }
  }
</style>