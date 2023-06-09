import CurrentTime from "./CurrentTime";
import Matthew from "../../images/matthew.png";
import Arrow from "../../SVGs/Arrow";

const Footer = () => {

  return (
    <footer id="contact">
      <div className="contact-info">
        <div>
          <h2>
            <span className="profile-pic">
              <img src={Matthew} alt="Matthew"></img>
            </span>
            <span> Let's work </span>
            <span className="together">
              together
              <Arrow />
            </span>
          </h2>
        </div>
        <div className="cta-container row">
          <hr></hr>
          <div className="cta">
            <span>Get in touch</span>
          </div>
        </div>
        <div className="btns">
          <div className="first-btn btn">
            <a
              href="mailto:matthewmata151@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              matthewmata151@gmail.com
            </a>
          </div>
          <div className="btn">
            <a
              href="https://www.linkedin.com/in/matthew-mata/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/matthew-mata
            </a>
          </div>
        </div>
      </div>
      <div className="version-and-time">
        <div className="row">
          <div>
            <h5>VERSION</h5>
            <p>2023 © Edition</p>
          </div>
          <div>
            <h5>LOCAL TIME</h5>
            <CurrentTime />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
