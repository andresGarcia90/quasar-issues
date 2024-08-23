import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/githubApi';
import { Label } from '../interface/label';
import { useIssuesStore } from 'src/stores/issue-store';
import { storeToRefs } from 'pinia';

const getLabels = async (): Promise<Label[]> => {
  // const { data } = await githubApi.get('/labels?per_page=100');
  const { data } = await githubApi<Label[]>('/labels?per_page=100');
  return data;
};
const useLabels = () => {
  const issueStore = useIssuesStore();
  const { labels: labelSelected } = storeToRefs(issueStore);

  const labelQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60,
  });
  return {
    labelQuery,
    labelSelected,
    //methods
    toggleLabel: issueStore.toggleLabel,
  };
};

export default useLabels;
