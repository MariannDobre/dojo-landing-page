import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import useLazyLoadBackground from '../hooks/useLazyLoadBackground';
import styled from 'styled-components';
import {
  Bar,
  Blur,
  CustomButton,
  Flex,
  SectionBars,
  SectionPlaceholder,
  SectionTitle,
} from '../interface/styledComponents';

const bottlesData = ['Whiskey', 'Cognac', 'Rum', 'Tequila', 'Gin', 'Vodka'];

const occasionsData = [
  'Perfect after work',
  'Amazing while watching a game',
  'Perfect at a grill',
  'Amazing while chilling with friends',
  'Perfect at girls night',
  'Amazing for an endless party',
];

const SectionSubtitle = styled.p`
  color: var(--clr-gray-300);
  font-size: var(--font-size-md);
  font-family: var(--font-fam-sans);

  span {
    color: var(--clr-amber-500);
  }
`;

const STryRecipeWrapper = styled.section`
  --wrapper-width: 100%;
  --wrapper-max-width: 184rem;

  --placeholder-height-laptop-lg: 76rem;
  --placeholder-height-laptop: 72rem;
  --placeholder-height-tablet: 68rem;
  --placeholder-height-mobile: 64rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: var(--wrapper-width);
  max-width: var(--wrapper-max-width);

  @media screen and (max-width: 1364px), screen and (max-height: 864px) {
    ${SectionPlaceholder} {
      height: var(--placeholder-height-laptop-lg);
    }
  }

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

const STryRecipe = styled.div`
  --try-recipe-width: 100%;
  --try-recipe-max-width: 184rem;

  --height: 80rem;
  --height-laptop-lg: 76rem;
  --height-laptop: 72rem;
  --height-tablet: 68rem;
  --height-mobile: 64rem;

  --padding: 8rem 16rem;
  --padding-laptop-lg: 6rem 14rem;
  --padding-laptop: 4rem 12rem;
  --padding-tablet: 3rem 8rem;
  --padding-mobile: 2rem 6rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2.4rem;
  width: var(--try-recipe-width);
  max-width: var(--try-recipe-max-width);
  height: var(--height);
  padding: var(--padding);
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.35)
    ),
    url(${(props) => props.$imagePath});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;

  @media screen and (max-width: 1364px), screen and (max-height: 864px) {
    height: var(--height-laptop-lg);
    padding: var(--padding-laptop-lg);
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    height: var(--height-laptop);
    padding: var(--padding-laptop);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    height: var(--height-tablet);
    padding: var(--padding-tablet);

    ${Blur} {
      bottom: 6.5rem;
      left: 7.5rem;
      box-shadow: 0 0 10rem 5rem var(--clr-amber-400);
    }

    ${SectionSubtitle} {
      font-size: var(--font-size-base);
    }
  }

  @media screen and (max-width: 480px) {
    height: var(--height-mobile);
    padding: var(--padding-mobile);

    ${SectionSubtitle} {
      font-size: var(--font-size-sm);
    }
  }
`;

function TryRecipe() {
  const tryRecipeBgImage = '/sections-backgrounds/lemons.jpg';
  const navigate = useNavigate();
  const { isBackgroundLoaded, observedContainer } = useLazyLoadBackground(
    tryRecipeBgImage,
    0.75
  );

  const [bottles] = useTypewriter({
    words: bottlesData,
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 125,
  });

  const [occasions] = useTypewriter({
    words: occasionsData,
    loop: {},
    typeSpeed: 150,
    deleteSpeed: 125,
  });

  function handleNavigate(path) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate(path);
  }

  return (
    <STryRecipeWrapper
      ref={observedContainer}
      id='try-recipe-section'
    >
      {isBackgroundLoaded ? (
        <STryRecipe $imagePath={tryRecipeBgImage}>
          <Blur
            $bottom='24rem'
            $left='24rem'
            $blurRadius='30rem'
            $spreadRadius='15rem'
            $shadowColor='var(--clr-amber-400)'
          />

          <SectionBars>
            <Bar />

            <Bar />
          </SectionBars>

          <Flex
            $direction='column'
            $justifyContent='center'
            $gap='2.4rem'
          >
            <Flex
              $direction='column'
              $justifyContent='center'
              $gap='1.2rem'
            >
              <SectionTitle>
                <span>Recipes</span>
              </SectionTitle>

              <SectionSubtitle>
                You will need a bottle of&nbsp;
                <span>{bottles}</span>
                <Cursor cursorColor='var(--clr-amber-500)' />
              </SectionSubtitle>

              <SectionSubtitle>
                They will be&nbsp;<span>{occasions}</span>
                <Cursor cursorColor='var(--clr-amber-500)' />
              </SectionSubtitle>
            </Flex>

            <CustomButton
              $alignSelf='flex-start'
              $positionBefore='left'
              onClick={() => handleNavigate('/recipes')}
            >
              Find your mix
            </CustomButton>
          </Flex>

          <SectionBars>
            <Bar />

            <Bar />
          </SectionBars>
        </STryRecipe>
      ) : (
        <SectionPlaceholder
          $placeholderMaxWidth='184rem'
          $placeholderHeight='80rem'
        />
      )}
    </STryRecipeWrapper>
  );
}

export default TryRecipe;
