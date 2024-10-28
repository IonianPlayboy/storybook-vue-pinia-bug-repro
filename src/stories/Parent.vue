<template>
  <h1>Parent</h1>
  <p>id in parent: {{ id }}</p>
  <p>activeChildId in parent: {{ activeChildId }}</p>
  <Child @init="id = $event" />
  <ActiveStatus :currentId="id" :activeChildId="activeChildId" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useActiveChildStore } from "../piniaStores/activeChild";

import Child from "./Child.vue";
import ActiveStatus from "./ActiveStatus.vue";

const id = ref("");

const childActiveStore = useActiveChildStore();

const { activeChildId } = storeToRefs(childActiveStore);
</script>
