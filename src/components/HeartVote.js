import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import { incrementReviewVotesById } from "../utils/api";

const HeartVote = ({ votes, review_id, expanded }) => {
  const [voteChange, setVoteChange] = useState(0);
  const handleVote = () => {
    const increment = voteChange === 0 ? 1 : -1;
    setVoteChange((currVotes) => currVotes + increment);
    if (review_id) {
      incrementReviewVotesById(review_id, { inc_votes: increment }).catch(
        (err) => {
          setVoteChange((currVotes) => currVotes - increment);
        }
      );
    }
  };

  return (
    <>
      {voteChange === 0 ? (
        <AiOutlineHeart onClick={handleVote} />
      ) : (
        <AiFillHeart onClick={handleVote} />
      )}
      {votes + voteChange} {expanded ? "votes" : null}
    </>
  );
};

export default HeartVote;
