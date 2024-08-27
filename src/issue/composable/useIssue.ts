import { useQuery } from '@tanstack/vue-query';
import { githubApi } from 'src/api/githubApi';

import { Issue } from '../interface/issue';

const getIssue = async (issueNumber: number): Promise<Issue> => {
  const { data } = await githubApi<Issue>('/issues/' + issueNumber);
  return data;
};

const getIssueComments = async (issueNumber: number): Promise<Issue[]> => {
  const { data } = await githubApi.get<Issue[]>(
    `/issues/${issueNumber}/comments`,
  );
  return data;
};

// interface Options {
//   // Autload issue and comments
//   autoload?: boolean;
// }

const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ['issues', issueNumber],
    queryFn: () => getIssue(issueNumber),
    // staleTime: 1000 * 60 * 60,
  });

  const issueCommentsQuery = useQuery({
    queryKey: ['issue', issueNumber, 'comments'],
    queryFn: () => getIssueComments(issueNumber),
  });

  return {
    issueQuery,
    issueCommentsQuery,
  };
};

export default useIssue;
