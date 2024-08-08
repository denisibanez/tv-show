<template>
  <div class="Header">
    <header class="Header flex justify-between items-center">
      <div class="Header__left--side flex items-center">
        <router-link :to="'/'">
          <p class="Header__logo q-ma-none q-mr-xl">
            Vueflix
          </p>
        </router-link>

        <nav class="Header__nav">
          <ul class="Header__nav--list flex q-pa-none">
            <li
              v-for="(navItem, index) in navListFormated"
              :key="index"
              :class="[
                'Header__nav--item flex',
                { 'q-mr-md': index !== navList.length - 1 },
              ]"
            >
              <router-link
                class="Header__nav--link"
                :to="navItem.link"
              >
                {{ navItem.title }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="Header__right--side flex q-px-xl q-pb-sm mobile-hide">
        <div class="Header__search q-px-md cursor-pointer">
          <span class="material-symbols-outlined"> search </span>
        </div>

        <div class="Header__profile q-pa-xs cursor-pointer">
          <img
            src="@/assets/images/avatar.jpg"
            alt="avatar"
          >
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts" setup>
// VUE
import { ref, Ref, onUnmounted, onMounted } from 'vue';

// TYPES
import type { ListNav } from './HeaderComponent';

// VARIABLES
const navList: Ref<ListNav[]> = ref([
  { title: 'Home', link: '/' },
  { title: 'TV Shows', link: '/' },
  { title: 'Movies', link: '/' },
  { title: 'New & Popular', link: '/' },
  { title: 'My List', link: '/' },
]);

const navListFormated: Ref<ListNav[]> = ref([]);

// LIFE CYCLE
onMounted(() => {
  onResize();
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});

// METHODS
function onResize() {
  if (window.innerWidth <= 991) {
    navListFormated.value = navList.value.slice(0, 2);
  } else {
    navListFormated.value = navList.value;
  }
}
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
    cursor: pointer;
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
        $size: 0.9rem,
        $family: 'Netflix Sans Regular'
      );
    }
  }

  &__profile {
    img {
      max-width: 25px;
      border-radius: 2px;
    }
  }
}
</style>
