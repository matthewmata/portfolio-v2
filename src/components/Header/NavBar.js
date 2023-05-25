import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [creditHovered, setCreditHovered] = useState(false);

  return (
    <nav className="nav-bar">
      <div className="credits-top">
        <span
          className="btn"
          onMouseEnter={() => setCreditHovered(true)}
          onMouseLeave={() => setCreditHovered(false)}
        >
          <a href="#home">
            <span className="btn-text">
              <span className={`credit ${creditHovered && "credit-active"}`}>
                ©
              </span>
              <span className="cbm">
                <span
                  className={`code-by ${creditHovered && "code-by-active"}`}
                >
                  Code by{" "}
                </span>
                <span
                  className={`matthew ${creditHovered && "matthew-active"}`}
                >
                  <span>Matthew </span>
                  <span className={`mata`}>Mata</span>
                </span>
              </span>
            </span>
          </a>
        </span>
      </div>
      <ul className="links-wrap">
        <li className="btn link bounce">
          <Link activeClass="active" smooth spy to="about">
            About
          </Link>
        </li>
        <li className="btn link bounce">
          <Link activeClass="active" smooth spy to="work">
            Work
          </Link>
        </li>
        <li className="btn link bounce">
          <Link activeClass="active" smooth spy to="contact">
            Contact
          </Link>
        </li>
        <li className="btn btn-menu">
          <div>Menu</div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
