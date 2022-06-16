import { convertDate } from "../../../utils/utils";
import HeartVote from "../../HeartVote";

const CommentCard = ({ comment }) => {
  const { body, author, votes, created_at } = comment;
  return (
    <div className="comment">
      <strong className="comment-card-author">{author}</strong>{" "}
      <span className="comment-body">{body}</span>
      <span className="comment-card-date-vote">
        <HeartVote votes={votes} expanded={false} />
        {convertDate(created_at)}
      </span>
    </div>
  );
};

export default CommentCard;
