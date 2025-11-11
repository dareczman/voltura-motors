<script setup lang="ts">
import UiButton from "@/ui/UiButton.vue";
</script>

<template>
  <header class="border-bottom bg-white">
    <div
      class="container py-3 d-flex align-items-center justify-content-between"
    >
      <div class="d-flex align-items-center justify-content-center">
        <img src="@/assets/img/icon.png" alt="logo" class="img-fluid" />
        <p class="fw-bold fs-5 text-primary">Voltura Motors</p>
      </div>
      <div class="d-none d-md-block">
        <UiButton class="bg-third text-white btn-lg"
          >Zaplanuj jazdę testową</UiButton
        >
      </div>
    </div>
  </header>
</template>
