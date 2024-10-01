import axios from 'axios';

// Base URL for GitHub's Search API for users
const BASE_URL = 'https://api.github.com/search/users?q';

/**
 * Fetch users based on advanced search parameters like username, location, and minRepos (minimum number of repositories).
 * @param {string} username - GitHub username to search for.
 * @param {string} location - Location of the GitHub user.
 * @param {number} minRepos - Minimum number of repositories the user must have.
 * @returns {Promise<Array>} - Array of users matching the search criteria.
 */
export const fetchAdvancedSearchResults = async (username, location, minRepos) => {
  try {
    // Construct the search query string
    let query = '';

    if (username) query += `user:${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `; // Use "repos:>=X" to filter by minimum repositories

    // Perform the API request
    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query.trim())}`);
    
    // Return the array of users (in the 'items' field)
    return response.data.items;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
};