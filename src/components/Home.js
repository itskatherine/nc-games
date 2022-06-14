import ReviewList from "./home-children/ReviewList";
import CategoryHeader from "./home-children/CategoryHeader";
import { useParams } from "react-router-dom";

const Home = () => {
  //will contain a conditional header (saying categories)
  //will contain input to sort results
  const { category } = useParams();
  return (
    <>
      {category ? <CategoryHeader category={category} /> : null}
      <ReviewList category={category} />
    </>
  );
};

export default Home;
