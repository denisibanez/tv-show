<template>
  <div class="slider__wrapper">
    <div class="row">
      <div class="col">
        <swiper
          :slides-per-view="3"
          :slides-per-group="3"
          :space-between="10"
          :looping="true"
          :breakpoints="breakpoints"
          :modules="modules"
          class="mySwiper"
        >
          <swiper-slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/78/Powerpuff_Girls_Movie_poster.jpg"
              alt=""
            >
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/78/Powerpuff_Girls_Movie_poster.jpg"
              alt=""
            >
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/78/Powerpuff_Girls_Movie_poster.jpg"
              alt=""
            >
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/78/Powerpuff_Girls_Movie_poster.jpg"
              alt=""
            >
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/78/Powerpuff_Girls_Movie_poster.jpg"
              alt=""
            >
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/78/Powerpuff_Girls_Movie_poster.jpg"
              alt=""
            >
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/78/Powerpuff_Girls_Movie_poster.jpg"
              alt=""
            >
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/78/Powerpuff_Girls_Movie_poster.jpg"
              alt=""
            >
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/78/Powerpuff_Girls_Movie_poster.jpg"
              alt=""
            >
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://upload.wikimedia.org/wikipedia/en/7/78/Powerpuff_Girls_Movie_poster.jpg"
              alt=""
            >
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://image.tmdb.org/t/p/w500/ba7hnMx1HAze0QSJSNfsTBycS8U.jpg"
              alt=""
            >
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://image.tmdb.org/t/p/w500/ba7hnMx1HAze0QSJSNfsTBycS8U.jpg"
              alt=""
            >
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://image.tmdb.org/t/p/w500/ba7hnMx1HAze0QSJSNfsTBycS8U.jpg"
              alt=""
            >
          </swiper-slide>
          <swiper-slide>
            <img
              src="https://image.tmdb.org/t/p/w500/ba7hnMx1HAze0QSJSNfsTBycS8U.jpg"
              alt=""
            >
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

import { ref } from 'vue';

const breakpoints = ref({
  // when window width is >= 900px
  900: {
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 5,
    centeredSlides: false,
  },

  // when window width is >= 1480px
  1480: {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 5,
    centeredSlides: false,
  },

  // when window width is >= 1800px
  1800: {
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
</script>

<style lang="scss" scoped>
.swiper-slide {
  text-align: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  transition: all 300ms ease-in-out;
  border-radius: 5px;
  min-height: 230px;
  
  @media(max-width: 599px) {
    min-height: 330px;
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

      @media(max-width: 599px) {
        min-height: 230px;
      }
    }

    &:hover {
      transform: scale(1.5);
      transition: all 300ms ease-in-out;
      transition-delay: 300ms;
      z-index: 1;

    img {
      transition-delay: 300ms;
      box-shadow: 0 0 5px 1px rgba(0,0,0,0.5);
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
