import React from 'react';
import styled from 'styled-components';
import TextCarousel from '../components/textCarousel';
import {
  CustomButton,
  SectionBars,
  Bar,
  SectionTitle,
  SectionPlaceholder,
} from '../interface/styledComponents';
import useLazyLoadBackground from '../hooks/useLazyLoadBackground';

const carouselData = [
  'be like dojo.',
  'cool.',
  'smart and charming.',
  'jolly.',
  'sweet and good.',
  'not shy at all.',
  'embrace the craziness.',
];

const SHeroWrapper = styled.section`
  --wrapper-width: 100%;
  --wrapper-max-width: 184rem;

  --placeholder-height-laptop: 64rem;
  --placeholder-height-tablet: 56rem;
  --placeholder-height-mobile: 48rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--wrapper-width);
  max-width: var(--wrapper-max-width);

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    ${SectionPlaceholder} {
      height: var(--placeholder-height-laptop);
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    ${SectionPlaceholder} {
      height: var(--placeholder-height-tablet);
    }
  }

  @media screen and (max-width: 480px) {
    ${SectionPlaceholder} {
      height: var(--placeholder-height-mobile);
    }
  }
`;

const SHero = styled.div`
  --hero-width: 100%;
  --hero-max-width: 184rem;
  --hero-height: 84rem;
  --padding: 16rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  width: var(--hero-width);
  max-width: var(--hero-max-width);
  height: var(--hero-height);
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.9)
    ),
    url(${(props) => props.$imagePath});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  padding: var(--padding);
  border-bottom: 0.2rem solid var(--clr-amber-500);

  section {
    --section-width: 100%;
    --section-height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: var(--section-width);
    height: var(--section-height);
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    --hero-height-laptop: 64rem;
    --hero-padding-laptop: 8rem;

    height: var(--hero-height-laptop);
    gap: 6rem;
    padding: var(--hero-padding-laptop);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    --hero-height-tablet: 56rem;
    --hero-padding-tablet: 4rem;

    height: var(--hero-height-tablet);
    gap: 4rem;
    padding: var(--hero-padding-tablet);
  }

  @media screen and (max-width: 480px) {
    --hero-height-mobile: 48rem;
    --hero-padding-mobile: 2rem;

    height: var(--hero-height-mobile);
    padding: var(--hero-padding-mobile);
  }
`;

function Hero({ scrollToSection }) {
  const heroBgImage = '/sections-backgrounds/whiskey.jpg';
  const { isBackgroundLoaded, observedContainer } = useLazyLoadBackground(
    heroBgImage,
    0.5
  );

  return (
    <SHeroWrapper ref={observedContainer}>
      {isBackgroundLoaded ? (
        <SHero $imagePath={heroBgImage}>
          <section>
            <SectionTitle
              $alignSelf='start'
              $textAlign='start'
            >
              <span>Do not be simplistic.</span>
              <br />
              <span>Make it count.</span>
            </SectionTitle>

            <CustomButton
              onClick={() => scrollToSection('try-recipe-section')}
              $alignSelf='flex-start'
              $positionBefore='left'
            >
              Try a recipe
            </CustomButton>
          </section>

          <SectionBars>
            <Bar />

            <Bar />
          </SectionBars>

          <section>
            <CustomButton
              onClick={() => scrollToSection('about-section')}
              $alignSelf='flex-end'
              $positionBefore='right'
            >
              Discover
            </CustomButton>

            <SectionTitle
              $alignSelf='end'
              $textAlign='end'
            >
              <span>Live free.</span>
              <br />
              <span>Consume responsibly.</span>
            </SectionTitle>
          </section>
        </SHero>
      ) : (
        <SectionPlaceholder
          $placeholderMaxWidth='184rem'
          $placeholderHeight='84rem'
        />
      )}

      <TextCarousel text={carouselData} />
    </SHeroWrapper>
  );
}

export default Hero;
