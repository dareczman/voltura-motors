<script setup lang="ts">
import { useCarsStore } from '@/stores/cars.ts'
import { onMounted } from 'vue'
import CarItem from '@/compontents/CarCatalog/CarItem.vue'

const carsStore = useCarsStore()

onMounted(() => {
  carsStore.fetchCarsList()
})
</script>

<template>
  <div class="row g-6" v-if="carsStore.filteredCarsList.length">
    <div v-for="item in carsStore.filteredCarsList" :key="item.id" class="col-12 col-sm-6 col-md-4">
      <CarItem :item="item" />
    </div>
  </div>

  <template v-else>
    <p>Nie znaleziono pasujących modeli. Spróbuj zmienić kryteria wyszukiwania.</p>
  </template>
</template>
