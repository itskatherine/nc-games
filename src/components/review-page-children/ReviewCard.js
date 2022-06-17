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
        <p>
          <HeartVote votes={votes} expanded={true} review_id={review_id} />
        </p>
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
