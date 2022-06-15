import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { formatCategories } from "../utils/utils";

const NavBar = ({ categories }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <ul className={`burger-menu ${isOpen ? " showMenu" : ""}`}>
        <Link to="/">
          <h2>Home</h2>
        </Link>
        <h2>Categories</h2>
        <ul>
          {categories.map((category, index) => {
            return (
              <li key={index}>
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
