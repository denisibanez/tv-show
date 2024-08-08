<template>
  <div class="layout__wrapper">
    <HeaderComponent />
    <router-view />
    <div
      v-if="false"
      class="flex items-center justify-center full-page"
    >
      <LoaderComponent />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderComponent from '@/components/header/HeaderComponent.vue';
import LoaderComponent from '@/components/loader/LoaderComponent.vue';
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_global.scss';

.full-page {
  min-height: 100vh;
}
</style>
