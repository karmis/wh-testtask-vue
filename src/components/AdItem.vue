<template>

  <div class="card">
    <div class="d-grid gap-2 d-md-flex justify-content-md-end m-2">
      <RouterLink
          :to="{ name: 'list'}"
          class="btn btn-link me-md-2">
        to list
      </RouterLink>
    </div>
    <div class="card-body">
      <div class="row">
        <h1 class="text-center">
          {{ ad.title }}
        </h1>
        <div class="col-3 how-img">
          <img :alt="ad.main_photo" :src="ad.main_photo" class="img-fluid">
        </div>
        <div class="col-9">
          <p>{{ ad.description }}</p>
          <p class="card-text">
            Price:
            <small class="text-body-secondary price">
              {{ ad.price }} $
            </small>
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <Carousel :items-to-show="2.5" :wrap-around="true">
            <Slide v-for="photo in ad.photos" :key="photo">
              <div class="carousel__item">
                <img :src="photo" alt="photo">
              </div>
            </Slide>

            <template #addons>
              <Navigation/>
            </template>
          </Carousel>
        </div>

      </div>
    </div>
  </div>


</template>

<script>
import {defineComponent} from 'vue'
import axios from "axios";
import {useRoute} from "vue-router";
import {Carousel, Navigation, Slide} from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      ad: {
        title: "",
        description: "",
        price: 0,
        main_photo: "",
        photos: []
      },
    };
  },
  async created() {
    await this.fetchAd();
  },
  methods: {
    async fetchAd() {
      try {
        const route = useRoute();
        const response = await axios.get("http://127.0.0.1:8000/api/ad/" + route.params.id + "?fields=description,photos");
        this.ad = response.data.data;
      } catch (error) {
        console.error(error);
      }
    }
  },
})
</script>


<!--
<template>
  <div class="ad-item">

    <Carousel>
      <Slide v-for="photo in ad.photos">
        <div class="carousel__item">
          <img :src="photo" :alt="photo">
        </div>
      </Slide>

      <template #addons="{ slidesCount }">
        <Navigation v-if="slidesCount > 1" />
      </template>
    </Carousel>


    &lt;!&ndash;    <ul class="divide-y divide-gray-100" role="list">
      <li class="flex justify-between gap-x-6 py-5">
        <div class="flex min-w-0 gap-x-4">
          <img :alt="ad.title" :src="ad.main_photo" class="h-28 w-28 flex-none rounded-full bg-gray-50">
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">
              {{ ad.title }}
            </p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
              {{ ad.description }}
            </p>
            <p v-for="photo in ad.photos" :key="ad.id" class="">
              <img :alt="ad.title" :src="photo" class="h-28 w-28 flex-none bg-gray-50">
            </p>
          </div>
        </div>
        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p class="mt-1 text-xs leading-5 text-gray-500">Price: <i>{{ ad.price }} $</i></p>
        </div>
      </li>
    </ul>&ndash;&gt;


  </div>
</template>


<style lang="scss">
.ad-item {

}
</style>

<script>
import axios from "axios";
import { useRoute } from "vue-router";
import 'vue3-carousel/dist/carousel.css'
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

export default defineComponent( {
  data() {
    return {
      ad: {
        title: "",
        description: "",
        price: 0,
        main_photo: "",
        photos: []
      },
    };
  },
  async created() {
    await this.fetchAd();
  },
  methods: {
    async fetchAd() {
      try {
        const route = useRoute();
        const response = await axios.get("http://127.0.0.1:8000/api/ad/" + route.params.id + "?fields=description,photos,modified_at");
        this.ad = response.data.data;
        debugger
      } catch (error) {
        console.error(error);
      }
    }
  },
  components: {
    Carousel,
    Slide,
    Navigation,
  },
});
</script>

<script setup>

</script>
-->
