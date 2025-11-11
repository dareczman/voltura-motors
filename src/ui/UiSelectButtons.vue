<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import UiButton from "@/ui/UiButton.vue";

interface BaseOption {
  id: string;
  label: string;
}

defineProps<{
  options: BaseOption[];
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const onSelect = (id: string) => emit("update:modelValue", id);
</script>

<template>
  <div class="btn-group flex-wrap gap-2 w-100">
    <UiButton
      v-for="option in options"
      :key="option.id"
      type="button"
      fontSize="s"
      :fontWeight="modelValue === option.id ? 'bold' : 'normal'"
      :class="
        modelValue === option.id
          ? 'btn-secondary text-white'
          : 'text-primary border'
      "
      @click="onSelect(option.id)"
    >
      {{ option.label }}
    </UiButton>
  </div>
</template>
