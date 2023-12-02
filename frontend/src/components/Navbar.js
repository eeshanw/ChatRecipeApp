import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  // const handleReload = () => {
  //   window.location.reload();
  // };

  return (
    <header className="navheader">
      <nav>
        <Link className="nav-item" to="/">
          Search
        </Link>
        <Link className="nav-item" to="/recipes">
          Saved
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
