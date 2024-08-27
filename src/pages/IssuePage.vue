<script setup lang="ts">
import { useRoute } from 'vue-router';
import IssueCard from 'src/components/issue-list/IssueCard.vue';
import LoaderSpinner from 'src/shared/components/LoaderSpinner.vue';
import useIssue from 'src/issue/composable/useIssue';

const router = useRoute();
const { id } = router.params;
const { issueQuery, issueCommentsQuery } = useIssue(+id);
console.log(issueQuery);
</script>

<template>
  <LoaderSpinner color="white" size="3.5rem" :thickness="5" />

  <router-link class="text-white" to="/list">Go Back</router-link>

  <!-- <IssueCard /> -->

  <LoaderSpinner
    v-if="issueQuery.isLoading.value"
    size="3rem"
    :thickness="1.5"
    :show-text="false"
  />
  <IssueCard v-else-if="issueQuery.data.value" :issue="issueQuery.data.value" />
  <p v-else>The issue does not exist</p>

  <div class="column" v-if="issueCommentsQuery.data.value">
    <span class="text-h3 q-mb-md"
      >Comments ({{ issueCommentsQuery.data.value.length || 0 }})</span
    >
    <IssueCard
      v-for="comment of issueCommentsQuery.data.value"
      :key="comment.id"
      :issue="comment"
    />
  </div>
</template>

<style scoped></style>
