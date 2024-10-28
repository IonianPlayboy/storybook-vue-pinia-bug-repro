import { defineStore } from "pinia";
import { ref } from "vue";

export const useActiveChildStore = defineStore("activeChild", () => {
  const activeChildId = ref<string | undefined>();

  const setActiveChildId = (id: string) => {
    activeChildId.value = id;
  };
  const resetActiveChildId = () => {
    activeChildId.value = undefined;
  };

  return { activeChildId, setActiveChildId, resetActiveChildId };
});
