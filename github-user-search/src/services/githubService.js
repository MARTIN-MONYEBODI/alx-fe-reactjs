import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${process.env.VITE_GITHUB_API_KEY}`, // if an API key is needed
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    throw error;
  }
};