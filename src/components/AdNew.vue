<template>
  <div class="ad-new">
            <div>
              <h2>Создать объявление</h2>
              <form @submit.prevent="createAd">
                <div class="form-group">
                  <label>Название</label>
                  <input v-model="newAd.title" class="form-control">
                </div>
                <div class="form-group">
                  <label>Описание</label>
                  <textarea v-model="newAd.description" class="form-control"></textarea>
                </div>
                <div class="form-group">
                  <label>Цена</label>
                  <input v-model="newAd.price" type="number" class="form-control">
                </div>
                <div class="form-group">
                  <label>Main Photo</label>
                  <input v-model="newAd.photo" type="text" class="form-control">
                </div>

                <div class="form-group">
                  <label>More Photos</label>
                  1 - <input v-model="newAd.photos[0]" type="text" class="form-control">
                  2 - <input v-model="newAd.photos[1]" type="text" class="form-control">
                  3 - <input v-model="newAd.photos[2]" type="text" class="form-control">
                </div>
                <button type="submit" class="btn btn-success">Создать</button>
              </form>
            </div>


  </div>
</template>


<style lang="scss">
.ad-new {

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
        photo: "",
        photos: []
      }
    };
  },
  async created() {
    await this.fetchAd();
  },
  methods: {
    async createAd() {
      try {
        await axios.post('http://127.0.0.1:8000/api/ad', this.newAd);
        this.newAd = {title: '', description: '', price: 0, photo: '', photos: ['', '', '']};
      } catch (error) {
        console.error(error);
      }
    },
  }
};
</script>

<script setup>

</script>
