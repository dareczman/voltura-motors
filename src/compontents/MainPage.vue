<script setup lang="ts">
import InfoBanner from '@/compontents/InfoBanner.vue'
import CarCatalog from '@/compontents/CarCatalog/CarCatalog.vue'
import PromoBanner from '@/compontents/PromoBanner.vue'
import CarsFaq from '@/compontents/CarsFaq/CarsFaq.vue'
import BottomBanner from '@/compontents/BottomBanner.vue'
</script>

<template>
  <div>
    <div class="container d-flex flex-column gap-5 mt-4 mb-3">
      <InfoBanner />

      <CarCatalog />

      <PromoBanner />

      <CarsFaq />

      <BottomBanner />
    </div>
  </div>
</template>
