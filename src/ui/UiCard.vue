<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    bg?: 'white' | 'primary' | 'secondary' | 'light-grey'
    padding?: '1' | '2' | '3' | '4' | '5' | '6'
  }>(),
  { bg: 'white', padding: '4' },
)
</script>

<template>
  <div class="border rounded-4" :class="[`bg-${props.bg}`, `p-${props.padding}`]">
    <slot></slot>
  </div>
</template>
