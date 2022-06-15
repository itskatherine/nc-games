import { convertDate, shortenText } from "../../../utils/utils";
import { BiComment } from "react-icons/bi";
import { AiFillHeart, AiOutlineCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ReviewCard = ({ review }) => {
  const {
    created_at,
    review_img_url,
    review_body,
    title,
    designer,
    votes,
    comment_count,
    category,
    review_id,
  } = review;

  return (
    <Link to={`/reviews/${review_id}`}>
      <li className="review-card">
        <h2>{title}</h2>
        <img alt={title} className="review-icon" src={review_img_url}></img>
        <h3>{designer}</h3>
        <p>{category}</p>
        <p>{shortenText(review_body, 100)}</p>
        <p>
          <span>
            <AiOutlineCalendar />
            {convertDate(created_at)}
          </span>
          <span className="comment-count">
            <BiComment /> {comment_count}
          </span>
          <span className="vote-count">
            <AiFillHeart /> {votes}
          </span>
        </p>
      </li>
    </Link>
  );
};

export default ReviewCard;
