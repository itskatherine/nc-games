import { useEffect, useState } from "react";
import { getCommentsFromReviewId } from "../../utils/api";
import CommentCard from "./comments-section-children/CommentCard";

const CommentsSection = ({ review_id }) => {
  const [commentsList, setCommentList] = useState([]);

  useEffect(() => {
    getCommentsFromReviewId(review_id).then((comments) => {
      setCommentList(comments);
    });
  }, []);

  return commentsList.map((comment) => {
    return <CommentCard comment={comment} />;
  });
};

export default CommentsSection;
