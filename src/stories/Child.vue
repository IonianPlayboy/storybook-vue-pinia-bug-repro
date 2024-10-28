<template>
  <h2>Child</h2>
  <p>id in child: {{ id }}</p>
  <div>
    <button @click="setAsActiveChildInsideComponent">
      Set as active child (inside component)
    </button>
    <button @click="setAsActiveChildOutsideComponent">
      Set as active child (outside component)
    </button>
    <button @click="resetActiveChildId">Reset active child</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useActiveChildStore } from "../piniaStores/activeChild";
import { handleNewActiveChild } from "../logic/handleNewActiveChild";

const id = ref("");

const { setActiveChildId, resetActiveChildId } = useActiveChildStore();

const emit = defineEmits<{
  init: [id: string];
}>();

watch(id, () => emit("init", id.value));

const updateId = () => {
  id.value = `${Math.round(Math.random() * 1000)}`;
};

const setAsActiveChildInsideComponent = () => {
  setActiveChildId(id.value);
};

const setAsActiveChildOutsideComponent = () => {
  handleNewActiveChild(id.value);
};

onMounted(() => {
  updateId();
  emit("init", id.value);
});
</script>
