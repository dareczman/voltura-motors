<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue'
import UiButton from '@/ui/UiButton.vue'

interface ToggleOption {
  id: string
  label: string
  price?: number
}

const props = defineProps<{
  options: ToggleOption[]
  modelValue: string[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void
}>()

const selected = ref<string[]>([...props.modelValue])

watch(
  () => props.modelValue,
  (newVal) => {
    selected.value = [...newVal]
  },
)

const onToggle = (id: string) => {
  if (selected.value.includes(id)) {
    selected.value = selected.value.filter((item) => item !== id)
  } else {
    selected.value.push(id)
  }
  emit('update:modelValue', selected.value)
}
</script>

<template>
  <div class="btn-group flex-wrap gap-2 w-100">
    <UiButton
      v-for="option in options"
      :key="option.id"
      type="button"
      fontSize="s"
      :fontWeight="selected.includes(option.id) ? 'bold' : 'normal'"
      :class="selected.includes(option.id) ? 'btn-secondary text-white' : 'text-primary border'"
      @click="onToggle(option.id)"
    >
      <span>{{ option.label }}</span>
    </UiButton>
  </div>
</template>
