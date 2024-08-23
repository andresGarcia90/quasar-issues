<script setup>
import FilterSelector from 'src/components/filter-selector/FilterSelector.vue';
import IssueList from 'src/components/issue-list/IssueList.vue';
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
</script>
<template>
  <div class="row q-mb-md">
    <div class="col-12">
      <span class="text-h4">Github Issues</span>
    </div>
  </div>

  <div class="row">
    <div class="col-xs-12 col-md-4">
      <!-- TODO: Filtros -->
      <FilterSelector />
    </div>
    <div class="col-xs-12 col-md-8">
      <!-- TODO: loader -->
      <LoaderSpinner />
      <IssueList />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
