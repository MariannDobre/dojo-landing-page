import React from 'react';
import styled from 'styled-components';
import {
  Blur,
  SectionBars,
  Bar,
  SectionTitle,
  Flex,
  SectionPlaceholder,
} from '../interface/styledComponents';
import useLazyLoadBackground from '../hooks/useLazyLoadBackground';

const SAbout = styled.section`
  --about-width: 100%;
  --about-max-width: 184rem;

  --height: 80rem;
  --height-laptop-lg: 68rem;
  --height-laptop: 60rem;
  --height-tablet: 52rem;
  --height-mobile: 44rem;

  --placeholder-height-laptop-lg: 36rem;
  --placeholder-height-laptop: 28rem;
  --placeholder-height-tablet: 20rem;
  --placeholder-height-mobile: 16rem;

  --padding: 16rem;
  --padding-laptop-lg: 8rem;
  --padding-laptop: 6rem;
  --padding-tablet: 4rem;
  --padding-mobile: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: var(--about-width);
  max-width: var(--about-max-width);
  padding: var(--padding);

  ${SectionPlaceholder} {
    height: 44rem;
  }

  ul {
    --list-margin: 1.9rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.8rem;
    margin-left: var(--list-margin);

    li {
      color: var(--clr-gray-300);
      font-size: calc(var(--font-size-base) + 0.2rem);
      font-family: var(--font-fam-sans);
      text-transform: capitalize;
      letter-spacing: var(--ltr-spacing-xs);
      word-spacing: var(--word-spacing-xs);

      &::marker {
        color: var(--clr-amber-500);
      }
    }
  }

  @media screen and (max-width: 1364px), screen and (max-height: 864px) {
    height: var(--height-laptop-lg);
    padding: var(--padding-laptop-lg);
    gap: 4rem;

    ${SectionPlaceholder} {
      height: var(--placeholder-height-laptop-lg);
    }
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    height: var(--height-laptop);
    padding: var(--padding-laptop);
    gap: 2rem;

    ul {
      gap: 0.6rem;

      li {
        font-size: var(--font-size-base);
      }
    }

    ${SectionPlaceholder} {
      height: var(--placeholder-height-laptop);
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
    height: var(--height-tablet);
    padding: var(--padding-tablet);

    .blur-right {
      top: 6.5rem;
      right: 6.5rem;
      box-shadow: 0 0 10rem 5rem var(--clr-amber-500);
    }

    .blur-left {
      bottom: 6.5rem;
      left: 6.5rem;
      box-shadow: 0 0 10rem 5rem var(--clr-amber-400);
    }

    ${SectionPlaceholder} {
      height: var(--placeholder-height-tablet);
    }

    ${SectionBars} {
      flex-direction: column;
      height: auto;
      width: 100%;

      ${Bar} {
        height: 0.2rem;
        width: 100%;
      }
    }

    ul {
      li {
        letter-spacing: 0;
        word-spacing: 0;
      }
    }
  }

  @media screen and (max-width: 480px) {
    height: var(--height-mobile);
    padding: var(--padding-mobile);

    ${SectionPlaceholder} {
      min-height: var(--placeholder-height-mobile);
    }

    ul {
      gap: 0.4rem;

      li {
        font-size: var(--font-size-sm);
      }
    }
  }
`;

const ImgWrapper = styled.div`
  --img-wrapper-width: 100%;
  --img-wrapper-max-width: 64rem;
  --img-wrapper-max-width-laptop-lg: 56rem;
  --img-wrapper-max-width-laptop: 48rem;
  --img-wrapper-max-width-tablet: 40rem;
  --img-wrapper-max-width-mobile: 36rem;

  --img-wrapper-height: 44rem;
  --img-wrapper-height-laptop-lg: 36rem;
  --img-wrapper-height-laptop: 28rem;
  --img-wrapper-height-tablet: 20rem;
  --img-wrapper-height-mobile: 16rem;
  --rounded: 1.6rem;

  width: var(--img-wrapper-width);
  max-width: var(--img-wrapper-max-width);
  height: var(--img-wrapper-height);
  border-radius: var(--rounded);
  border: 0.1rem solid rgba(255, 255, 255, 0.25);
  position: relative;
  z-index: 1;

  @media screen and (max-width: 1364px), screen and (max-height: 864px) {
    max-width: var(--img-wrapper-max-width-laptop-lg);
    height: var(--img-wrapper-height-laptop-lg);
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    max-width: var(--img-wrapper-max-width-laptop);
    height: var(--img-wrapper-height-laptop);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    max-width: var(--img-wrapper-max-width-tablet);
    height: var(--img-wrapper-height-tablet);
  }

  @media screen and (max-width: 480px) {
    max-width: var(--img-wrapper-max-width-mobile);
    height: var(--img-wrapper-height-mobile);
  }
`;

const Container = styled.div`
  --container-width: 100%;
  --container-max-width: 64rem;
  --container-max-width-laptop-lg: 56rem;
  --container-max-width-laptop: 48rem;
  --container-max-width-tablet: 40rem;
  --container-max-width-mobile: 36rem;

  --container-height: 44rem;
  --container-height-laptop-lg: 36rem;
  --container-height-laptop: 28rem;
  --container-height-tablet: 20rem;
  --container-height-mobile: 16rem;
  --rounded: 1.6rem;

  width: 100%;
  max-width: 100%;
  height: 100%;
  background: url(${(props) => props.$imagePath}) center center / cover
    no-repeat;
  border-radius: var(--rounded);

  @media screen and (max-width: 1364px), screen and (max-height: 864px) {
    max-width: var(--container-max-width-laptop-lg);
    height: var(--container-height-laptop-lg);
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    max-width: var(--container-max-width-laptop);
    height: var(--container-height-laptop);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    max-width: var(--container-max-width-tablet);
    height: var(--container-height-tablet);
  }

  @media screen and (max-width: 480px) {
    max-width: var(--container-max-width-mobile);
    height: var(--container-height-mobile);
  }
`;

function About() {
  const aboutBgImage = '/sections-backgrounds/cocktails.jpg';
  const { isBackgroundLoaded, observedContainer } = useLazyLoadBackground(
    aboutBgImage,
    0.75
  );

  return (
    <SAbout
      ref={observedContainer}
      id='about-section'
    >
      <Flex
        $direction='column'
        $gap='8.4rem'
      >
        <SectionTitle>
          <span>we think you`ll get along with</span>
          <br />
          <span>our work.</span>
        </SectionTitle>

        <ul>
          <li>discover new horizons</li>
          <li>top cocktails at home</li>
          <li>deep details for each recipe</li>
          <li>perfect with friends and family</li>
          <li>a drink you won`t forget</li>
        </ul>
      </Flex>

      <SectionBars $height='44rem'>
        <Bar />

        <Bar />
      </SectionBars>

      {isBackgroundLoaded ? (
        <ImgWrapper>
          <Container $imagePath={aboutBgImage}></Container>

          <Blur
            className='blur-right'
            $top='10.5rem'
            $right='10.5rem'
            $blurRadius='15rem'
            $spreadRadius='7.5rem'
            $shadowColor='var(--clr-amber-500)'
          />
          <Blur
            className='blur-left'
            $bottom='10.5rem'
            $left='10.5rem'
            $blurRadius='15rem'
            $spreadRadius='7.5rem'
            $shadowColor='var(--clr-amber-400)'
          />
        </ImgWrapper>
      ) : (
        <SectionPlaceholder $placeholderMaxWidth='64rem' />
      )}
    </SAbout>
  );
}

export default About;
