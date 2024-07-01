import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { cocktails } from '../data/data';
import { Flex, ImagePlaceholder } from '../interface/styledComponents';
import { FaArrowLeftLong } from 'react-icons/fa6';
import Footer from '../sections/footer';
import useLazyLoadImages from '../hooks/useLazyLoadImage';

const SRecipeDetails = styled.div`
  --recipe-details-width: 100%;
  --recipe-details-max-width: 120rem;

  --imagePlaceholder-width-laptop-lg: 24rem;
  --imagePlaceholder-width-laptop: 16rem;
  --imagePlaceholder-width-tablet: 12rem;
  --imagePlaceholder-width-mobile: 8rem;

  --imagePlaceholder-height-laptop-lg: 44rem;
  --imagePlaceholder-height-laptop: 36rem;
  --imagePlaceholder-height-tablet: 32rem;
  --imagePlaceholder-height-mobile: 28rem;

  --padding: 8rem 4rem 0 4rem;

  max-width: var(--recipe-details-max-width);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  padding: var(--padding);
  margin: 0 auto;

  .about-drink-h {
    align-self: flex-end;
  }

  .instructions-drink-h {
    align-self: flex-end;
  }

  @media screen and (max-width: 1364px), screen and (max-height: 864px) {
    ${ImagePlaceholder} {
      width: var(--imagePlaceholder-width-laptop-lg);
      height: var(--imagePlaceholder-height-laptop-lg);
    }
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    ${ImagePlaceholder} {
      width: var(--imagePlaceholder-width-laptop);
      height: var(--imagePlaceholder-height-laptop);
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    ${ImagePlaceholder} {
      width: var(--imagePlaceholder-width-tablet);
      height: var(--imagePlaceholder-height-tablet);
    }
  }

  @media screen and (max-width: 480px) {
    gap: 2rem;

    ${ImagePlaceholder} {
      width: var(--imagePlaceholder-width-mobile);
      height: var(--imagePlaceholder-height-mobile);
    }

    .about-drink-h {
      align-self: flex-start;
    }

    .instructions-drink-h {
      align-self: flex-start;
    }

    .about-drink {
      flex-direction: column;
      gap: 2rem;
    }
  }
`;

const SectionTitle = styled.h1`
  color: var(--clr-white);
  font-size: var(--font-size-lg);
  font-family: var(--font-fam-serif);
  text-transform: uppercase;
  letter-spacing: var(--ltr-spacing-xs);
  word-spacing: var(--word-spacing-xs);

  @media screen and (max-width: 1364px), screen and (max-height: 864px) {
    font-size: var(--font-size-md);
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    font-size: var(--font-size-base);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    font-size: var(--font-size-sm);
  }
`;

const RecipeName = styled.h1`
  --font-size-laptop-lg: calc(var(--font-size-xl) + 0.2rem);
  --font-size-laptop: calc(var(--font-size-lg) + 0.2rem);
  --font-size-tablet: calc(var(--font-size-md) + 0.2rem);
  --font-size-mobile: calc(var(--font-size-base) + 0.2rem);

  align-self: flex-start;
  color: var(--clr-white);
  font-size: var(--font-size-2xl);
  font-family: var(--font-fam-serif);
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: var(--ltr-spacing-xs);
  word-spacing: var(--word-spacing-xs);
  border-bottom: 0.2rem solid var(--clr-amber-500);

  @media screen and (max-width: 1364px), screen and (max-height: 864px) {
    font-size: var(--font-size-laptop-lg);
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    font-size: var(--font-size-laptop);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    font-size: var(--font-size-tablet);
  }

  @media screen and (max-width: 480px) {
    font-size: var(--font-size-mobile);
  }
`;

const RecipeImage = styled.img`
  --img-width: 28rem;
  --img-width-laptop-lg: 24rem;
  --img-width-laptop: 16rem;
  --img-width-tablet: 12rem;
  --img-width-mobile: 8rem;

  --img-height: 48rem;
  --img-height-laptop-lg: 44rem;
  --img-height-laptop: 36rem;
  --img-height-tablet: 32rem;
  --img-height-mobile: 28rem;

  width: var(--img-width);
  height: var(--img-height);
  object-fit: contain;

  @media screen and (max-width: 1364px), screen and (max-height: 864px) {
    width: var(--img-width-laptop-lg);
    height: var(--img-height-laptop-lg);
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    width: var(--img-width-laptop);
    height: var(--img-height-laptop);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    width: var(--img-width-tablet);
    height: var(--img-height-tablet);
  }

  @media screen and (max-width: 480px) {
    width: var(--img-width-mobile);
    height: var(--img-height-mobile);
  }
`;

