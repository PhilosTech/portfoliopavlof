import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import redux from "../../../assets/redux-icon.svg";
import next from "../../../assets/next-icon.svg";
import htmlIcon from "../../../assets/html-icon.svg";
import cssIcon from "../../../assets/css-icon.svg";
import jsIcon from "../../../assets/js-icon.svg";
import nodeIcon from "../../../assets/node-icon.svg";
import reactIcon from "../../../assets/react-icon.svg";
import typescriptIcon from "../../../assets/typescript-icon.svg";
import graphqlIcon from "../../../assets/graphql-icon.svg";
import dockerIcon from "../../../assets/docker-icon.svg";
import awsIcon from "../../../assets/aws-icon.svg";
import jestIcon from "../../../assets/jest-icon.svg";
import vitejsIcon from "../../../assets/vitejs-icon.svg";
import webpackIcon from "../../../assets/webpack-icon.svg";
import materialUiIcon from "../../../assets/materialui-icon.svg";
import tailwindIcon from "../../../assets/tailwindcss-icon.svg";

export default function HardSkillsList() {
  return (
    <div className="hard-skills">
    <div className="hability">
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce={true}
        delay={0.1 * 1000}
      >
        <img src={reactIcon} alt="React" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce={true}
        delay={0.11 * 1000}
      >
        <img src={typescriptIcon} alt="Typescript" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce={true}
        delay={0.12 * 1000}
      >
        <img src={redux} alt="redux" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce={true}
        delay={0.13 * 1000}
      >
        <img src={next} alt="next" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce={true}
        delay={0.14 * 1000}
      >
        <img src={jsIcon} alt="JavaScript" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce={true}
        delay={0.15 * 1000}
      >
        <img src={jestIcon} alt="JestJs" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce={true}
        delay={0.16 * 1000}
      >
        <img src={graphqlIcon} alt="graphqlIcon" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce={true}
        delay={0.17 * 1000}
      >
        <img src={vitejsIcon} alt="ViteJs" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce={true}
        delay={0.18 * 1000}
      >
        <img src={nodeIcon} alt="Node" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce={true}
        delay={0.19 * 1000}
      >
        <img src={dockerIcon} alt="docker" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce={true}
        delay={0.20 * 1000}
      >
        <img src={awsIcon} alt="AWS" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce={true}
        delay={0.21 * 1000}
      >
        <img src={webpackIcon} alt="webpack" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce={true}
        delay={0.22 * 1000}
      >
        <img src={materialUiIcon} alt="materialUi" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce={true}
        delay={0.23 * 1000}
      >
        <img src={tailwindIcon} alt="tailwind" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce={true}
        delay={0.24 * 1000}
      >
        <img src={htmlIcon} alt="Html" />
      </ScrollAnimation>
    </div>
    <div className="hability">
      <ScrollAnimation
        animateIn="fadeInUp"
        animateOnce={true}
        delay={0.25 * 1000}
      >
        <img src={cssIcon} alt="Css" />
      </ScrollAnimation>
    </div>
  </div>
  )
}
