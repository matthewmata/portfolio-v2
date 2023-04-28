import { useState } from "react";

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
              <span className={`code-by ${creditHovered && "code-by-active"}`}>
                Code by{" "}
              </span>
              <span className={`matthew ${creditHovered && "matthew-active"}`}>
                <span>Matthew </span>
                <span className={`mata`}>Mata</span>
              </span>
            </span>
            </span>
          </a>
        </span>
      </div>
      <ul className="links-wrap">
        <li className="btn bounce">
          <a href="#about">About</a>
        </li>
        <li className="btn bounce">
          <a href="#work">Work</a>
        </li>
        <li className="btn bounce">
          <a href="#contact">Contact</a>
        </li>
        {/* <li className="btn bounce btn-menu">
            <div>Menu</div>
          </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
