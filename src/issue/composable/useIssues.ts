import { storeToRefs } from 'pinia';
import { useIssuesStore } from 'src/stores/issue-store';
import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/githubApi';
import { Issue, State } from '../interface/issue';

const getIssues = async (labels: string[], state: State): Promise<Issue[]> => {
  const params = new URLSearchParams();
  params.append('per_page', '10');
  if (state) {
    params.append('state', state);
  }

  if (labels.length > 0) {
    params.append('labels', labels.join(','));
  }

  const { data } = await githubApi<Issue[]>('/issues', { params });
  return data;
};

const useIssues = () => {
  const issuesStore = useIssuesStore();
  const { labels, state } = storeToRefs(issuesStore);

  const issueQuery = useQuery({
    queryKey: ['issues', { labels, state }],
    queryFn: () => getIssues(labels.value, state.value),
    staleTime: 1000 * 60 * 60,
  });
  return {
    issueQuery,
  };
};

export default useIssues;
