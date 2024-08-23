<script setup lang="ts">
import { useRoute } from 'vue-router';
import IssueCard from 'src/components/issue-list/IssueCard.vue';
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';

const router = useRoute();
const { id = '' } = router.params;
console.log(id);
</script>

<template>
  <LoaderSpinner size="3.5rem" :thickness="5" />

  <router-link class="text-white" to="/">Go Back</router-link>

  <IssueCard />

  <LoaderSpinner size="3rem" :thickness="1.5" :show-text="false" />

  <div class="column">
    <span class="text-h3 q-mb-md">Comments (5)</span>
    <IssueCard v-for="comment of 10" :key="comment" />
  </div>
</template>

<style scoped></style>
