import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const CommentCard = ({ comment }) => {
  const { body, author, votes, created_at } = comment;
  return (
    <>
      <p>
        <strong>{author}</strong> {body}
        <span className="comment-votes">
        </span>
      </p>
    </>
  );
};

export default CommentCard;
