// LoaderStyles.js
import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const Container = styled.section<{ isLoading: boolean }>`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isLoading ? 1 : 0)};
  transition: opacity 0.5s ease;
  animation: ${(props) => (props.isLoading ? 'none' : fadeOut + ' 0.5s forwards')};

  img {
    width: 10rem;
    height: 10rem;
  }

  @media(max-width: 600px) {
    img {
      width: 8rem;
      height: 8rem;
    }
  }

  @media(max-width: 480px) {
    img {
      width: 6rem;
      height: 6rem;
    }
  }
`;