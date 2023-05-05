const Project = ({ name, image, url, githubURL }) => {
  return (
    <li>
      <img></img>
      <h1>{name}</h1>
      <p>
        <a href={url}></a>
      </p>
      <img>
        <a href={githubURL}></a>
      </img>
    </li>
  );
};
