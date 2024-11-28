import React, { useState } from "react";
import {
  AccordionContainer,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
  AccordionTitle,
  AccordionDescription,
  Container,
} from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const services = [
    {
      id: "01",
      title: "Custom Software Development",
      description: `I specialise in creating modern, scalable web applications tailored to your business needs. 
        From sleek admin panels to engaging user interfaces, I deliver solutions that are both intuitive and high-performing. 
        Each project undergoes rigorous testing to ensure reliability and seamless functionality across all devices.`,
    },
    {
      id: "02",
      title: "Performance Optimisation",
      description: `Boost the speed and responsiveness of your website with my performance optimisation services. 
      I analyse and improve load times, reduce resource consumption, and ensure your application runs smoothly across all devices. 
      Comprehensive testing guarantees consistent performance under various conditions.`,
    },
    {
      id: "03",
      title: "Frontend Architecture Design",
      description:
        `Crafting robust and maintainable frontend architectures is my forte. 
        I design scalable structures using modern frameworks like React and TypeScript, enabling your application to handle growth and adapt to new business requirements seamlessly. 
        Testing is integrated into every stage to ensure scalability and long-term reliability.`,
    },
    {
      id: "04",
      title: "API Integration and Data Handling",
      description:
        `I offer seamless API integration services, whether it’s RESTful APIs, GraphQL, or real-time WebSocket connections. 
        I ensure your application efficiently interacts with external services, delivering reliable and secure data processing. 
        Testing plays a critical role in validating data accuracy and system integrity.`,
    },
    {
      id: "05",
      title: "Blockchain and Smart Contracts",
      description:
        `Leverage the power of blockchain with my expertise in developing and integrating smart contracts using Solidity, Web3.js, and Ethereum. 
        From secure contract development to seamless integration with decentralised applications, I help you create solutions that are both innovative and reliable. 
        Each solution is thoroughly tested to ensure compliance, security, and functionality.

`,
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <Container id="services">
      <div className="about-text">
        <h2>Services</h2>
      </div>
      <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
        <AccordionContainer>
          {services.map((service, index) => (
            <AccordionItem key={index} className='service-box'>
              <AccordionHeader
                isActive={activeIndex === index}
                onClick={() => toggleAccordion(index)}
              >
                <AccordionTitle isActive={activeIndex === index}>
                  {service.id}
                </AccordionTitle>
                {service.title}
              </AccordionHeader>
              <AccordionContent isActive={activeIndex === index}>
                <AccordionDescription>
                  {service.description}
                </AccordionDescription>
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionContainer>
      </ScrollAnimation>
    </Container>
  );
};

export default Services;
