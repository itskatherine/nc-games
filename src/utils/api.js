import axios from "axios";

const boardgameAPI = axios.create({
  baseURL: "https://katherineboardgames.herokuapp.com/api/",
});

export const getAllReviews = () => {
  return boardgameAPI.get("/reviews").then((response) => {
    return response.data.reviews;
  });
};

export const getAllCategories = () => {
  return boardgameAPI.get("/categories").then((response) => {
    return response.data.categories;
  });
};

export const getReviewById = (review_id) => {
  return boardgameAPI.get(`/reviews/${review_id}`).then((response) => {
    return response.data.review;
  });
};

export const incrementReviewVotesById = (review_id, request_body) => {
  return boardgameAPI
    .patch(`/reviews/${review_id}`, request_body)
    .then((response) => {
      return response.data.updatedReview.votes;
    });
};

export const getCommentsFromReviewId = (review_id) => {
  return boardgameAPI.get(`/reviews/${review_id}/comments`).then((response) => {
    return response.data.comments;
  });
};
