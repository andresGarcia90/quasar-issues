import { ref } from 'vue';
import { defineStore } from 'pinia';
import { State } from 'src/issue/interface/issue';

export const useIssuesStore = defineStore('issue', () => {
  const state = ref(State.All); //all = '', open = 'open', closed = 'closed';
  const labels = ref<string[]>([]);
  return {
    state,
    labels,
    //getters
    //Actions
    toggleLabel(labelName: string) {
      if (labels.value.includes(labelName)) {
        labels.value = labels.value.filter((label) => label !== labelName);
      } else {
        labels.value.push(labelName);
      }
    },
  };
});
