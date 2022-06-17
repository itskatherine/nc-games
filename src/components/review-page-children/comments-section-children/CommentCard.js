import { convertDate } from "../../../utils/utils";
import HeartVote from "../../HeartVote";
import BinButton from "./comment-card-children/BinButton";

const CommentCard = ({ comment, user, setCommentList }) => {
  const { body, author, votes, created_at, comment_id } = comment;
  return (
    <div className="comment" key={comment_id}>
      <strong className="start">{author}</strong>
      <span className="end">{body}</span>
      <span className="end">
        <HeartVote votes={votes} expanded={false} />
      </span>
      <span>{convertDate(created_at)}</span>
      {user === author ? (
        <BinButton
          className="end"
          setCommentList={setCommentList}
          comment_id={comment_id}
          user={user}
        />
      ) : null}
    </div>
  );
};

export default CommentCard;
