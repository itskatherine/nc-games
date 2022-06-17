import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { deleteCommentById } from "../../../../utils/api";

const BinButton = ({ setCommentList, comment_id }) => {
  const [deleteInProgress, setDeleteInProgress] = useState(false);

  const handleDelete = () => {
    setDeleteInProgress(true);
    deleteCommentById(comment_id).then(() => {
      setCommentList((currentCommentList) => {
        const commentListToFilter = [...currentCommentList];
        return commentListToFilter.filter((comment) => {
          return comment.comment_id !== comment_id;
        });
      });
      setDeleteInProgress(false);
    });
  };
  return (
    <button onClick={handleDelete} disabled={deleteInProgress}>
      <FaTrash />
    </button>
  );
};

export default BinButton;
