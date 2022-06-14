import axios from "axios";

const boardgameAPI = axios.create({
  baseURL: "https://katherineboardgames.herokuapp.com/api/",
});

export const getAllReviews = () => {
  return boardgameAPI.get("/reviews").then((response) => {
    return response.data.reviews;
  });
};
