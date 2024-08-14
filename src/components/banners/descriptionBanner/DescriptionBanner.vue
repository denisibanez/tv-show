<template>
  <div :class="['descriptionBanner__wrapper']">
    <p class="subtitle flex"><span>V</span> Series</p>

    <div class="descriptionBanner__brand">
      <img src="@/assets/images/brand.png" alt="brand" />
    </div>

    <div class="descriptionBanner__ranking flex items-center">
      <div class="badge q-mr-md q-pa-xs">
        <p class="flex q-ma-none column items-center justify-center">
          Top <strong>10</strong>
        </p>
      </div>
      <div class="text">
        <p class="q-ma-none">
          <span v-if="avarage">#{{ returnAvarage(avarage) }}</span> in
          <span>Brazil</span> Today
        </p>
      </div>
    </div>

    <div class="descriptionBanner__content">
      <h1 class="descriptionBanner__text" v-html="description" />
    </div>

    <div class="descriptionBanner__actions">
      <div class="row">
        <div class="col-md-2 col-lg-3 q-mr-lg">
          <ButtonComponent
            label="Play"
            icon="play_arrow"
            :loader="loader"
            @click.capture="loader = true"
          />
        </div>
        <div class="col-md-3 col-lg-4">
          <ButtonComponent label="More Info" class="secondary" icon="info" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// VUE
import { Ref, ref } from 'vue';

// COMPONENTS
import { ButtonComponent } from '@/components';

// TYPES
import type { DescriptionBannerProps } from './DescriptionBanner.d';

/* eslint-disable-next-line */
const props = withDefaults(defineProps<DescriptionBannerProps>(), {});

// VARIABLES
const loader: Ref<boolean> = ref(false);

//METHODS
function returnAvarage(avarageNumber: number) {
  if (avarageNumber) {
    const array = JSON.stringify(avarageNumber).split('.');
    return array[0];
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_global.scss';
.descriptionBanner {
  &__wrapper {
    max-width: 700px;

    .subtitle {
      @include font-format(
        $size: 1rem,
        $family: 'Netflix Sans Regular',
        $transform: uppercase,
        $line-height: 0.8rem,
        $spacing: 0.4rem
      );

      span {
        @include font-format(
          $size: 1.5rem,
          $color: $red-light,
          $family: 'Netflix Sans Black',
          $transform: uppercase,
          $line-height: 0.8rem,
          $spacing: 0.4rem
        );
      }
    }
  }
  &__brand {
    img {
      width: 100%;
      max-width: 400px;
      filter: brightness(0) invert(1);
      @media (max-width: 768px) {
        max-width: 250px;
      }
    }
  }

  &__text {
    @include font-format($size: 1.3rem, $family: 'Netflix Sans Light');
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  }

  &__ranking {
    .badge {
      background-color: $red-light;
      color: $color-text;
      max-width: 40px;
      max-height: 40px;
      border-radius: 5px;
      @include font-format(
        $size: 0.7rem,
        $family: 'Netflix Sans bold',
        $transform: uppercase,
        $line-height: 0.8rem,
        $spacing: 0rem
      );

      strong {
        @include font-format(
          $size: 1.1rem,
          $family: 'Netflix Sans Black',
          $transform: uppercase,
          $line-height: 0.8rem
        );
      }
    }

    .text {
      @include font-format(
        $size: 1.5rem,
        $family: 'Netflix Sans Black',
        $line-height: 0.8rem
      );
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

      span {
        text-transform: uppercase;
      }
    }
  }
}
</style>
