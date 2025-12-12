<script setup>
import Toolbar from 'primevue/toolbar'
import Button from 'primevue/button'
import { ref } from 'vue'
</script>
<template>
  <Toolbar>
    <template #start>
      <Button icon="pi pi-plus" class="mr-2" severity="secondary" text />
      <Button icon="pi pi-print" class="mr-2" severity="secondary" text />
      <Button icon="pi pi-upload" severity="secondary" text />
    </template>
  </Toolbar>
</template>
