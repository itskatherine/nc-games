import { useEffect, useState } from "react";
import { getAllReviews } from "../../utils/api";
import ReviewCard from "./review-list-children/ReviewCard";

const ReviewList = () => {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    getAllReviews().then((allReviews) => {
      setReviewList(allReviews);
    });
  }, []);

  return (
    <>
      <ul>
        {reviewList.map((review) => {
          return <ReviewCard review={review} key={review.review_id} />;
        })}
      </ul>
    </>
  );
};

export default ReviewList;
