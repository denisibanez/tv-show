<template>
  <div class="buttonIcon__wrapper text-center">
    <span class="material-symbols-outlined buttonIcon__icon">
      {{ icon }}
    </span>
    <p class="q-ma-none buttonIcon__label">
      {{ label }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { ButtonIcontProps } from './ButtonIcon.d';

/* eslint-disable-next-line */
const props = withDefaults(defineProps<ButtonIcontProps>(), {
  icon: 'add',
  text: 'Label',
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_global.scss';
.buttonIcon {
  &__wrapper {
    cursor: pointer;
  }
  &__icon {
    font-size: 2.3rem;
  }

  &__label {
    @include font-format(
      $size: 0.9rem,
      $family: 'Netflix Sans Regular',
      $line-height: 1rem
    );
  }
}
</style>
