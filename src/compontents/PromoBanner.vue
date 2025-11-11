<script setup lang="ts">
import UiCard from '@/ui/UiCard.vue'
import UiButton from '@/ui/UiButton.vue'
</script>

<template>
  <UiCard
    bg="secondary"
    class="d-flex align-items-center justify-content-between flex-column flex-md-row gap-3"
  >
    <p class="text-white fw-bold fs-lg">Poczuj przyszłość jazdy z Voltura.</p>
    <UiButton class="bg-white text-secondary">Umów się na jazdę próbną</UiButton>
  </UiCard>
</template>
