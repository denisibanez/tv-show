<template>
  <div class="slider__wrapper">
    <div class="row">
      <div class="col">
        <swiper
          :slides-per-view="2"
          :slides-per-group="2"
          :space-between="10"
          :looping="true"
          :breakpoints="breakpoints"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide
            v-for="(episode, key) in episodes"
            :key="key"
            @click="handleClick(episode)"
          >
            <img
              :src="
                episode?.image
                  ? episode.image.original
                  : 'https://m.media-amazon.com/images/M/MV5BZjI4NjdjM2QtMGUzNy00YmY2LWFhZDUtMWRmMWUxZWJmZDFlXkEyXkFqcGdeQXVyMTM0NTUzNDIy._V1_.jpg'
              "
              alt=""
            >

            <div class="slider__epName q-px-md q-py-sm q-ma-sm mobile-hide">
              <p class="q-ma-none text-left">
                {{ episode.name }}
              </p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// VUE
import { ref } from 'vue';

// COMPONENTS
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

// ROUTER
import { useRouter } from 'vue-router';

// TYPES
import type { SliderComponentProps } from './SliderComponent.d';
import type { EpisodesInterfaceResponse } from '@/models/Episodes';

/* eslint-disable-next-line */
const props = withDefaults(defineProps<SliderComponentProps>(), {});

// VARIABLES
const router = useRouter();

const breakpoints = ref({
  // when window width is >= 900px
  465: {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 5,
    centeredSlides: false,
  },

  // when window width is >= 900px
  1024: {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 5,
    centeredSlides: false,
  },

  // when window width is >= 1480px
  1280: {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 5,
    centeredSlides: false,
  },

  // when window width is >= 1800px
  1600: {
    slidesPerView: 6,
    slidesPerGroup: 6,
    spaceBetween: 5,
    centeredSlides: false,
  },

  1920: {
    slidesPerView: 8,
    slidesPerGroup: 8,
    spaceBetween: 5,
    centeredSlides: false,
  },
});

const modules = ref([Navigation]);

// METHODS
function handleClick(episode: EpisodesInterfaceResponse) {
  const { id, season, number } = episode;
  router.push(
    `detail/${id.toString()}/${season.toString()}/${number.toString()}`
  );
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_global.scss';

.slider {
  &__epName {
    position: absolute;
    bottom: 40px;

    p {
      text-overflow: ellipsis;
      max-width: 180px;
      overflow: hidden;
      white-space: nowrap;

      @include font-format($size: 1rem, $family: 'Netflix Sans Regular');
    }
  }
}
.swiper-slide {
  text-align: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 300ms ease-in-out;
  border-radius: 5px;
  min-height: 240px;

  @media (max-width: 599px) {
    min-height: 350px;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    max-height: 160px;
    object-fit: cover;
    border-radius: 5px;
    max-width: 18rem;
    cursor: grab;

    &:active {
      cursor: grabbing;
    }

    @media (max-width: 599px) {
      min-height: 230px;
    }
  }

  &:hover {
    @media (min-width: 768px) {
      transform: scale(1.3);
      transition: all 300ms ease-in-out;
      transition-delay: 300ms;
      z-index: 1;

      img {
        transition-delay: 300ms;
        box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.5);
      }
    }
  }
}

@media screen and (max-width: 599px) {
  .swiper-slide img {
    max-width: 14rem;
  }
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}

@media screen and (max-width: 400px) {
  .swiper-slide img {
    max-width: 10.5rem;
    border-radius: 2px;
  }
}
</style>
