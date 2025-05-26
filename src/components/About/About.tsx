import { Container } from "./styles";
import PavloFilonenko from "../../assets/PavloFilonenko.png";
import ScrollAnimation from "react-animate-on-scroll";
import HardSkillsList from "./HardSkillsList/HardSkillsList";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOnce={true}
          delay={0.1 * 1000}
        >
          <p>
            I'm a web software developer dedicated to helping businesses create
            robust and scalable web applications. Whether you need to build a
            project from scratch, optimise an existing product, or enhance user
            experience, I bring the skills and expertise to deliver solutions
            that align with your goals.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOnce={true}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
          delay={0.15 * 1000}
        >
          <p>Here's how I can help your projects:</p>
        </ScrollAnimation>
        <ul>
          <li>
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOnce={true}
              delay={0.2 * 1000}
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
              <p>
                &#128073; <span>Modern Web Applications: </span> I specialise in
                React and TypeScript to build intuitive, high-performance
                interfaces, including projects that increased user engagement by
                30%.
              </p>
            </ScrollAnimation>
          </li>
          <li>
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOnce={true}
              delay={0.22 * 1000}
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
              <p>
                &#128073; <span>Performance Optimisation: </span> I improve
                application speed and responsiveness, reducing load times by
                35-40% and delivering a smoother user experience.
              </p>
            </ScrollAnimation>
          </li>
          <li>
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOnce={true}
              delay={0.24 * 1000}
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
              <p>
                &#128073; <span>Scalable Solutions: </span>
                From single-page apps to complex platforms, I ensure your
                projects are ready to handle growth and increased traffic
                seamlessly.
              </p>
            </ScrollAnimation>
          </li>
          <li>
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOnce={true}
              delay={0.26 * 1000}
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
              <p>
                &#128073; <span>Reliable Development: </span>
                By implementing test-driven development, I've significantly
                reduced post-deployment bugs, ensuring smoother project
                launches.
              </p>
            </ScrollAnimation>
          </li>
          <li>
            <ScrollAnimation
              animateIn="fadeInLeft"
              animateOnce={true}
              delay={0.28 * 1000}
              style={{ marginTop: "2rem", marginBottom: "2rem" }}
            >
              <p>
                &#128073; <span>End-to-End Collaboration: </span>
                I've successfully delivered 20+ projects, meeting tight
                deadlines and exceeding client expectations through a clear,
                result-oriented approach.
              </p>
            </ScrollAnimation>
          </li>
        </ul>
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOnce={true}
          delay={0.3 * 1000}
        >
          <p>
            Let's collaborate to bring your vision to life with efficient,
            user-focused, and scalable solutions that drive measurable results.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          animateOnce={true}
          delay={0.4 * 1000}
        >
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <HardSkillsList />
      </div>

      <ScrollAnimation
        animateIn="fadeInRight"
        delay={0.2 * 1000}
        animateOnce={true}
        style={{ display: "flex", justifyContent: "end" }}
      >
        <div className="about-image">
          <img src={PavloFilonenko} alt="Pavlo Filonenko" />
        </div>
      </ScrollAnimation>
    </Container>
  );
}
