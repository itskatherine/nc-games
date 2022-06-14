import { shortenText } from "../../../utils/utils";

const ReviewCard = ({ review }) => {
  const { review_img_url, review_body, title, designer, votes, comment_count } =
    review;

  console.log(review_img_url);
  return (
    <>
      <div className="review-card">
        <h2>{title}</h2>
        <h3>{designer}</h3>
        <p>{shortenText(review_body, 100)}</p>
        <p>Votes: {votes}</p>
        <p> Comments:{comment_count}</p>
      </div>
    </>
  );
};

export default ReviewCard;
