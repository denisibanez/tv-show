<template>
  <div class="layout__wrapper">
    <HeaderComponent />
    <router-view />
    <div
      v-if="LOADING_STATE"
      class="flex items-center justify-center full-page"
    >
      <LoaderComponent />
    </div>

    <div class="mobileNav__wrapper desktop-hide">
      <MobileNav />
    </div>
  </div>
</template>

<script lang="ts" setup>
import pinia from '@/main';
// COMPONENTS
import { HeaderComponent, LoaderComponent, MobileNav } from '@/components';

// STORE
import { storeToRefs } from 'pinia';
import { useLoadingStore } from '@/stores/loading/loading.store';

// VARIABLES
const { LOADING_STATE } = storeToRefs(useLoadingStore(pinia));
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_global.scss';

.full-page {
  min-height: 100vh;
}
</style>
