<template>
  <div class="Header">
    <header class="Header flex justify-between items-center">
      <div class="Header__left--side flex items-center">
        <router-link :to="'/'">
          <p class="Header__logo q-ma-none q-mr-xl">Vueflix</p>
        </router-link>

        <nav class="Header__nav">
          <ul class="Header__nav--list flex q-pa-none">
            <li
              v-for="(navItem, index) in navList"
              :key="index"
              class="Header__nav--item flex q-px-md"
            >
              <router-link class="Header__nav--link" :to="navItem.link">
                {{ navItem.title }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="Header__right--side flex q-px-xl q-pb-sm">
        <div class="Header__search q-px-md cursor-pointer">
          <span class="material-symbols-outlined"> search </span>
        </div>

        <div class="Header__profile q-pa-xs cursor-pointer">
          <span class="material-symbols-outlined"> face </span>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';

import type { ListNav } from './HeaderComponent';

const navList: Ref<ListNav[]> = ref([
  { title: 'Home', link: '/' },
  { title: 'TV Shows', link: '/' },
  { title: 'Movies', link: '/' },
  { title: 'New & Popular', link: '/' },
  { title: 'My List', link: '/' },
]);
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_global.scss';

.Header {
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  padding: 1rem 1.5rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }

  &__logo {
    @include font-format(
      $color: $red-light,
      $size: 1.8rem,
      $transform: uppercase,
      $family: 'Netflix Sans Bold'
    );
  }

  &__nav {
    li {
      @include font-format(
        $color: $color-text,
        $size: 1.1rem,
        $family: 'Netflix Sans Regular'
      );
    }
  }

  &__profile {
    background-color: $red-dark;
    border-radius: 6px;
  }
}
</style>
