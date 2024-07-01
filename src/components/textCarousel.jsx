import React from 'react';
import styled, { keyframes } from 'styled-components';

const textSlide = keyframes`
from {
  transform: translateX(0);
} 
to {
  transform: translateX(-100%);
}
`;

const Carousel = styled.div`
  --carousel-width: 100%;
  --carousel-max-width: 100%;
  --carousel-padding: 2rem 0;

  width: var(--carousel-width);
  max-width: var(--carousel-max-width);
  border-bottom: 0.2rem solid var(--clr-amber-500);
  padding: var(--carousel-padding);
  overflow: hidden;
  white-space: nowrap;
  position: relative;

  &:hover div {
    animation-play-state: paused;
  }
`;

const Slide = styled.div`
  display: inline-block;
  animation: ${textSlide} 35s infinite linear;

  span {
    --text-margin: 0 4rem;

    color: var(--clr-white);
    font-size: var(--font-size-3xl);
    text-transform: uppercase;
    margin: var(--text-margin);
    letter-spacing: var(--ltr-spacing-xs);
    word-spacing: var(--word-spacing-xs);
  }

  @media screen and (max-width: 1364px), screen and (max-height: 864px) {
    span {
      font-size: var(--font-size-2xl);
    }
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    span {
      font-size: var(--font-size-xl);
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    span {
      font-size: var(--font-size-lg);
    }
  }

  @media screen and (max-width: 480px) {
    span {
      font-size: var(--font-size-md);
    }
  }
`;

function TextCarousel({ text }) {
  return (
    <Carousel>
      <Slide>
        {text.map((el, index) => (
          <span key={index}>{el}</span>
        ))}
      </Slide>

      <Slide>
        {text.map((el, index) => (
          <span key={index}>{el}</span>
        ))}
      </Slide>
    </Carousel>
  );
}

export default TextCarousel;
