import { useEffect, useState } from "react";
import { getCommentsFromReviewId } from "../../utils/api";
import CommentAdder from "./comments-section-children/CommentAdder";
import CommentCard from "./comments-section-children/CommentCard";

const CommentsSection = ({ review_id, user }) => {
  const [commentsList, setCommentList] = useState([]);

  useEffect(() => {
    getCommentsFromReviewId(review_id).then((comments) => {
      setCommentList(comments);
    });
  }, [review_id]);

  return (
    <>
      <CommentAdder
        setCommentList={setCommentList}
        user={user}
        review_id={review_id}
      />
      <ul className="comment-list">
        {commentsList.map((comment) => {
          return (
            <CommentCard
              key={comment.comment_id}
              comment={comment}
              user={user}
              setCommentList={setCommentList}
            />
          );
        })}
      </ul>
    </>
  );
};

export default CommentsSection;
