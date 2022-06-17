import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { formatCategories } from "../utils/utils";

const BurgerMenu = ({ categories }) => {
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
              <li key={index} className="expanded-burger-menu">
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

export default BurgerMenu;
