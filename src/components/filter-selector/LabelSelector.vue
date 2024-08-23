<script setup lang="ts">
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import useLabels from 'src/issue/composable/useLabels';

const { labelQuery, toggleLabel, labelSelected } = useLabels();
</script>

<template>
  <div class="q-mt-md">
    <LoaderSpinner
      size="50px"
      :thickness="1"
      :show-text="false"
      v-if="labelQuery.isLoading.value"
    />
    <q-chip
      v-else
      v-for="label of labelQuery.data.value"
      :key="label.id"
      :style="{ color: `#${label.color}` }"
      :outline="!labelSelected.includes(label.name)"
      clickable
      @click="toggleLabel(label.name)"
    >
      {{ label.name }}
    </q-chip>
  </div>
</template>

<style scoped></style>
