import { useState } from "react";
import { convertDate } from "../../../utils/utils";
import HeartVote from "../../HeartVote";

const CommentCard = ({ comment }) => {
  const [commentVoteChange, setCommentVoteChange] = useState(0);

  const handleCommentVote = () => {
    setCommentVoteChange((currVotes) => currVotes + 1);
    // incrementCommentVotesById(review_id, { inc_votes: 1 }).catch((err) => {
    //   setCommentVoteChange((currVotes) => currVotes - 1);
    // });
    //This endpoint doesn't exist so will just leave this here
  };

  const { body, author, votes, created_at } = comment;
  return (
    <div className="comment">
      <strong className="comment-card-author">{author}</strong>{" "}
      <span className="comment-body">{body}</span>
      <span className="comment-card-date-vote">
        <HeartVote
          handleFunc={handleCommentVote}
          votes={votes}
          voteChange={commentVoteChange}
        />
        {convertDate(created_at)}
      </span>
    </div>
  );
};

export default CommentCard;
