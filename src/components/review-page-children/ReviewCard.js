import { useState } from "react";
import { incrementReviewVotesById } from "../../utils/api";
import { convertDate, formatCategories } from "../../utils/utils";
import HeartVote from "../HeartVote";

const ReviewCard = ({ review }) => {
  const {
    owner,
    title,
    designer,
    category,
    review_img_url,
    votes,
    review_body,
    created_at,
    review_id,
  } = review;

  const [voteChange, setVoteChange] = useState(0);

  const handleVote = () => {
    console.log("handleVote is happening");
    setVoteChange((currVotes) => currVotes + 1);
    incrementReviewVotesById(review_id, { inc_votes: 1 }).catch((err) => {
      setVoteChange((currVotes) => currVotes - 1);
    });
  };

  return (
    <>
      <div className="review-page">
        <h2>{title}</h2>
        <h3>Designer: {designer}</h3>
        <p className="category-header">{formatCategories(category)}</p>
        <img
          alt={title}
          className="review-page-icon"
          src={review_img_url}
        ></img>
        <HeartVote
          handleFunc={handleVote}
          votes={votes}
          voteChange={voteChange}
          expanded={true}
        />
        <div className="review-body">
          <p>{review_body}</p>
          <p className="date">
            PUBLISHED: {convertDate(created_at)} by <strong>{owner}</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
