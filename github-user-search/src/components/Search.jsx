iimport React, { useState } from 'react';
import { fetchAdvancedSearchResults } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);

  // Handle form submission and API call
  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Fetch the search results from the GitHub API
      const users = await fetchAdvancedSearchResults(username, location, minRepos);
      
      // Check if users were found
      if (users.length === 0) {
        setError("Looks like we can't find the user");
      } else {
        setResults(users); // Set the results to display
      }
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-component p-6 bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={handleSearch} className="space-y-4">
        <div>
          <label className="block text-gray-700">GitHub Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="input-field"
          />
        </div>
        <div>
          <label className="block text-gray-700">Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            className="input-field"
          />
        </div>
        <div>
          <label className="block text-gray-700">Minimum Repositories</label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            placeholder="Enter minimum repositories"
            className="input-field"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {results.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-bold">Search Results:</h3>
          <ul className="space-y-4">
            {results.map((user) => (
              <li key={user.id} className="p-4 bg-white rounded shadow">
                <div className="flex items-center">
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-bold">{user.login}</h4>
                    <p className="text-sm text-gray-600">{user.location || 'Location not available'}</p>
                    <a
                      href={user.html_url}
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;