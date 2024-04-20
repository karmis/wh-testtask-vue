<template>
  <div class="ad-new">
    <form @submit.prevent="createAd">
            <div class="card">
              <div class="card-body">
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">Title: </span>
                  <input type="text" class="form-control" placeholder="Title" v-model="newAd.title" >
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-text">Description</span>
                  <textarea class="form-control" v-model="newAd.description"></textarea>
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">Price: </span>
                  <input class="form-control" v-model="newAd.price" type="number">
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">Main Photo: </span>
                  <input class="form-control" v-model="newAd.photo" type="text">
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">Additional photo 1: </span>
                  <input class="form-control" v-model="newAd.photos[0]" type="text">
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">Additional photo 2: </span>
                  <input class="form-control" v-model="newAd.photos[1]" type="text">
                </div>

                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">Additional photo 3: </span>
                  <input class="form-control" v-model="newAd.photos[2]" type="text">
                </div>


                <div class="container d-flex align-items-center justify-content-center mt-5 ">
                  <button type="submit" class="btn btn-warning">Create</button>
                </div>
              </div>
            </div>
    </form>
  </div>
</template>


<style lang="scss">
.ad-new {

}
</style>

<script>
import axios from "axios";
import router from "@/router";

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
  methods: {
    async createAd() {
      try {
        const resp = await axios.post('http://127.0.0.1:8000/api/ad', this.newAd);
        this.newAd = {title: '', description: '', price: 0, photo: '', photos: ['', '', '']};
        debugger;
        await router.push({name: 'item',   params: {
            id: resp.data.id
          }})
      } catch (error) {
        console.error(error);
      }
    },
  }
};
</script>

<script setup>

</script>
