import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const HeartVote = ({ handleFunc, votes, voteChange, expanded }) => {

  return (
    <p>
      {voteChange === 0 ? (
        <AiOutlineHeart onClick={handleFunc} />
      ) : (
        <AiFillHeart />
      )}
      {votes + voteChange} {expanded ? "votes" : null}
    </p>
  );
};

export default HeartVote;
