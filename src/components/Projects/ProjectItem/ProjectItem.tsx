import React from "react";
import { Container } from "./styles";
import githubIcon from "../../../assets/github.svg";

interface Props {
  project: {
    name: string;
    tools: string;
    description: string;
    myRole: string;
    link: string | null;
  };
}

export function ProjectItem({ project }: Props) {
  return (
    <Container>
      <section className="code-editor">
        <header className="window-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </header>
        <pre className="code-block">
          <code>
            <div>
              <span className="keyword">const</span> project = {"{"}
            </div>
            <div className="indent-1">
              name: <span className="function">'{project.name}'</span>,
            </div>
            <div className="indent-1">
              tools: <span className="function">{project.tools}</span>,
            </div>
            <div className="indent-1">
              myRole: <span className="function">'{project.myRole}'</span>,
            </div>
            <div className="indent-1">
              <span className="boolean">description:</span>{" "}
              <span className="variable">'{project.description}'</span>,
            </div>
            <div className="indent-1">
              link:{" "}
              <span className="function">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                  </a>
                ) : (
                  "'Code unavailable due to confidentiality.'"
                )}
              </span>
            </div>
          </code>
        </pre>
      </section>
    </Container>
  );
}
