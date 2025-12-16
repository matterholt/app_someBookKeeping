<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Basic Bookkeeper</h1>
    <div>{{ new Date().toLocaleDateString() }}</div>
  </header>

  <RouterView />
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 25px;
}
header {
  display: flex;
  justify-content: space-between;
}
</style>
