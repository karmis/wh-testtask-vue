<script setup>
import {RouterView} from "vue-router";
</script>

<template>
  <div class="container">
    <div class="d-grid gap-2 d-md-flex justify-content-md-end m-2">
      <RouterLink
          :to="{ name: 'new'}"
          class="btn btn-warning me-md-2">
        New Ad
      </RouterLink>
    </div>

    <main>
      <RouterView/>
    </main>
  </div>
</template>

<style scoped>
</style>
