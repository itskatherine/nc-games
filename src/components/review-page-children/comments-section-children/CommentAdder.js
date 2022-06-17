import { useState } from "react";
import { postCommentFromReviewId } from "../../../utils/api";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
import party from "party-js";

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
          party.confetti(event.target);

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

      <form className="comment" onSubmit={handleSubmit}>
        <label className="in-comment">
          <strong>{user}</strong>
        </label>
        <textarea
          className="in-comment"
          onChange={(event) => {
            party.confetti(event.target);
            if (!submitInProgress) {
              setNewComment(event.target.value);
            }
          }}
          name="comment"
          value={newComment}
          type="text"
        ></textarea>
        <button
          className="in-comment"
          type="submit"
          disabled={submitInProgress}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default CommentAdder;
