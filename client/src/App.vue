<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Button from 'primevue/button'
</script>

<template>
  <main class="main">
    <header>
      <div class="card flex justify-center">
        <Button label="Verify" />
      </div>
    </header>

    <RouterView />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 25px;
}
</style>
