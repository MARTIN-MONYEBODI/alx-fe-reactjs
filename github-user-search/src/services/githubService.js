import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchAdvancedSearchResults = async (username, location, repos) => {
  try {
    let query = '';

    if (username) query += `user:${username} `;
    if (location) query += `location:${location} `;
    if (repos) query += `repos:>${repos} `;

    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}`);
    return response.data.items; // GitHub returns results in `items`
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
};