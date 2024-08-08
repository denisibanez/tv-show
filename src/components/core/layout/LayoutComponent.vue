<template>
  <div class="layout__wrapper">
    <HeaderComponent />
    <router-view />
    <div v-if="false" class="flex items-center justify-center full-page">
      <LoaderComponent />
    </div>

    <div class="mobileNav__wrapper desktop-hide">
      <MobileNav />
    </div>
  </div>
</template>

<script lang="ts" setup>
// COMPONENTS
import { HeaderComponent, LoaderComponent, MobileNav } from '@/components';
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_global.scss';

.full-page {
  min-height: 100vh;
}
</style>
