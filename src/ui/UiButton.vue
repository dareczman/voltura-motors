<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    fontSize?: 's' | 'sm' | 'base' | 'md' | 'lg' | 'xl' | 'xxl'
    fontWeight?: 'light' | 'normal' | 'bold'
  }>(),
  { fontSize: 'sm', fontWeight: 'bold' },
)
</script>

<template>
  <button class="btn rounded-3" :class="[`fs-${props.fontSize}`, `fw-${props.fontWeight}`]">
    <slot></slot>
  </button>
</template>
