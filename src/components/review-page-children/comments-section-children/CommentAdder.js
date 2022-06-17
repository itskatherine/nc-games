import { useState } from "react";
import { postCommentFromReviewId } from "../../../utils/api";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";

const CommentAdder = ({ setCommentList, user, review_id }) => {
  const [newComment, setNewComment] = useState("");
  const [submitInProgress, setSubmitInProgress] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment) {
      setSubmitInProgress(true);
      postCommentFromReviewId(review_id, user, newComment).then(
        (postedComment) => {
          setCommentList((currentCommentList) => {
            const newList = [postedComment.comment, ...currentCommentList];
            return newList;
          });
          setNewComment("");
          toast.success("Comment Posted");
          setSubmitInProgress(false);
        }
      );
    } else {
      toast.error("You can't submit an empty comment");
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="comment">
        <form onSubmit={handleSubmit}>
          <label>
            <strong>{user}</strong>
          </label>
          <textarea
            onChange={(event) => {
              if (!submitInProgress) {
                setNewComment(event.target.value);
              }
            }}
            rows="4"
            cols="50"
            name="comment"
            value={newComment}
          ></textarea>
          <button type="submit" disabled={submitInProgress}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CommentAdder;
