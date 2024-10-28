<template>
  <h2>Active status</h2>
  <p>
    Is active : <strong>{{ isActive }}</strong>
  </p>
</template>

<script setup lang="ts">
import { computed } from "vue";
// import { useActiveChildStore } from "../piniaStores/activeChild";

const props = defineProps<{
  currentId: string;
  activeChildId: string | undefined;
}>();

const isActive = computed(() => props.currentId === props.activeChildId);
</script>
