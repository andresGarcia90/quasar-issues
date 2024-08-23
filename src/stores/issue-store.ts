import { ref } from 'vue';
import { defineStore } from 'pinia';

enum stateData {
  all = '',
  open = 'open',
  closed = 'closed',
}

export const useIssuesStore = defineStore('issue', () => {
  const state = ref(stateData.all); //all = '', open = 'open', closed = 'closed';
  const labels = ref<string[]>([]);
  return {
    state,
    labels,
    //getters
    //Actions
    toggleLabel(labelName: string) {
      console.log(labelName);
    },
  };
});
