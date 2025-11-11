<script setup lang="ts">
import UiCard from '@/ui/UiCard.vue'
import UiButton from '@/ui/UiButton.vue'
import UiSelect from '@/ui/UiSelect.vue'
import UiInputRange from '@/ui/UiInputRange.vue'
import { useCarsStore } from '@/stores/cars.ts'

const carsStore = useCarsStore()
</script>

<template>
  <UiCard>
    <div class="d-flex align-items-center gap-3 justify-content-between flex-column flex-lg-row">
      <div class="d-flex gap-4 flex-column flex-md-row align-items-center">
        <UiSelect
          id="car-type"
          label="Typ"
          v-model="carsStore.filters.selectedType"
          :options="[
            { value: '', label: 'Wybierz typ' },
            { value: 'SUV', label: 'SUV' },
            { value: 'sedan', label: 'Sedan' },
          ]"
        />

        <UiSelect
          id="drive-type"
          label="Napęd"
          v-model="carsStore.filters.selectedDriveType"
          :options="[
            { value: '', label: 'Wybierz napęd' },
            { value: 'AWD', label: 'AWD' },
            { value: 'FWD', label: 'FWD' },
            { value: 'RWD', label: 'RWD' },
          ]"
        />

        <UiInputRange
          label="Cena"
          v-model:min="carsStore.filters.priceMin"
          v-model:max="carsStore.filters.priceMax"
          style="max-width: 250px"
        />
      </div>

      <UiButton class="bg-third text-white btn-lg" @click="carsStore.onFilter">Filtruj</UiButton>
    </div>
  </UiCard>
</template>
