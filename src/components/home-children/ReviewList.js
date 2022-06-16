import { useEffect, useState } from "react";
import { getReviews } from "../../utils/api";
import ReviewCard from "./review-list-children/ReviewCard";

const ReviewList = ({ category }) => {
  const [reviewList, setReviewList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sortCategory, setSortCategory] = useState("created_at");

  const toggleSortCategory = (newSortCategory) => {
    setSortCategory(newSortCategory);
  };

  useEffect(() => {
    getReviews("asc", sortCategory).then((allReviews) => {
      if (category) {
        setReviewList(
          allReviews.filter((review) => review.category === category)
        );
      } else {
        setReviewList(allReviews);
      }

      setIsLoaded(true);
    });
  }, [category, sortCategory]);

  if (!isLoaded) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <label>sort by: </label>
      <button
        onClick={() => {
          toggleSortCategory("created_at");
        }}
      >
        Date
      </button>
      <button
        onClick={() => {
          toggleSortCategory("comment_count");
        }}
      >
        Comment count
      </button>
      <button
        onClick={() => {
          toggleSortCategory("votes");
        }}
      >
        Votes
      </button>
      <button>Asc/Desc</button>
      <ul className="review-list">
        {reviewList.map((review) => {
          return <ReviewCard review={review} key={review.review_id} />;
        })}
      </ul>
    </>
  );
};

export default ReviewList;
