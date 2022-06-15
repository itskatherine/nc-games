import { Link } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <>
      <header>
        <Link to="/">
          <h1>Katherinetime Boardgame Reviews</h1>
        </Link>
        <p>Welcome, {user}</p>
      </header>
    </>
  );
};

export default Header;
