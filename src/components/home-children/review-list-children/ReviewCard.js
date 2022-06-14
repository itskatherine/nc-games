import { shortenText } from "../../../utils/utils";
import { BiComment } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";

const ReviewCard = ({ review }) => {
  const { review_img_url, review_body, title, designer, votes, comment_count } =
    review;

  console.log(review_img_url);
  return (
    <>
      <div className="review-card">
        <h2>{title}</h2>
        <img className="review-icon" src={review_img_url}></img>
        <h3>{designer.toUpperCase()}</h3>
        <p>{shortenText(review_body, 100)}</p>
        <p>
          <span className="comment-count">
            <BiComment /> {comment_count}
          </span>
          <span className="vote-count">
            <AiFillHeart /> {votes}
          </span>
        </p>
      </div>
    </>
  );
};

export default ReviewCard;