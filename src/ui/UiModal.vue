<script setup lang="ts">
import { useModal } from "@/composables/useModal";
import UiButton from "@/ui/UiButton.vue";
const { isOpen, component, props, close } = useModal();
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="isOpen" class="modal-backdrop fade show"></div>
    </Transition>

    <Transition name="slide-up">
      <div v-if="isOpen" class="modal d-block" @click.self="close">
        <div class="modal-dialog modal-xl modal-dialog-centered">
          <div class="modal-content shadow position-relative">
            <div class="modal-header">
              <p class="text-primary fw-bold fs-md">
                {{ props?.modalTitle || "" }}
              </p>
              <button class="btn-close" @click="close" />
            </div>

            <div class="modal-body p-4">
              <component v-if="component" :is="component" v-bind="props" />
            </div>

            <div class="modal-footer">
              <UiButton
                class="text-primary border border-light-grey"
                @click="close"
                >Anuluj</UiButton
              >
              <UiButton
                class="text-white bg-secondary"
                @click="props?.onSubmit?.()"
                >{{ props?.submitButtonText || "Zaakceptuj" }}</UiButton
              >
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
