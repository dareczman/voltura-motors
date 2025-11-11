import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import type { CarModel } from "@/types/car.ts";
import { getBaseUrl } from "@/utils/base-url.ts";

interface Filters {
  selectedType: string;
  selectedDriveType: string;
  priceMin: number | "";
  priceMax: number | "";
}

export const useCarsStore = defineStore("cars", () => {
  const carsList = ref<CarModel[]>([]);

  const filters = reactive<Filters>({
    selectedType: "",
    selectedDriveType: "",
    priceMin: "",
    priceMax: "",
  });
  const filteredCarsList = ref<CarModel[]>([]);

  const fetchCarsList = async () => {
    try {
      const response = await fetch(`${getBaseUrl()}data/cars.json`);
      const data = await response.json();

      carsList.value = data;
      filteredCarsList.value = data;
    } catch (error) {
      console.error(error);
    }
  };

  const onFilter = () => {
    filteredCarsList.value = carsList.value.filter(
      (car) =>
        (!filters.selectedType || car.type === filters.selectedType) &&
        (!filters.selectedDriveType ||
          car.drive === filters.selectedDriveType) &&
        (!filters.priceMin || car.price >= Number(filters.priceMin)) &&
        (!filters.priceMax || car.price <= Number(filters.priceMax)),
    );
  };

  return { carsList, fetchCarsList, filteredCarsList, filters, onFilter };
});
