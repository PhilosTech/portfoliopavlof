import React from "react";
import { Container } from "./codeStyles";
import { personalData } from "../../../utils/data/personal-data";

interface Props {
  yearExperience: number;
}

export function HeroCode({ yearExperience }: Props) {
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
              <span className="keyword">const</span> coder = {"{"}
            </div>
            <div className="indent-1">
              name: <span className="function">'{personalData.name}'</span>,
            </div>
            <div className="indent-1">
              skills:{" "}
              <span className="function">
                ['React', 'NextJS', 'TypeScript', 'JavaScript', 'GraphQL',
                'Tailwind CSS', 'Redux', 'React Query', 'Socket.IO', 'RESTful
                APIs', 'Jest.js', 'Cypress', 'Vite.js', 'Node.js', 'Express.js',
                'MongoDB', 'PostgreSQL', 'Supabase', 'GraphQL', 'CI/CD', 'Git',
                ''Stripe', TDD', 'Webpack', 'Docker', 'AWS', 'Web3.js', 'Strapi']
              </span>
              ,
            </div>
            <div className="indent-1">
              hardWorker: <span className="function">true</span>,
            </div>
            <div className="indent-1">
              quickLearner: <span className="function">true</span>,
            </div>
            <div className="indent-1">
              problemSolver: <span className="function">true</span>,
            </div>
            <div className="indent-1">
              <span className="boolean">hireable:</span>{" "}
              <span className="function">function</span>() {"{"}
            </div>
            <div className="indent-2">
              <span className="return">return</span>{" "}
              <span className="variable">this</span>.hardWorker &amp;&amp;{" "}
              <span className="variable">this</span>.problemSolver &amp;&amp;
              <span className="variable">this</span>.skills.length &gt;={" "}
              <span className="function">{yearExperience}</span>;
            </div>
            <div className="indent-1">{"}"},</div>
            <div className="indent-0">{"}"};</div>
          </code>
        </pre>
      </section>
    </Container>
  );
}
