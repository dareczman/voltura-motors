<script setup lang="ts">
defineProps<{
  title: string
  content: string
}>()
</script>

<template>
  <div class="d-flex justify-content-between fs-sm">
    <p class="text-light-txt-color">{{ title }}</p>
    <p class="text-primary">{{ content }}</p>
  </div>
</template>
