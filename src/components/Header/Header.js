import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import NavBar from "./NavBar";
import Arrow from "../../SVGs/Arrow";
import Hamburger from "../../SVGs/Hamburger";
// import Matthew from "../../images/matthew.png";

const Header = ({ toggleSideNavBar, hamburgerActive }) => {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let height = 175;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll < height) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <Link activeClass="active" smooth spy to="home-header">
        <header className="home-header" id="home">
          <div className="overlay personal-image">
            <img
              src="https://matthew-mata-portfolio.s3.amazonaws.com/matthew.png"
              alt="Matthew"
            ></img>
          </div>
          <NavBar toggleSideNavBar={toggleSideNavBar} />
          <div className="container">
            <div className="row">
              <div className="title">
                <div className="header-above-h4">
                  <Arrow />
                </div>
                <h4>Software Engineer</h4>
              </div>
            </div>
          </div>
          <div className="big-name">
            <div className="name-wrap auto-side-scroll">
              <h1>
                Matthew Mata
                <span className="spacer">―</span>
              </h1>
            </div>
            <div className="name-wrap auto-side-scroll auto-side-scroll">
              <h1>
                Matthew Mata
                <span className="spacer">―</span>
              </h1>
            </div>
          </div>
        </header>
      </Link>
      {(isVisible || hamburgerActive) && (
        <div className="hamburger-btn" onClick={() => toggleSideNavBar()}>
          <Hamburger />
        </div>
      )}
    </>
  );
};

export default Header;
