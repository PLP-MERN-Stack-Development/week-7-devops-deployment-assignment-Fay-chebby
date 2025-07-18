import PostCard from "./PostCard";

const PostList = ({ posts }) => {
  return (
    <div className="grid gap-4">
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};
export default PostList;
