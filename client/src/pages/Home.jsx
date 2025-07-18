import React, { useEffect, useState } from "react";
import { postService } from "../api/api";
import PostList from "../components/PostList";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    postService
      .getAllPosts()
      .then((data) => setPosts(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            📚 Recent Blog Posts
          </h1>
          <p className="text-gray-500">
            Explore the latest articles from our community
          </p>
        </div>

        {loading ? (
          <div className="text-center text-gray-600">Loading posts...</div>
        ) : posts.length === 0 ? (
          <div className="text-center text-gray-500">No posts available.</div>
        ) : (
          <PostList posts={posts} />
        )}
      </div>
    </div>
  );
};

export default Home;
