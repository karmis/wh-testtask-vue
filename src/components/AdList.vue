<template>
  <div class="ad-list">
    <ul v-for="ad in ads" :key="ad.id" class="divide-y divide-gray-100" role="list">
      <li class="flex justify-between gap-x-6 py-5">
        <div class="flex min-w-0 gap-x-4">
          <img :alt="ad.title" :src="ad.photo" class="h-28 w-28 flex-none rounded-full bg-gray-50">
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">
              <RouterLink :to="{ name: 'item', params: { id: ad.id }}">{{ ad.title }}</RouterLink>
            </p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
              {{ ad.description }}
            </p>
          </div>
        </div>
        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p class="mt-1 text-xs leading-5 text-gray-500">Price: <i>{{ ad.price }} $</i></p>
        </div>
      </li>
    </ul>

    <pagination v-model="page" :per-page="perPage" :records="total" @paginate="fetchAds($event)" />

  </div>
</template>


<style lang="scss">
.ad-list {
  .page-item {
    &.active {
      background-color: green;
    }

    float: left;
    border: 1px #00b solid;
    text-align: center;

    .page-link {
      width: 30px;
      height: 30px;
      padding: 2px;
    }
  }

  .VuePagination__count {
    clear: both;
  }
}
</style>

<script>
import axios from "axios";

export default {
  data() {
    return {
      page: 1,
      total: 0,
      perPage: 0,
      ads: []
    };
  },
  async created() {
    await this.fetchAds();
  },
  methods: {
    async fetchAds(page = 1) {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/ad?page=" + page);
        this.ads = response.data.data;
        this.total = response.data.meta.total[0];
        this.perPage = response.data.meta?.per_page[0]||this.total;
        debugger
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
