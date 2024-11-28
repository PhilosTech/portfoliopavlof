import { Container } from "./styles";
import { ProjectItem } from "./ProjectItem/ProjectItem";
import ScrollAnimation from "react-animate-on-scroll";
import { projectsData } from "../../utils/data/projectsData";

export function Projects() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projectsData.map((project) => (
          <ScrollAnimation animateIn="flipInX" animateOnce={true}>
            <ProjectItem project={project} />
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
