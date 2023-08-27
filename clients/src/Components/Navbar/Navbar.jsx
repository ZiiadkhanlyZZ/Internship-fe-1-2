import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <h1>
            <Link to="/articles">SHARETRADE.com</Link>
          </h1>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
