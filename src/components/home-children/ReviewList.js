import { useEffect, useState } from "react";
import { getAllReviews } from "../../utils/api";
import ErrorPage from "../ErrorPage";
import ReviewCard from "./review-list-children/ReviewCard";

const ReviewList = ({ category }) => {
  const [reviewList, setReviewList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [sortCategory, setSortCategory] = useState("created_at");
  const [order, setOrder] = useState("DESC");
  const [error, setError] = useState(false);

  const toggleSortCategory = (newSortCategory) => {
    setSortCategory(newSortCategory);
  };

  const toggleOrder = () => {
    setOrder((currentOrder) => {
      return currentOrder === "ASC" ? "DESC" : "ASC";
    });
  };

  useEffect(() => {
    getAllReviews(order, sortCategory, category)
      .then((allReviews) => {
        setReviewList(allReviews);
        setIsLoaded(true);
        setError(false);
      })
      .catch((err) => {
        setError(err.response.data.msg);
      });
  }, [category, sortCategory, order]);

  if (error) {
    return <ErrorPage message={error} />;
  }
  if (!isLoaded) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div className="sorting">
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
      </div>
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
