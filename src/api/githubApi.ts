import axios from 'axios';

export const githubApi = axios.create({
  baseURL: `https://api.github.com/repos/${process.env.GITHUB_USER}/${process.env.GITHUB_REPO}`,
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
});
