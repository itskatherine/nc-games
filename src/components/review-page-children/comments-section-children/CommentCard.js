import { convertDate } from "../../../utils/utils";
import HeartVote from "../../HeartVote";
import BinButton from "./comment-card-children/BinButton";

const CommentCard = ({ comment, user, setCommentList }) => {
  const { body, author, votes, created_at, comment_id } = comment;
  return (
    <div className="comment" key={comment_id}>
      <strong className="comment-card-author">{author}</strong>{" "}
      <span className="comment-body">{body}</span>
      <span className="comment-card-date-vote">
        <HeartVote votes={votes} expanded={false} />
        {convertDate(created_at)}
      </span>
      {user === author ? (
        <BinButton setCommentList={setCommentList} comment_id={comment_id} />
      ) : null}
    </div>
  );
};

export default CommentCard;
