<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface BaseOption {
  id: string
  label: string
  hex: string
}

defineProps<{
  options: BaseOption[]
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const onSelect = (id: string) => emit('update:modelValue', id)
</script>

<template>
  <div class="d-flex gap-2">
    <div
      v-for="option in options"
      :key="option.id"
      class="color-circle border cursor-pointer rounded-1"
      :style="{
        backgroundColor: option.hex,
        outline: modelValue === option.id ? '3px solid #123C82' : 'none',
      }"
      @click="onSelect(option.id)"
    />
  </div>
</template>

<style scoped lang="scss">
.color-circle {
  width: 32px;
  height: 32px;
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
}
</style>
