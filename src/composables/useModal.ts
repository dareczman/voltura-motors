import { ref, shallowRef, type Component } from "vue";

export interface ModalProps {
  modalTitle?: string;
  submitButtonText?: string;
  onSubmit?: () => void;
  [key: string]: unknown;
}

const isOpen = ref(false);
const component = shallowRef<Component | null>(null);
const props = ref<ModalProps | null>(null);

export const useModal = () => {
  const open = (modalComponent: Component, modalProps: ModalProps = {}) => {
    component.value = modalComponent;
    props.value = modalProps;
    isOpen.value = true;
  };

  const close = () => {
    isOpen.value = false;
    component.value = null;
    props.value = null;
  };

  return { isOpen, component, props, open, close };
};
