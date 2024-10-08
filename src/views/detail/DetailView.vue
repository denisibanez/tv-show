<template>
  <BannerWrapper :background="background" :is-detail="true">
    <template #body>
      <div class="detailView">
        <div class="row justify-center">
          <div class="col detailView__title text-center q-pa-md">
            <p class="q-ma-none">
              {{ episode?.name }}
            </p>
          </div>
        </div>

        <div class="row">
          <div class="detailView__descriptionBanner col">
            <DescriptionBanner
              :avarage="episode?.rating.average"
              :description="episode?.summary"
            />
          </div>
        </div>
      </div>
    </template>
  </BannerWrapper>
</template>

<script lang="ts" setup>
// VUE
import { ref, Ref, onMounted } from 'vue';

// SERVICE
import dynamicService from '@/services/plugins/dynamicInjection.service';

//Utils
import mountUrl from '@/utils/mountParams.utils';

//COMPONENTS
import { BannerWrapper, DescriptionBanner } from '@/components';

// TYPES
import type {
  EpisodeByNumberInterface,
  DataEpisodeInterface,
} from '@/models/Episode.d';

// ROUTER
import { useRoute } from 'vue-router';
import image from '../../assets/images/dark-season-3-netflix-series-lisa-vicari-louis-hofmann-2732x2732-1769.jpg';

// VARIABLES
const route = useRoute();
const background: Ref<string> = ref(image);

const episode: Ref<EpisodeByNumberInterface | null> = ref(null);

//LIFECYCLE
onMounted(() => {
  getEpisiodeByNumber();
});

async function getEpisiodeByNumber() {
  const { season, number } = route.params;
  const urlParams = {
    path: `/shows/17861/episodebynumber?`,
    params: {
      season,
      number,
    },
  };
  const requestParams = {
    type: 'get',
    url: mountUrl(urlParams),
    loading: true,
  };

  await dynamicService(requestParams).then((response: DataEpisodeInterface) => {
    const data = response?.data;
    if (data) {
      episode.value = data;
      background.value = data.image?.original || background.value;
    }
  });
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_global.scss';
.detailView {
  .detailView__title {
    position: fixed;
    top: 10rem;
    max-width: 600px;

    @include font-format(
      $size: 2.5rem,
      $family: 'Netflix Sans bold',
      $line-height: 3rem,
      $transform: uppercase
    );

    @media (max-width: 768px) {
      background-color: transparent;
      top: 12rem;
    }

    @media (max-width: 375px) {
      top: 6rem;
    }
  }
  &__descriptionBanner {
    position: fixed;
    bottom: 4rem;

    @media (max-width: 768px) {
      bottom: 6.5rem;
    }
  }
}
</style>
