const CommentAdder = ({ setCommentList, user }) => {
  return (
    <>
      <div className="comment">
        <form>
          <label>
            <strong>{user}</strong>
          </label>
          <input type="text"></input>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default CommentAdder;
