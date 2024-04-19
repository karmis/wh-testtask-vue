<template>
  <div class="ad-list">
    <ul class="divide-y divide-gray-100" role="list">
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
    </ul>


  </div>
</template>


<style lang="scss">
.ad-item {

}
</style>

<script>
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      ad: {},
      // total: 0,
      newAd: {
        title: "",
        description: "",
        price: 0,
        main_photo: "",
        photos: []
      }
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
  }
};
</script>

<script setup>

</script>
