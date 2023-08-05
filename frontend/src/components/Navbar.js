import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navheader">
      <nav>
        <Link className="nav-item" to="/">
          SEARCH
        </Link>
        <Link className="nav-item" to="/recipes">
          SAVED
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
