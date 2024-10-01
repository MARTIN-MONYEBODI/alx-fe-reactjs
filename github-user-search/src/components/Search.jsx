import React, { useState } from 'react';
import { fetchAdvancedSearchResults } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') setUsername(value);
    if (name === 'location') setLocation(value);
    if (name === 'repos') setRepos(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setUsers([]);

    try {
      const searchResults = await fetchAdvancedSearchResults(username, location, repos);
      setUsers(searchResults);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-component p-6 bg-gray-100 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
          placeholder="GitHub Username"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="location"
          value={location}
          onChange={handleInputChange}
          placeholder="Location"
          className="p-2 border rounded"
        />
        <input
          type="number"
          name="repos"
          value={repos}
          onChange={handleInputChange}
          placeholder="Minimum Repos"
          className="p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 col-span-1 md:col-span-3"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">Looks like we can't find any users.</p>}

      <div className="user-results mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <div key={user.id} className="user-card p-4 bg-white rounded-lg shadow">
            <img src={user.avatar_url} alt={user.login} className="rounded-full w-16 h-16" />
            <h3 className="text-lg font-semibold">{user.login}</h3>
            {user.location && <p className="text-sm">Location: {user.location}</p>}
            <p className="text-sm">Repos: {user.public_repos}</p>
            <a
              href={user.html_url}
              className="text-blue-500 underline mt-2 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;