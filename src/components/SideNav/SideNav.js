import { Link } from "react-scroll";

const SideNav = ({ setHamburgerActive }) => {
  return (
    <>
      <div className="backdrop" onClick={() => setHamburgerActive(false)}></div>
      <nav className="side-nav">
        <div className="side-nav-inner">
          <h5>NAVIGATION</h5>
          <hr></hr>
          <ul>
            <li className="btn">
              <Link activeClass="active" smooth spy to="home-header">
                <h2 onClick={() => setHamburgerActive(false)}>Home</h2>
              </Link>
            </li>
            <li className="btn">
              <Link activeClass="active" smooth spy to="about">
                <h2 onClick={() => setHamburgerActive(false)}>About</h2>
              </Link>
            </li>
            <li className="btn">
              <Link activeClass="active" smooth spy to="work">
                <h2 onClick={() => setHamburgerActive(false)}>Work</h2>
              </Link>
            </li>
            <li className="btn">
              <Link activeClass="active" smooth spy to="contact">
                <h2 onClick={() => setHamburgerActive(false)}>Contact Me</h2>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default SideNav;
