<script setup lang="ts">
import { ref } from "vue";
import UiCard from "@/ui/UiCard.vue";
import ArrowUp from "@/compontents/icons/ArrowUp.vue";

const faqItems = [
  {
    question: "Jakie korzyści daje flota elektryczna Voltura?",
    answer:
      "Niższe koszty eksploatacji, prosta obsługa serwisowa i wizerunek marki dbającej o środowisko.",
  },
  {
    question: "Czy samochody Voltura sprawdzą się w trasach długodystansowych?",
    answer:
      "Tak, zasięgi naszych modeli są wystarczające do komfortowych podróży na długich dystansach.",
  },
  {
    question: "Jakie wsparcie serwisowe oferujecie dla flot?",
    answer:
      "Oferujemy kompleksową obsługę serwisową i mobilne wsparcie dla flot firmowych.",
  },
];

const activeIndexes = ref<number[]>([]);

const toggleIndex = (index: number) => {
  if (activeIndexes.value.includes(index)) {
    activeIndexes.value = activeIndexes.value.filter((i) => i !== index);
  } else {
    activeIndexes.value.push(index);
  }
};
</script>

<template>
  <UiCard
    v-for="(item, index) in faqItems"
    :key="index"
    :bg="activeIndexes.includes(index) ? 'white' : 'light-grey'"
    class="cursor-pointer"
    @click="toggleIndex(index)"
  >
    <div class="d-flex align-items-center justify-content-between">
      <p class="fw-bold">{{ item.question }}</p>
      <ArrowUp
        :style="{
          transform: activeIndexes.includes(index) ? '' : 'rotateX(180deg)',
          transition: 'transform 0.3s ease',
        }"
      />
    </div>

    <Transition name="fade">
      <p v-if="activeIndexes.includes(index)">{{ item.answer }}</p>
    </Transition>
  </UiCard>
</template>
