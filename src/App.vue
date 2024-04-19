<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterLink :to="{ name: 'new'}">NEW</RouterLink>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
</style>
