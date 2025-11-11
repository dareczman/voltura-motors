<script setup lang="ts">
import UiCard from "@/ui/UiCard.vue";
</script>

<template>
  <UiCard class="background d-flex align-items-center justify-content-center">
    <p class="fw-bold fs-xl text-white text-center">
      Postaw na innowację. Postaw na Voltura.
    </p>
  </UiCard>
</template>

<style scoped>
.background {
  background-image:
    linear-gradient(rgba(18 60 130 / 0.8), rgba(18 60 130 / 0.8)),
    url("/img/bg-banner.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 280px;
}
</style>
