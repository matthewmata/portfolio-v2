import Project from "./Project";

import PROJECT_LIST from "./projects-list";

const Work = () => {
  return (
    <section className="work" id="work">
      <div className="section-title">
        <h4>Recent Work</h4>
        <hr></hr>
      </div>
      <div className="grid projects">
        {PROJECT_LIST.map((project, i) => (
          <Project
            name={project.name}
            image={project.image}
            url={project.url}
            github={project.github}
            type={project.type}
            backgroundColor={project.backgroundColor}
            key={project.name}
          />
        ))}
      </div>
    </section>
  );
};

export default Work;
