<template>
  <div
    :class="['banner', { isDetail: isDetail }]"
    :style="{
      backgroundImage: `url(${background})`,
    }"
  >
    <div class="fade--top" />

    <div class="banner__wrapper">
      <slot name="body" />
    </div>

    <div class="fade--bottom" />
  </div>
</template>

<script lang="ts" setup>
// TYPES
import type { BannerWrapperProps } from './BannerWrapper.d';

/* eslint-disable-next-line */
const props = withDefaults(defineProps<BannerWrapperProps>(), {
  background:
    'https://wallpapers.com/images/featured/powerpuff-girls-plxo676xc77durlk.jpg',
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_global.scss';
.banner {
  width: 100%;
  min-height: 100vh;
  align-items: center;
  color: $color-text;
  display: flex;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;

  &.isDetail {
    background-position: center center;
    min-height: 40vh;

    .fade {
      &--bottom {
        bottom: 60vh;
        background-image: linear-gradient(
          180deg,
          transparent,
          rgba(37, 37, 37, 0.3),
          $color-background
        );

        @media (max-width: 768px) {
          bottom: 20vh;
          height: 85%;
          background-image: linear-gradient(
            180deg,
            transparent,
            rgba(37, 37, 37, 1),
            $color-background
          );
        }
      }
    }
  }

  &__wrapper {
    width: 100%;
    padding: 3rem;
    position: fixed;
    bottom: -30px;
    z-index: 2;

    @media (max-width: 768px) {
      padding: 1rem;
      bottom: 35px;
    }
  }
}

.fade {
  &--top,
  &--bottom {
    position: absolute;
    width: 100%;
    height: 30%;
    pointer-events: none;
  }
  &--top {
    top: 0;
    z-index: 1;
    background-image: linear-gradient(
      0deg,
      transparent,
      rgba(37, 37, 37, 0.3),
      $color-background
    );
  }
  &--bottom {
    bottom: 0;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(37, 37, 37, 0.3),
      $color-background
    );

    @media (max-width: 768px) {
      height: 70%;
      z-index: 0;
      bottom: 48px;
      background-image: linear-gradient(
        180deg,
        transparent,
        rgba(12, 12, 12, 0.7),
        $color-background
      );
    }
  }
}
</style>
