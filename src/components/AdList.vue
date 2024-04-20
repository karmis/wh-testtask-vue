<template>
  <div class="ad-list">
    <div class="row row-cols-3 g-2">
      <div v-for="ad in ads" :key="ad.id" class="col">
        <RouterLink
            :to="{ name: 'item', params: { id: ad.id }}"
            class="text-secondary"
        >
          <div class="card text-bg-warning">
            <img :alt="ad.title" :src="ad.photo" class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">
                {{ ad.title }}
              </h5>
              <p class="card-text">
                Price:
                <small class="text-body-secondary price">
                  {{ ad.price }} $
                </small>
              </p>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>


    <div class="container d-flex align-items-center justify-content-center mt-5 pagination">
      <pagination v-model="page" :per-page="perPage" :records="total" @paginate="fetchAds($event)"/>
    </div>

  </div>
</template>


<style lang="scss">
.ad-list {
  .card {
    border-color: #0d6efd;

    &:hover {
      box-shadow: 0 0 3px 3px rgba(1,1,1, 0.5);
    }
  }

  .pagination {
    .VuePagination__count {
      text-align: center;
    }
  }

  .price {
    float: right;
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
        this.perPage = response.data.meta?.per_page[0] || this.total;
        debugger
      } catch (error) {
        console.error(error);
      }
    }
  }
};
</script>
