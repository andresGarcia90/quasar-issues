<script setup lang="ts">
import { useIssuesStore } from 'src/stores/issue-store';

const issuesStore = useIssuesStore();
</script>
<template>
  <p>tu vieja</p>
  <!-- v-model="model" -->
  <q-btn-toggle
    v-model="issuesStore.state"
    push
    glossy
    spread
    toggle-color="primary"
    :options="[
      { label: 'All', value: '' },
      { label: 'Open', value: 'open' },
      { label: 'Closed', value: 'closed' },
    ]"
  />
</template>

<style scoped></style>
