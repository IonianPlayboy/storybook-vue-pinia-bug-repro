<script setup lang="ts">
import ItemWithId from "./components/ItemWithId.vue";

const items = [
  { id: 1, label: "Item 1" },
  { id: 2, label: "Item 2" },
  { id: 3, label: "Item 3" },
  { id: 4, label: "Item 4" },
  { id: 5, label: "Item 5" },
];
</script>

<template>
  <ItemWithId
    v-for="item in items"
    :key="item.id"
    :id="item.id"
    :label="item.label"
  />
</template>
