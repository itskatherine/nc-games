import axios from "axios";

const boardgameAPI = axios.create({
  baseURL: "https://katherineboardgames.herokuapp.com/api/",
});

export const getReviews = (order, sort_category) => {
  const endPointStr = `/reviews/?sort_by=${sort_category}&order=${order}`;

  return boardgameAPI.get(endPointStr).then((response) => {
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

export const postCommentFromReviewId = (review_id, user, newComment) => {
  const request = {
    username: user,
    body: newComment,
  };

  return boardgameAPI
    .post(`/reviews/${review_id}/comments`, request)
    .then((response) => {
      return response.data;
    });
};

export const deleteCommentById = (comment_id) => {
  return boardgameAPI.delete(`/comments/${comment_id}`);
};
