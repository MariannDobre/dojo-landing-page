import React from 'react';
import styled from 'styled-components';
import RecipesGrid from '../components/recipes/recipesGrid';
import useLazyLoadBackground from '../hooks/useLazyLoadBackground';
import { SectionPlaceholder } from '../interface/styledComponents';

const SRecipes = styled.section`
  --recipes-width: 100%;
  --recipes-max-width: 184rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: var(--recipes-width);
  max-width: var(--recipes-max-width);
  color: var(--clr-white);
  margin: 0 auto;
`;

const SRecipesHero = styled.div`
  --width: 100%;
  --max-width: 100%;

  --height: 84rem;
  --height-laptop-lg: 76rem;
  --height-laptop: 68rem;
  --height-tablet: 60rem;
  --height-mobile: 52rem;

  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--width);
  max-width: var(--max-width);
  height: var(--height);
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.6)
    ),
    url(${(props) => props.$imagePath});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-bottom: 0.2rem solid var(--clr-amber-500);

  h1 {
    color: var(--clr-white);
    font-size: var(--font-size-2xl);
    font-family: var(--font-fam-serif);
    text-transform: uppercase;
    letter-spacing: var(--ltr-spacing-xs);
    word-spacing: var(--word-spacing-xs);
    border-bottom: 0.2rem solid var(--clr-amber-500);
  }

  @media screen and (max-width: 1364px), screen and (max-height: 864px) {
    height: var(--height-laptop-lg);

    h1 {
      font-size: var(--font-size-xl);
    }
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    height: var(--height-laptop);

    h1 {
      font-size: var(--font-size-lg);
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    height: var(--height-tablet);

    h1 {
      font-size: var(--font-size-md);
    }
  }

  @media screen and (max-width: 480px) {
    height: var(--height-mobile);

    h1 {
      font-size: var(--font-size-base);
    }
  }
`;

function Recipes() {
  const recipesBgImage = '/sections-backgrounds/recipes-bg.jpg';
  const { isBackgroundLoaded, observedContainer } =
    useLazyLoadBackground(recipesBgImage);

  return (
    <SRecipes ref={observedContainer}>
      {isBackgroundLoaded ? (
        <SRecipesHero $imagePath={recipesBgImage}>
          <h1>Let`s talk about drinks</h1>
        </SRecipesHero>
      ) : (
        <SectionPlaceholder
          $placeholderMaxWidth='184rem'
          $placeholderHeight='84rem'
        />
      )}

      <RecipesGrid />
    </SRecipes>
  );
}

export default Recipes;
