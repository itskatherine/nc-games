import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import ReviewCard from "./review-page-children/ReviewCard";

const ReviewPage = () => {
  const [review, setReview] = useState({});
  const { review_id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getReviewById(review_id).then((review) => {
      setReview(review);
      setIsLoaded(true);
    });
  }, [review_id]);

  return isLoaded ? <ReviewCard review={review} /> : <p>Loading...</p>;
};

export default ReviewPage;
