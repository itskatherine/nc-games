import { Link } from "react-router-dom";
import { formatCategories } from "../utils/utils";

const NavBar = ({ categories }) => {
  return (
    <>
      <ul>
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <h2>Categories</h2>
        <ul>
          {categories.map((category, index) => {
            return (
              <li className="category-menu" key={index}>
                <Link to={`/reviews/categories/${category.slug}`}>
                  {formatCategories(category.slug)}
                </Link>
              </li>
            );
          })}
        </ul>
      </ul>
    </>
  );
};

export default NavBar;
