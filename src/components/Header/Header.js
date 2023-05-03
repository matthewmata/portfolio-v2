import NavBar from "./NavBar";
import Arrow from "../../SVGs/Arrow";
import Matthew from "../../images/matthew-1.png";

const Header = () => {
  return (
    <header className="home-header" id="#home">
      <div className="overlay personal-image">
        <img src={Matthew} alt="Matthew"></img>
      </div>
      <NavBar />
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
  );
};

export default Header;
