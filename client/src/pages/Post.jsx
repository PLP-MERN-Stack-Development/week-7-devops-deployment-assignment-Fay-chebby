import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postService } from "../api/api";
import CommentList from "../components/CommentList";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    postService
      .getPost(id)
      .then((data) => setPost(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!post) return <div className="p-4">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.createdAt}</p>
      <div className="mb-6">{post.content}</div>
      <CommentList comments={post.comments || []} />
    </div>
  );
};

export default Post;
