import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home </NavLink>
          </li>
          <li>
            <NavLink to="/review">Review </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard">Dashboard </NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog </NavLink>
          </li>
          <li>
            <NavLink to="/about">About </NavLink>
          </li>
          <li>
            <NavLink to="/contect">Contect </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
