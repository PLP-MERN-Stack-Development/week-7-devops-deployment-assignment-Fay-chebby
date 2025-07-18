const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
      <p className="text-gray-600">
        {post.excerpt || post.content.slice(0, 100) + "..."}
      </p>
    </div>
  );
};
export default PostCard;
