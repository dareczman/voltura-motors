<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

interface Option {
  value: string | number;
  label: string;
}

defineProps<{
  id?: string;
  label?: string;
  options: Option[];
  modelValue: string | number | null;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const onChange = (event: Event) => {
  const target = event.target as HTMLSelectElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <div class="d-flex align-items-center gap-2">
    <label
      v-if="label"
      :for="id"
      class="form-label text-light-txt-color fs-sm mb-0"
    >
      {{ label }}
    </label>

    <select
      :id="id"
      class="form-select form-select-sm w-auto bg-white"
      :value="modelValue"
      @change="onChange"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>
