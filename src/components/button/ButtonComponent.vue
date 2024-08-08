<template>
  <button :class="[buttonType]" type="button">
    <span v-if="icon && !loader" class="material-symbols-outlined q-mr-sm">
      {{ icon }}
    </span>
    <span v-if="label && !loader">{{ label }}</span>
    <LoaderComponent v-if="loader" size="small" />
  </button>
</template>

<script lang="ts" setup>
import { LoaderComponent } from '@/components';

import type { ButtonComponentProps } from './ButtonComponent.d';

/* eslint-disable-next-line */
const props = withDefaults(defineProps<ButtonComponentProps>(), {
  buttonType: 'primary',
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_global.scss';

button {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 24px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  min-width: 130px;

  @include font-format(
    $size: 1rem,
    $family: 'Netflix Sans bold',
    $line-height: 0.8rem
  );

  span {
    font-weight: 800;
  }

  &.primary {
    background: $color-text;
    color: $color-background;
  }
  &.primary:hover {
    background: #bfbfbf;
  }

  &.secondary {
    background: #4d4d4d;
    color: $color-text;
  }
  &.secondary:hover {
    background: #2c2c2c;
    color: $color-text;
  }
}
</style>