const IngredientsList = styled.ul`
  --list-margin: 1.9rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  margin-left: var(--list-margin);
`;

const Ingredients = styled.li`
  color: var(--clr-gray-300);
  font-size: var(--font-size-base);
  font-family: var(--font-fam-sans);
  line-height: 1.4;
  text-transform: capitalize;
  letter-spacing: var(--ltr-spacing-xs);
  word-spacing: var(--word-spacing-xs);

  &::marker {
    color: var(--clr-amber-500);
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    font-size: var(--font-size-sm);
  }

  @media screen and (max-width: 480px) {
    font-size: calc(var(--font-size-sm) - 0.2rem);
  }
`;

const Instructions = styled.p`
  --instructions-max-width: 60rem;

  max-width: var(--instructions-max-width);
  color: var(--clr-gray-300);
  font-size: var(--font-size-base);
  font-family: var(--font-fam-sans);
  line-height: 1.4;
  letter-spacing: var(--ltr-spacing-xs);
  word-spacing: var(--word-spacing-xs);

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    font-size: var(--font-size-sm);
  }

  @media screen and (max-width: 480px) {
    font-size: calc(var(--font-size-sm) - 0.2rem);
  }
`;

const About = styled.p`
  color: var(--clr-gray-300);
  font-size: var(--font-size-base);
  font-family: var(--font-fam-sans);
  line-height: 1.4;
  letter-spacing: var(--ltr-spacing-xs);
  word-spacing: var(--word-spacing-xs);

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    font-size: var(--font-size-sm);
  }

  @media screen and (max-width: 480px) {
    font-size: calc(var(--font-size-sm) - 0.2rem);
  }
`;

const GoBackButton = styled.button`
  --icon-font-size-tablet: var(--font-size-md);
  --icon-font-size-mobile: var(--font-size-base);

  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    color: var(--clr-amber-500);
    font-size: var(--font-size-xl);

    @media screen and (max-width: 768px), screen and (max-height: 664) {
      font-size: var(--font-size-md);
    }

    @media screen and (max-width: 480px) {
      font-size: var(--font);
    }
  }

  &:hover {
    svg {
      color: var(--clr-amber-400);
    }
  }
`;

function RecipeDetails() {
  const navigate = useNavigate();
  const { recipeName } = useParams();
  const cocktailData = cocktails.find(
    (cocktail) => cocktail.pathName === recipeName
  );

  const imagePath = [cocktailData.image];
  const { loadedImages, imageRefs } = useLazyLoadImages(imagePath, 1);

  function handleNavigate(path) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate(path);
  }

  return (
    <SRecipeDetails>
      <Flex
        $alignItems='center'
        $justifyContent='space-between'
        $width='100%'
        $maxWidth='100%'
      >
        <GoBackButton onClick={() => handleNavigate(-1)}>
          <FaArrowLeftLong />
        </GoBackButton>

        <RecipeName>{cocktailData?.recipeName}</RecipeName>
      </Flex>

      <Flex
        ref={(el) => (imageRefs.current[0] = el)}
        $justifyContent='space-between'
        $gap='4rem'
        $width='100%'
        $maxWidth='100%'
      >
        {loadedImages[0] ? (
          <RecipeImage
            src={cocktailData?.image}
            alt={cocktailData?.recipeName}
          />
        ) : (
          <ImagePlaceholder
            $imagePlaceholderMaxWidth='28rem'
            $imagePlaceholderHeight='48rem'
          />
        )}

        <Flex
          $direction='column'
          $gap='0.8rem'
        >
          <SectionTitle className='about-drink-h'>
            about this drink
          </SectionTitle>

          <About>{cocktailData?.description}</About>
        </Flex>
      </Flex>

      <Flex
        className='about-drink'
        style={{
          paddingBottom: '2rem',
          marginBottom: '4rem',
          borderBottom: '0.2rem solid var(--clr-amber-500)',
        }}
        $justifyContent='space-between'
        $width='100%'
        $maxWidth='100%'
      >
        <Flex
          $direction='column'
          $gap='0.8rem'
        >
          <SectionTitle>ingredients</SectionTitle>

          <IngredientsList>
            {cocktailData?.ingredients?.map((el, index) => (
              <Ingredients key={index}>{el}</Ingredients>
            ))}
          </IngredientsList>
        </Flex>

        <Flex
          $direction='column'
          $gap='0.8rem'
        >
          <SectionTitle className='instructions-drink-h'>
            instructions
          </SectionTitle>

          <Instructions>{cocktailData?.preparation}</Instructions>
        </Flex>
      </Flex>

      <Footer />
    </SRecipeDetails>
  );
}

export default RecipeDetails;
