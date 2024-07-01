import React from 'react';
import { scroller } from 'react-scroll';
import styled from 'styled-components';
import Hero from '../sections/hero';
import About from '../sections/about';
import TryRecipe from '../sections/tryRecipe';
import Footer from '../sections/footer';

const SHome = styled.div`
  --home-width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20rem;
  max-width: var(--home-width);
  margin: 0 auto;
`;

function scrollToSection(sectionId) {
  scroller.scrollTo(sectionId, {
    duration: 1500,
    delay: 0,
    smooth: 'easeInOutQuad',
  });
}

function Home() {
  return (
    <SHome>
      <Hero scrollToSection={scrollToSection} />

      <About />

      <TryRecipe />

      <Footer />
    </SHome>
  );
}

export default Home;
