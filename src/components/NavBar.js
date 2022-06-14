import { Link } from "react-router-dom";

const NavBar = ({ categories }) => {
  return (
    <>
      <Link to="/">
        <h2>Home</h2>
      </Link>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => {
          return (
            <li key={index}>
              <Link to={`/reviews/categories/${category.slug}`}>
                {category.slug}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavBar;
