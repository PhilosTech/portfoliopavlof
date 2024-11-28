import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";
import { personalData } from "../../utils/data/personal-data";
import { HeroCode } from "./HeroCode/HeroCode";
export function Hero() {
  const yearsPassed =
    new Date().getFullYear() - 2017 - (new Date().getMonth() < 11 ? 1 : 0);
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <p>
            Hello <img src={Hello} alt="Hello" width="20px" />. This is
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOnce={true}
          delay={0.2 * 1000}
        >
          <h1>{personalData.name}</h1>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOnce={true}
          delay={0.4 * 1000}
        >
          <p>{` I'm a Professional `}</p>
          <h3>{personalData.designation}</h3>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOnce={true}
          delay={0.6 * 1000}
        >
          <p className="small-resume">
            {yearsPassed}
            {new Date().getMonth() < 11 && new Date().getMonth() > 5
              ? "+"
              : ""}{" "}
            {" " + personalData.yearExperience}
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOnce={true}
          className="container-btn"
          delay={0.8 * 1000}
        >
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </BrowserRouter>
          <a
            href={personalData.resume}
            target="_blank"
            rel="noreferrer"
            download
            className="button light"
          >
            Resume
          </a>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOnce={true}
          delay={1 * 1000}
        >
          <div className="social-media">
            <a href={personalData.linkedin} target="_blank" rel="noreferrer">
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a
              href={personalData.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsapp} alt="Whatsapp" />
            </a>
            <a href={personalData.telegram} target="_blank" rel="noreferrer">
              <img src={telegram} alt="telegram" />
            </a>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation
          animateIn="fadeInRight"
          animateOnce={true}
          delay={1 * 1000}
        >
          <HeroCode yearExperience={yearsPassed} />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
