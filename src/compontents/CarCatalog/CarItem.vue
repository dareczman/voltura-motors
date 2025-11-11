<script setup lang="ts">
import UiCard from '@/ui/UiCard.vue'
import { defineProps } from 'vue'
import type { CarModel } from '@/types/car.ts'
import UiButton from '@/ui/UiButton.vue'
import { useCarConfigStore } from '@/stores/carConfig.ts'
import { maskNumber } from '@/utils/mask-number.ts'

defineProps<{
  item: CarModel
}>()

const carConfigStore = useCarConfigStore()
</script>

<template>
  <UiCard>
    <img :src="item.image" :alt="item.name" class="w-100" />

    <div class="text-primary fw-bold">
      <p class="fs-md">
        {{ item.name }}
      </p>
      <p class="fs-lg">od {{ maskNumber(item.price) }} zł</p>
    </div>

    <div class="d-flex align-items-center justify-content-between">
      <p class="text-light-txt-color fs-s">{{ item.drive }} • {{ item.range }}km range</p>

      <UiButton class="bg-secondary text-white btn-sm" @click="carConfigStore.openCarModal(item)"
        >Sprawdź</UiButton
      >
    </div>
  </UiCard>
</template>
