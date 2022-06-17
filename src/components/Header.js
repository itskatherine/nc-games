import { Link } from "react-router-dom";
import { FaDiceD20 } from "react-icons/fa";

const Header = ({ user }) => {
  return (
    <>
      <header>
        <Link to="/">
          <FaDiceD20 size={70}/>
          <h1>Katherinetime Boardgame Reviews</h1>
        </Link>
        <p>Welcome, {user}</p>
      </header>
    </>
  );
};

export default Header;
