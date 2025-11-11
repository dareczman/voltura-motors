import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useModal } from "@/composables/useModal.ts";
import CarDetailsModal from "@/compontents/modals/CarDetailsModal.vue";
import type { CarModel } from "@/types/car.ts";

export const useCarConfigStore = defineStore("carConfig", () => {
  const selectedVersion = ref<string>("");
  const selectedColor = ref<string>("");
  const selectedAddons = ref<string[]>([]);
  const data = ref<CarModel>({} as CarModel);

  const { open, close } = useModal();

  const openCarModal = (item: CarModel) => {
    data.value = item;
    setDefaultValues();
    open(CarDetailsModal, {
      data: item,
      modalTitle: `${item.name} - Szczegóły modelu`,
      submitButtonText: "Znajdź dealera",
      onSubmit() {
        submitConfig();
      },
    });
  };

  const submitConfig = () => {
    const config = {
      model: data.value?.name,
      version: selectedVersion.value,
      color: selectedColor.value,
      addons: selectedAddons.value,
      price: totalPrice.value,
    };

    localStorage.setItem("carConfig", JSON.stringify(config));

    console.log("Konfiguracja zapisana: ", config);
    close();
    resetConfig();
  };

  const setDefaultValues = () => {
    selectedVersion.value = data.value.defaultVersion;
    selectedColor.value = data.value.defaultColor;
  };

  const selectedVersionDetails = computed(() =>
    data.value.versions.find((v) => v.id === selectedVersion.value),
  );

  const selectedColorDetails = computed(() =>
    data.value.colors.find((c) => c.id === selectedColor.value),
  );

  const selectedAddonsDetails = computed(() =>
    data.value.addons.filter((a) => selectedAddons.value.includes(a.id)),
  );

  const totalPrice = computed(() => {
    let total = data.value.price;

    if (selectedVersionDetails.value?.price)
      total += selectedVersionDetails.value.price;

    if (selectedColorDetails.value?.price)
      total += selectedColorDetails.value.price;

    for (const addon of selectedAddonsDetails.value) {
      total += addon.price;
    }

    return total;
  });

  const resetConfig = () => {
    selectedVersion.value = "";
    selectedColor.value = "";
    selectedAddons.value = [];
    data.value = {} as CarModel;
  };

  return {
    openCarModal,
    selectedVersion,
    selectedColor,
    selectedAddons,
    selectedVersionDetails,
    selectedColorDetails,
    selectedAddonsDetails,
    totalPrice,
    submitConfig,
  };
});
