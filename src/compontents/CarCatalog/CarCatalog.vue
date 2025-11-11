<script setup lang="ts">
import CarFilters from '@/compontents/CarCatalog/CarFilters.vue'
import CarList from '@/compontents/CarCatalog/CarList.vue'
</script>

<template>
  <div class="d-flex flex-column gap-3">
    <p class="text-primary fs-xl fw-bold">Gama naszych samochodów</p>

    <CarFilters />

    <CarList />
  </div>
</template>
