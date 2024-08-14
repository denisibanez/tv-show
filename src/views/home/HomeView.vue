<template>
  <BannerWrapper v-show="!LOADING_STATE" :background="showObject?.background">
    <template #body>
      <div class="home__wrapper">
        <div class="row desktop-hide">
          <div class="col">
            <ButtonsBar />
          </div>
        </div>

        <div class="row mobile-hide">
          <div class="home__descriptionBanner col">
            <DescriptionBanner
              :description="showObject?.description"
              :avarage="showObject?.avarage"
            />
          </div>
        </div>

        <div class="home__swiper">
          <div class="row">
            <div class="col">
              <p class="q-ma-none">Episodes</p>
            </div>
          </div>
          <SliderComponent :episodes="episodes" />
        </div>
      </div>
    </template>
  </BannerWrapper>
</template>

<script lang="ts" setup>
// VUE
import { onMounted, ref, Ref } from 'vue';
import pinia from '@/main';

// COMPONENTS
import {
  ButtonsBar,
  DescriptionBanner,
  SliderComponent,
  BannerWrapper,
} from '@/components';

//TYPES
import type {
  DataShowInterfaceResponse,
  ShowInterfaceResponse,
} from '@/models/Show.d';
import type {
  DataEpisodesInterfaceResponse,
  EpisodesInterfaceResponse,
} from '@/models/Episodes.d';
import type { ShowObjectInterface } from './HomeView.d';

// SERVICE
import dynamicService from '@/services/plugins/dynamicInjection.service';

//Utils
import mountUrl from '@/utils/mountParams.utils';

// STORE
import { storeToRefs } from 'pinia';
import { useLoadingStore } from '@/stores/loading/loading.store';
import image from '../../assets/images/dark-season-3-netflix-series-lisa-vicari-louis-hofmann-2732x2732-1769.jpg';
// VARIABLES
const { LOADING_STATE } = storeToRefs(useLoadingStore(pinia));

const showObject: Ref<ShowObjectInterface> = ref({
  background: image,
  id: null,
  description: '',
  name: '',
  avarage: 0,
});

const episodes: Ref<EpisodesInterfaceResponse[]> = ref([]);

// LIFECYCLE
onMounted(() => {
  getShowData();
});

//Methods
async function getShowData() {
  const urlParams = {
    path: `/shows/17861`,
  };
  const requestParams = {
    type: 'get',
    url: mountUrl(urlParams),
    loading: true,
  };

  await dynamicService(requestParams).then(
    (response: DataShowInterfaceResponse) => {
      const data = response?.data;
      if (data) {
        mountEpisodes(data);
        getEpisodesList(data.id);
      }
    }
  );
}

async function getEpisodesList(id: number) {
  const urlParams = {
    path: `/shows/${id}/episodes`,
  };
  const requestParams = {
    type: 'get',
    url: mountUrl(urlParams),
    loading: true,
  };

  await dynamicService(requestParams).then(
    (response: DataEpisodesInterfaceResponse) => {
      const data = response?.data;
      if (data) {
        episodes.value = data;
      }
    }
  );
}

function mountEpisodes(show: ShowInterfaceResponse) {
  const { name, image, summary, id, rating } = show;
  const windowSize = window.innerWidth >= 991;
  showObject.value = {
    background: windowSize ? showObject.value.background : image?.original,
    id,
    description: summary,
    name,
    avarage: rating?.average,
  };
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_global.scss';
.home {
  &__swiper {
    p {
      @include font-format($size: 1.3rem, $family: 'Netflix Sans Bold');
      top: 25px;
      position: relative;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

      @media (max-width: 768px) {
        top: 50px;
        z-index: 1;
      }
    }
  }
}
</style>
