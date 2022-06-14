import { formatCategories } from "../../utils/utils";

const CategoryHeader = ({ category }) => {
  return (
    <h2 className="category-header">
      CATEGORY: <strong>{formatCategories(category)}</strong>
    </h2>
  );
};
export default CategoryHeader;
