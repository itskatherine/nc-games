import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../utils/api";
import ErrorPage from "./ErrorPage";
import CommentsSection from "./review-page-children/CommentsSection";
import ReviewCard from "./review-page-children/ReviewCard";

const ReviewPage = ({ user }) => {
  const [review, setReview] = useState({});
  const { review_id } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getReviewById(review_id)
      .then((review) => {
        setReview(review);
        setIsLoaded(true);
      })
      .catch((err) => {
        setError({ err });
      });
  }, [review_id]);

  if (error) {
    return <ErrorPage message={error.err.message} />;
  }

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <ReviewCard review={review} />
      <CommentsSection review_id={review_id} user={user} />
    </>
  );
};

export default ReviewPage;
