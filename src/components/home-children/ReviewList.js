import { useEffect, useState } from "react";
import { getReviews } from "../../utils/api";
import ReviewCard from "./review-list-children/ReviewCard";

const ReviewList = ({ category }) => {
  const [reviewList, setReviewList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sortCategory, setSortCategory] = useState("created_at");
  const [order, setOrder] = useState("DESC");

  const toggleSortCategory = (newSortCategory) => {
    setSortCategory(newSortCategory);
  };

  const toggleOrder = () => {
    setOrder((currentOrder) => {
      return currentOrder === "ASC" ? "DESC" : "ASC";
    });
  };

  useEffect(() => {
    getReviews(order, sortCategory).then((allReviews) => {
      if (category) {
        setReviewList(
          allReviews.filter((review) => review.category === category)
        );
      } else {
        setReviewList(allReviews);
      }

      setIsLoaded(true);
    });
  }, [category, sortCategory, order]);

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
      <button onClick={toggleOrder}>{order === "ASC" ? "↑" : "↓"}</button>
      <ul className="review-list">
        {reviewList.map((review) => {
          return <ReviewCard review={review} key={review.review_id} />;
        })}
      </ul>
    </>
  );
};

export default ReviewList;
