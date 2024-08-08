<template>
  <div class="buttonsBar__wrapper">
    <div class="buttonsBar__ranking q-mb-sm">
      <div class="row">
        <div class="col-12">
          <div class="badge q-mr-md q-pa-xs">
            <p class="flex q-ma-none items-center justify-center full-width">
              <span class="badge__box q-mr-xs"> Top <strong>10</strong> </span>
              <span class="text">#1 in Brazil</span> Today
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="buttonsBar__actions">
      <div class="row">
        <div class="col-3">
          <ButtonIcon label="My List" icon="add" />
        </div>
        <div class="col-6">
          <ButtonComponent label="Play" icon="play_arrow" />
        </div>
        <div class="col-3">
          <ButtonIcon label="Info" icon="info" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
//COMPONENTS
import { ButtonIcon, ButtonComponent } from '@/components';
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_global.scss';
.buttonsBar {
  &__wrapper {
    z-index: 1;
    position: relative;
    top: 35px;
  }

  &__ranking {
    p {
      @include font-format(
        $size: 1rem,
        $family: 'Netflix Sans Bold',
        $line-height: 0.5rem
      );

      .text {
        display: block;
        text-align: center;
        min-width: 100px;
      }
    }
    .badge {
      &__box {
        border: 2px solid $color-text;
        max-width: 22px;
        max-height: 22px;
        text-align: center;
        @include font-format(
          $size: 0.4rem,
          $family: 'Netflix Sans Bold',
          $transform: uppercase,
          $line-height: 0.5rem
        );
      }
    }
  }
}
</style>
