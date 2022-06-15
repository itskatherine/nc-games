import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const HeartVote = ({ handleFunc, votes, voteChange }) => {
  return (
    <p>
      {voteChange === 0 ? (
        <AiOutlineHeart onClick={handleFunc} />
      ) : (
        <AiFillHeart />
      )}
      {votes + voteChange} votes
    </p>
  );
};

export default HeartVote;
