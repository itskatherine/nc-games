import { useEffect, useState } from "react";
import { getAllReviews } from "../../utils/api";
import ReviewCard from "./review-list-children/ReviewCard";

const ReviewList = () => {
  const [reviewList, setReviewList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAllReviews().then((allReviews) => {
      setReviewList(allReviews);
      setIsLoaded(true);
    });
  }, []);

  if (!isLoaded) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <ul className="review-list">
        {reviewList.map((review) => {
          return <ReviewCard review={review} key={review.review_id} />;
        })}
      </ul>
    </>
  );
};

export default ReviewList;
