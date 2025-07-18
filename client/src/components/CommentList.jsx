const CommentList = ({ comments }) => {
  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>
      {comments.map((comment) => (
        <div key={comment._id} className="border-t pt-2">
          <p className="text-sm">{comment.content}</p>
        </div>
      ))}
    </div>
  );
};
export default CommentList;
