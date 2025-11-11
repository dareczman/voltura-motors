<script setup lang="ts">
import { ref, watch, defineProps, defineEmits, computed } from 'vue'

interface RangeChange {
  min: number | ''
  max: number | ''
}

const props = defineProps<{
  min: number | ''
  max: number | ''
  label?: string
}>()

const emit = defineEmits<{
  (e: 'update:min', value: number | ''): void
  (e: 'update:max', value: number | ''): void
  (e: 'change', value: RangeChange): void
}>()

const localMin = ref(props.min)
const localMax = ref(props.max)

const formatNumber = (val: number): string => val.toLocaleString('pl-PL').replace(/,/g, ' ')

const parseNumber = (val: string): number => Number(val.replace(/\s+/g, '')) || 0

const formattedMin = computed(() => (localMin.value !== '' ? formatNumber(localMin.value) : ''))
const formattedMax = computed(() => (localMax.value !== '' ? formatNumber(localMax.value) : ''))

function onMinInput(e: Event) {
  const value = parseNumber((e.target as HTMLInputElement).value)

  if (localMax.value && value > localMax.value) {
    localMax.value = value
  }

  localMin.value = value
}

function onMaxInput(e: Event) {
  const value = parseNumber((e.target as HTMLInputElement).value)

  if (localMin.value && value < localMin.value) {
    localMax.value = value
    return
  }

  localMax.value = value
}

watch([localMin, localMax], ([newMin, newMax]) => {
  emit('update:min', newMin)
  emit('update:max', newMax)
  emit('change', { min: newMin, max: newMax })
})
</script>

<template>
  <div class="d-flex align-items-center gap-2">
    <label v-if="label" class="form-label text-light-txt-color fs-sm mb-0">{{ label }}</label>
    <div class="d-flex align-items-center gap-2">
      <input
        type="text"
        class="form-control form-control-sm text-center bg-white"
        :value="formattedMin"
        @input="onMinInput"
        placeholder="min"
      />
      <span>-</span>
      <input
        type="text"
        class="form-control form-control-sm text-center bg-white"
        :value="formattedMax"
        @input="onMaxInput"
        placeholder="max"
      />
    </div>
  </div>
</template>
