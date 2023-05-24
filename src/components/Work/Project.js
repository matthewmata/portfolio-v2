import Arrow from "../../SVGs/ArrowBlack"

const Project = ({ name, image, url, github, backgroundColor, type }) => {
  return (
    <article className="project">
      <a href={url}>
        <div
          className="tile-image"
          style={{ backgroundColor: backgroundColor }}
        >
          <img src={image} alt={name}></img>
        </div>
      </a>
      <h2>{name}</h2>
      <hr></hr>
      <div className="row">
        <h4>{type}</h4>
        <h4>
          <a href={url}>
            <span>Live Site</span>
            <span>
              <Arrow />
            </span>
          </a>
          {github && (
            <a href={github}>
              <span>Github</span>
              <span>
                <Arrow />
              </span>
            </a>
          )}
        </h4>
      </div>
    </article>
  );
};

export default Project;