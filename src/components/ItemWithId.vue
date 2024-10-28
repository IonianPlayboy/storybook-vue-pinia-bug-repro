<template>
  <h1 :class="label">ItemWithId - {{ label }}</h1>
  <p>
    id : <strong>{{ id }}</strong> - activeId :
    <strong>{{ activeItemId }}</strong>
  </p>
  <p>
    Is active :
    <strong :style="isActive ? 'color: green;' : 'color: gray;'">
      {{ isActive }}
    </strong>
  </p>
  <div class="actions">
    <button @click="setAsActiveItemInsideComponent">
      Set as active Item<br /><em>(inside component)</em>
    </button>
    <button @click="setAsActiveItemOutsideComponent">
      Set as active Item<br /><em>(outside component)</em>
    </button>
    <button @click="resetActiveItemId">Reset active Item</button>
  </div>
</template>

<script setup lang="ts">
import { computed, watch } from "vue";
import { storeToRefs } from "pinia";
import { useActiveItemStore } from "../piniaStores/activeItem";
import { handleNewActiveItem } from "../logic/handleNewActiveItem";

const props = defineProps<{
  id: number;
  label: string;
}>();

const itemActiveStore = useActiveItemStore();

const { activeItemId } = storeToRefs(itemActiveStore);

const { setActiveItemId, resetActiveItemId } = itemActiveStore;

const setAsActiveItemInsideComponent = () => {
  setActiveItemId(props.id);
};

const setAsActiveItemOutsideComponent = () => {
  handleNewActiveItem(props.id);
};

const isActive = computed(() => props.id === activeItemId.value);

watch(
  activeItemId,
  (newActiveItemId) => {
    console.log(
      `> ItemWithId ${props.label} :: activeItemId changed to ${newActiveItemId}`
    );
  },
  { immediate: true }
);
</script>

<style>
.actions {
  width: 25rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
</style>
