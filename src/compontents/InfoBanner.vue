<script setup lang="ts">
import UiCard from "@/ui/UiCard.vue";
import UiButton from "@/ui/UiButton.vue";
</script>

<template>
  <UiCard>
    <div class="row gap-3 gap-md-0">
      <div class="col-md-6 d-flex flex-column gap-2">
        <p class="fw-bold text-primary fs-xxl">Moc spotyka efektywność</p>

        <p class="text-basic-txt-color">
          Odkryj nową linię Voltura e-Line – zaprojektowaną z myślą o mieście i
          długich trasach
        </p>

        <p class="text-light-txt-color">
          Voltura e-Line to zupełnie nowa generacja samochodów elektrycznych,
          łączących dynamiczne osiągi z wyjątkową energooszczędnością.
          Zaprojektowana w oparciu o najnowsze technologie, oferuje nie tylko
          imponujący zasięg, ale też komfort jazdy na najwyższym poziomie.
          Nowoczesne systemy wspomagania kierowcy sprawiają, że każda podróż
          staje się bezpieczniejsza i bardziej intuicyjna. Elegancka sylwetka i
          dopracowane detale nadwozia podkreślają charakter premium marki
          Voltura.
        </p>

        <div>
          <UiButton class="bg-secondary text-white btn-lg"
            >Sprawdź szczegóły</UiButton
          >
        </div>
      </div>

      <div class="col-md-6">
        <img src="/img/cars/main.jpg" alt="Thumbnail car" class="w-100" />
      </div>
    </div>
  </UiCard>
</template>
