import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

// Define the fetch function to get posts
const fetchPosts = async () => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return data;
};

const PostsComponent = () => {
  // Use useQuery to fetch data with additional options
  const { data, error, isLoading, isError, refetch } = useQuery(
    'posts', 
    fetchPosts, 
    {
      cacheTime: 1000 * 60 * 10, // Cache data for 10 minutes
      staleTime: 1000 * 60 * 1,  // Data is considered fresh for 1 minute
      refetchOnWindowFocus: true, // Refetch data when the window gains focus
      keepPreviousData: true // Keep previous data while new data is being fetched
    }
  );

  // Handle loading state
  if (isLoading) return <p>Loading...</p>;

  // Handle error state
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refetch Data</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;