import styled from "styled-components";

export const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: 0 auto;
`;

export const AccordionItem = styled.div`
  padding-bottom: 2rem;
  &:first-child {
    border-top-left-radius: 1.8rem;
    border-top-right-radius: 1.8rem;
  }
  &:last-child {
    padding-bottom: 0rem;
    border-bottom-left-radius: 1.8rem;
    border-bottom-right-radius: 1.8rem;
  }
`;

export const AccordionHeader = styled.button<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ isActive }) => (isActive ? "var(--aqua)" : "#2b2b2b")};
  color: #d9e2ec;
  padding: 20px;
  font-size: 2rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--aqua);
  }
`;

export const AccordionTitle = styled.span<{ isActive: boolean }>`
  font-size: 2rem;
  font-weight: bold;
  color: "#d9e2ec";
  margin-right: 10px;
`;

export const AccordionContent = styled.div<{ isActive: boolean }>`
  max-height: ${({ isActive }) => (isActive ? "200px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding: ${({ isActive }) => (isActive ? "20px" : "0 20px")};
`;

export const AccordionDescription = styled.p`
    letter-spacing: 0.12rem;
    margin-bottom: 2rem;
    font-size: 1.8rem;
    font-weight: 500;

`;


export const Container = styled.section`
  margin-top: 15rem;
  
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
`
