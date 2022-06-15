import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import ReviewCard from "./review-page-children/ReviewCard";

const ReviewPage = () => {
  const [review, setReview] = useState({});
  const { review_id } = useParams();

  useEffect(() => {
    getReviewById(review_id).then((review) => {
      setReview(review);
    });
  }, [review_id]);

  return <ReviewCard review={review} />;
};

export default ReviewPage;
