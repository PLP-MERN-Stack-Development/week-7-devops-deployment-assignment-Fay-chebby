import React, { useState } from "react";
import PostForm from "../components/PostForm";
import { postService } from "../api/api";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    try {
      const newPost = await postService.createPost(formData);
      navigate(`/post/${newPost._id}`);
    } catch (err) {
      setError("Failed to create post");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold mb-4">Create New Post</h1>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePost;
