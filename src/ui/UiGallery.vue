<script setup lang="ts">
import { ref, watch, computed } from 'vue'

interface Props {
  gallery: string[]
}

const props = defineProps<Props>()

const localGallery = ref<string[]>([...props.gallery])
const mainImage = ref(localGallery.value[0] ?? '')

watch(
  () => props.gallery,
  (newGallery) => {
    localGallery.value = [...newGallery]
    mainImage.value = newGallery[0] ?? ''
  },
  { immediate: true },
)

const mainIndex = computed(() => localGallery.value.indexOf(mainImage.value))

const thumbnails = computed(() => localGallery.value.filter((_, idx) => idx !== mainIndex.value))

const swapImage = (image: string) => {
  const clickedIndex = localGallery.value.indexOf(image)
  const currentIndex = mainIndex.value

  if (clickedIndex === -1 || currentIndex === -1 || clickedIndex === currentIndex) return

  const temp = localGallery.value[currentIndex]
  localGallery.value[currentIndex] = localGallery.value[clickedIndex] as string
  localGallery.value[clickedIndex] = temp as string

  mainImage.value = localGallery.value[currentIndex]
}
</script>

<template>
  <div class="d-flex flex-column gap-3">
    <div class="rounded-4 overflow-hidden position-relative main-image-wrapper w-100">
      <Transition name="fade" mode="out-in">
        <img
          :key="mainImage"
          :src="mainImage"
          alt="Zdjęcie samochodu"
          class="img-fluid w-100 h-100 position-absolute top-0 start-0 cursor-pointer"
        />
      </Transition>
    </div>

    <div class="d-flex gap-3 justify-content-evenly flex-wrap">
      <div
        v-for="image in thumbnails"
        :key="image"
        class="thumbnail rounded-3 overflow-hidden border cursor-pointer h-auto ratio ratio-16x9"
        @click="swapImage(image)"
      >
        <img :src="image" alt="Miniatura samochodu" class="w-100 h-100 object-fit-fill" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-image-wrapper {
  height: 250px;
}

.thumbnail {
  width: 150px;
}

@media (min-width: 992px) {
  .main-image-wrapper {
    height: 400px;
  }

  .thumbnail {
    width: 195px;
  }
}
</style>
