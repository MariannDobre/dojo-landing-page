import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  CustomButton,
  ImagePlaceholder,
} from '../../interface/styledComponents';
import useLazyLoadImages from '../../hooks/useLazyLoadImage';

//
const SRecipe = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  z-index: 1;

  .overlay {
    --overlay-width: 100%;
    --overlay-max-width: 100%;
    --overlay-height: 100%;
    --padding: 4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.6rem;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: var(--overlay-width);
    max-width: var(--overlay-max-width);
    height: var(--overlay-height);
    background-color: rgba(0, 0, 0, 0.25);
    outline: 0.2rem solid transparent;
    padding: var(--padding);
    z-index: 20;
    backdrop-filter: blur(1.2rem);
    transition: all 0.35s ease;

    .overlay-description {
      color: var(--clr-white);
      font-size: var(--font-size-base);
      font-family: var(--font-fam-serif);
      text-align: center;
      line-height: 1.5;
      letter-spacing: var(--ltr-spacing-xs);
      word-spacing: var(--word-spacing-xs);

      @media screen and (max-width: 768px), screen and (max-height: 664) {
        font-size: var(--font-size-sm);
      }
    }
  }

  span {
    --width: 100%;
    --max-width: 100%;
    --padding: 2rem 0;

    opacity: 1;
    visibility: visible;
    width: var(--width);
    max-width: var(--max-width);
    color: var(--clr-white);
    background-color: rgba(0, 0, 0, 0.55);
    font-size: var(--font-size-lg);
    font-family: var(--font-fam-serif);
    text-align: center;
    letter-spacing: var(--ltr-spacing-xs);
    word-spacing: var(--word-spacing-xs);
    padding: var(--padding);
    top: 65%;
    position: absolute;
    z-index: 10;
    transition: all 0.35s ease;

    @media screen and (max-width: 768px), screen and (max-height: 664) {
      font-size: var(--font-size-base);
      letter-spacing: var(--ltr-spacing-sm);
      word-spacing: var(--word-spacing-sm);
    }
  }

  &:hover {
    .overlay {
      opacity: 1;
      visibility: visible;
      outline: 0.2rem solid #18181b;
    }

    span {
      opacity: 0;
      visibility: hidden;
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    ${ImagePlaceholder} {
      width: 24rem;
      height: 44rem;
    }
  }

  @media screen and (max-width: 480px) {
    ${ImagePlaceholder} {
      width: 20rem;
      height: 40rem;
    }
  }
`;

const RecipeImage = styled.img`
  --img-width: 100%;
  --img-max-width: 28rem;
  --img-max-width-tablet: 24rem;
  --img-max-width-mobile: 20rem;

  --img-height: 48rem;
  --img-height-tablet: 44rem;
  --img-height-mobile: 40rem;

  display: block;
  width: var(--img-width);
  max-width: var(--img-max-width);
  height: var(--img-height);
  object-fit: contain;

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    max-width: var(--img-max-width-tablet);
    height: var(--img-height-tablet);
  }

  @media screen and (max-width: 480px) {
    max-width: var(--img-max-width-mobile);
    height: var(--img-height-mobile);
  }
`;

function Recipe({ filteredData }) {
  const imagesPaths = filteredData.map((el) => el.image);
  const navigate = useNavigate();
  const { loadedImages, imageRefs } = useLazyLoadImages(imagesPaths, 1);

  //
  function handleNavigate(path) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate(`/recipes/${path}`);
  }

  return (
    <>
      {filteredData.map((cocktail, index) => (
        <SRecipe
          ref={(el) => (imageRefs.current[index] = el)}
          key={cocktail?.id}
        >
          {loadedImages[index] ? (
            <RecipeImage
              src={cocktail?.image}
              alt={`Loading ${cocktail?.recipeName}`}
            />
          ) : (
            <ImagePlaceholder
              $imagePlaceholderMaxWidth='28rem'
              $imagePlaceholderHeight='48rem'
            />
          )}

          <span>{cocktail?.recipeName}</span>

          <div className='overlay'>
            <p className='overlay-description'>{cocktail?.description}</p>

            <CustomButton
              $alignSelf='auto'
              $fontSize='var(--font-size-sm)'
              $positionBefore='left'
              onClick={() => handleNavigate(cocktail?.pathName)}
            >
              view recipe
            </CustomButton>
          </div>
        </SRecipe>
      ))}
    </>
  );
}

export default Recipe;
