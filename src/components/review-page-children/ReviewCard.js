const ReviewCard = ({ review }) => {
  const { review_id, title } = review;
  return (
    <p>
      Review with review id {review_id} and title {title}
    </p>
  );
};

export default ReviewCard;
