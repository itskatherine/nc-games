import { extractCategorySlugs, formatCategories } from "../../utils/utils";
import ErrorPage from "../ErrorPage";

const CategoryHeader = ({ category, categories }) => {
  const categorieSlugs = extractCategorySlugs(categories);

  if (!categorieSlugs.includes(category)) {
    const message = "That category does not exist!";
    return <ErrorPage message={message} />;
  }

  return (
    <h2 className="category-header">
      CATEGORY: <strong>{formatCategories(category)}</strong>
    </h2>
  );
};
export default CategoryHeader;
