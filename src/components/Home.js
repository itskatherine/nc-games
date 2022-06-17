import ReviewList from "./home-children/ReviewList";
import CategoryHeader from "./home-children/CategoryHeader";
import { useParams } from "react-router-dom";

const Home = ({ categories }) => {
  const { category } = useParams();

  return (
    <>
      {category ? (
        <CategoryHeader category={category} categories={categories} />
      ) : null}
      <ReviewList category={category} />
    </>
  );
};

export default Home;
