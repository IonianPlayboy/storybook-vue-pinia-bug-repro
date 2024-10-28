import { defineStore } from "pinia";
import { ref } from "vue";

export const useActiveItemStore = defineStore("activeItem", () => {
  const activeItemId = ref<number | undefined>();

  const setActiveItemId = (id: number) => {
    activeItemId.value = id;
  };
  const resetActiveItemId = () => {
    activeItemId.value = undefined;
  };

  return { activeItemId, setActiveItemId, resetActiveItemId };
});
