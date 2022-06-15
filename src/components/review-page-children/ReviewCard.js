import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { convertDate, formatCategories } from "../../utils/utils";

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
  } = review;

  

  return (
    <>
      <div className="review-page">
        <h2>{title}</h2>
        <h3>Designer: {designer}</h3>
        <p className="category-header">{formatCategories(category)}</p>
        <img className="review-page-icon" src={review_img_url}></img>
        <p>
          <AiOutlineHeart /> {votes} votes
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
