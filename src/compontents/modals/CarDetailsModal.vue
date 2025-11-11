<script setup lang="ts">
import type { CarModel } from '@/types/car.ts'
import { computed, defineProps } from 'vue'
import UiGallery from '@/ui/UiGallery.vue'
import UiCard from '@/ui/UiCard.vue'
import UiButton from '@/ui/UiButton.vue'
import UiSelectButtons from '@/ui/UiSelectButtons.vue'
import { useCarConfigStore } from '@/stores/carConfig.ts'
import UiColorPicker from '@/ui/UiColorPicker.vue'
import UiToggleButtons from '@/ui/UiToggleButtons.vue'
import UiDivider from '@/ui/UiDivider.vue'
import UiInfoRow from '@/ui/UiInfoRow.vue'
import { maskNumber } from '@/utils/mask-number.ts'

const props = defineProps<{
  data: CarModel
}>()

const carConfigStore = useCarConfigStore()

const versions = computed(() => props.data.versions)
const colors = computed(() => props.data.colors)
const addons = computed(() => props.data.addons)
</script>

<template>
  <div class="row gap-3 gap-md-0">
    <div class="col-lg-7">
      <UiGallery :gallery="data.gallery"></UiGallery>
    </div>

    <div class="col-lg-5 d-flex flex-column gap-2">
      <UiCard padding="3" class="d-flex flex-column gap-3">
        <div>
          <p class="text-light-txt-color fs-sm">Wersja</p>
          <UiSelectButtons v-model="carConfigStore.selectedVersion" :options="versions" />
        </div>

        <div>
          <p class="text-light-txt-color fs-sm">Kolor</p>
          <UiColorPicker v-model="carConfigStore.selectedColor" :options="colors" />
        </div>

        <div>
          <p class="text-light-txt-color fs-sm">Dodatki</p>
          <UiToggleButtons v-model="carConfigStore.selectedAddons" :options="addons" />
        </div>

        <div>
          <p class="text-light-txt-color fs-sm">Cena</p>
          <p class="fw-bold text-primary fs-lg">{{ maskNumber(carConfigStore.totalPrice) }} zł</p>
        </div>

        <UiButton class="bg-third text-white btn-lg w-100" @click="carConfigStore.submitConfig"
          >Znajdź punkt sprzedaży</UiButton
        >
      </UiCard>

      <UiCard padding="3">
        <p class="text-primary fw-bold">Kluczowe cechy</p>

        <UiDivider />

        <template v-if="carConfigStore.selectedVersionDetails">
          <UiInfoRow
            title="0-100 km/h"
            :content="`${carConfigStore.selectedVersionDetails.acceleration}s`"
          />

          <UiInfoRow
            title="Maksymalna prędkość"
            :content="`${carConfigStore.selectedVersionDetails.maxSpeed} km/h`"
          />

          <UiInfoRow title="Ładowanie" :content="carConfigStore.selectedVersionDetails.charging" />
          <UiInfoRow
            title="Pojemność bagażnika"
            :content="`${carConfigStore.selectedVersionDetails.trunkCapacity} L`"
          />
          <UiInfoRow title="Gwarancja" :content="carConfigStore.selectedVersionDetails.warranty" />
        </template>
      </UiCard>
    </div>
  </div>
</template>

<style scoped></style>
