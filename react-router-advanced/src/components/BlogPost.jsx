import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams(); // Access the dynamic ID parameter

  return (
    <div>
      <h1>Blog Post ID: {id}</h1>
      {/* Display blog post content based on the ID */}
    </div>
  );
}

export default BlogPost;