<template>
  <div class="mobileNav__wrapper">
    <ul class="flex">
      <li
        v-for="(item, key) in mobileNav"
        :key="key"
        :class="[
          'cursor-pointer flex justify-center items-center column',
          { active: item.active },
        ]"
        @click="handleClick(item)"
      >
        <span v-if="item.notifications" class="badge"
          ><span> {{ item.notifications }}</span></span
        >
        <div class="icon">
          <span class="material-symbols-outlined buttonIcon__icon">
            {{ item.icon }}
          </span>
        </div>

        <div :class="['label', { active: item.active }]">
          <p class="q-ma-none">
            {{ item.label }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
// VUE
import { ref, Ref } from 'vue';

// TYPES
import type { MenuNavInterface } from './MobileNav.d';

// VARIABLES
const mobileNav: Ref<MenuNavInterface[]> = ref([
  { active: true, label: 'Home', notifications: 0, icon: 'house', link: '' },
  {
    active: false,
    label: 'Search',
    notifications: 0,
    icon: 'search',
    link: '',
  },
  {
    active: false,
    label: 'Coming Soon',
    notifications: 7,
    icon: 'video_library',
    link: '',
  },
  {
    active: false,
    label: 'Downloads',
    notifications: 0,
    icon: 'download',
    link: '',
  },
  { active: false, label: 'More', notifications: 0, icon: 'menu', link: '' },
]);

const emit = defineEmits(['update:handleClick']);

// METHODS
const handleClick = (item: MenuNavInterface) => {
  mobileNav.value.forEach((nav) => {
    if (item.label === nav.label) {
      nav.active = true;
    } else {
      nav.active = false;
    }
  });
  emit('update:handleClick', item);
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_global.scss';

.mobileNav {
  &__wrapper {
    background-color: #141414;
    min-height: 48px;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 1;

    ul {
      li {
        width: 20%;
        color: $gray;
        position: relative;
        padding: 10px 0;

        .badge {
          border-radius: 50%;
          width: 15px;
          height: 15px;
          background-color: $red-light;
          text-align: center;
          position: absolute;
          top: 5px;
          right: 23px;
          span {
            @include font-format(
              $size: 0.8rem,
              $family: 'Netflix Sans bold',
              $color: $color-text
            );
            position: relative;
            bottom: 6px;
          }
        }

        .label {
          @include font-format(
            $size: 0.7rem,
            $family: 'Netflix Sans Regular',
            $line-height: 1.5rem,
            $color: $gray
          );
          &.active {
            p {
              color: $color-text;
            }
          }
        }
        &.active {
          .icon {
            color: $color-text;
          }
        }
      }
    }
  }
}
</style>
