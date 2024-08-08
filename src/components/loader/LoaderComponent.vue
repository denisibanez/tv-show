<template>
  <div :class="['loader', size]" />
</template>

<script lang="ts" setup>
import type { LoaderComponentProps } from './LoaderComponent.d';

/* eslint-disable-next-line */
const props = withDefaults(defineProps<LoaderComponentProps>(), {
});
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_global.scss';
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid $red-light;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  animation: pulse 1s linear infinite;

  &.small {
    width: 24px;
    height: 24px;
    border-width: 3px;

    &:after{
      width: 24px;
      height: 24px;
      border-width: 3px;
    }
  }
  &:after {
    content: '';
    position: absolute;
    width: 48px;
    height: 48px;
    border: 5px solid $red-light;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    animation: scaleUp 1s linear infinite;
  }
}

@keyframes scaleUp {
  0% {
    transform: translate(-50%, -50%) scale(0);
  }
  60%,
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes pulse {
  0%,
  60%,
  100% {
    transform: scale(1);
  }
  80% {
    transform: scale(1.2);
  }
}
</style>
