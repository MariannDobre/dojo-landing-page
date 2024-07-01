import React from 'react';
import styled from 'styled-components';
import { Flex, Grid } from '../../interface/styledComponents';
import Footer from '../../sections/footer';
import Recipe from './recipe';
import { cocktails } from '../../data/data';
import { useSearchParams } from 'react-router-dom';
import RecipesFilter from './recipesFilter';

const SRecipesGrid = styled.div`
  --recipes-grid-width: 100%;
  --recipes-grid-max-width: 124rem;
  --recipes-grid-max-width-laptop-lg: 96rem;
  --recipes-grid-max-width-laptop: 68rem;
  --recipes-grid-max-width-tablet: 44rem;
  --recipes-grid-max-width-mobile: 28rem;

  --padding: 4rem 0;
  --margin: 8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  width: var(--recipes-grid-width);
  max-width: var(--recipes-grid-max-width);
  padding: var(--padding);
  margin-bottom: var(--margin);
  border-bottom: 0.2rem solid var(--clr-amber-500);

  .issue {
    --max-width: 60rem;

    max-width: var(--max-width);
    color: var(--clr-zinc-400);
    font-size: var(--font-size-base);
    font-family: var(--font-fam-seif);
    text-align: center;
    letter-spacing: var(--ltr-spacing-xs);
    word-spacing: var(--word-spacing-xs);

    strong {
      color: var(--clr-amber-500);
    }
  }

  @media screen and (max-width: 1364px) {
    max-width: var(--recipes-grid-max-width-laptop-lg);

    ${Grid} {
      grid-template-columns: repeat(2, 42rem);
    }
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    max-width: var(--recipes-grid-max-width-laptop);

    ${Grid} {
      grid-template-columns: repeat(2, 28rem);
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    max-width: var(--recipes-grid-max-width-tablet);
    padding: 2rem 0;
    gap: 2rem;

    ${Grid} {
      grid-template-columns: 40rem;
      grid-gap: 0;
      row-gap: 4rem;
      max-width: calc(100% - 4rem);
    }
  }

  @media screen and (max-width: 480px) {
    max-width: var(--recipes-grid-max-width-mobile);

    ${Grid} {
      grid-template-columns: 24rem;
      grid-gap: 0;
      row-gap: 4rem;
    }
  }
`;

const FilterLabel = styled.label`
  --padding: 1.2rem;

  color: var(--clr-white);
  font-size: var(--font-size-base);
  font-family: var(--font-fam-serif);
  letter-spacing: var(--ltr-spacing-xs);
  word-spacing: var(--word-spacing-xs);
  padding-left: var(--padding);

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  --input-width: 100%;
  --input-max-width: 20rem;
  --input-max-width-tablet: 16rem;

  --input-height: 100%;
  --padding: 0.6rem 0 0.6rem 0.6rem;

  outline: 0.2rem solid transparent;
  border: none;
  width: var(--input-width);
  max-width: var(--input-max-width);
  height: var(--input-height);
  color: var(--clr-white);
  background-color: var(--clr-zinc-800);
  font-size: var(--font-size-sm);
  font-family: var(--font-fam-serif);
  letter-spacing: var(--ltr-spacing-xs);
  word-spacing: var(--word-spacing-xs);
  padding: var(--padding);
  caret-color: var(--clr-amber-500);
  cursor: pointer;
  transition: all 0.35s ease;

  &::placeholder {
    color: var(--clr-zinc-400);
  }

  &:focus {
    outline-color: var(--clr-amber-500);
    border: none;
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    max-width: var(--input-max-width-tablet);
    font-size: calc(var(--font-size-sm) - 0.2rem);
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

function RecipesGrid() {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get('type') || 'anything';
  const q = searchParams.get('q') || '';

  // FILTER THE RECIPES BASED ON THEIR TYPE AND THEIR NAME
  const filteredItems =
    type === 'anything'
      ? cocktails
      : cocktails.filter((cocktail) => {
          if (Array.isArray(cocktail?.alcoholType)) {
            return cocktail?.alcoholType.includes(type);
          } else {
            return cocktail?.alcoholType === type;
          }
        });

  const searchedItems = filteredItems.filter((cocktail) =>
    cocktail?.recipeName?.toLowerCase().includes(q.toLowerCase())
  );

  // HANDLER THE FILTERING
  function changeAlcoholType(e) {
    const filter = e.target.value;
    setSearchParams({ type: filter });
  }

  // HANDLE THE CASES WHERE THE RECIPES TYPE IS WRONG OR/AND THEIR NAMES ARE WRONG OR DOES NOT EXIST
  let issue = '';
  const noRecipesByType = filteredItems.length === 0;
  const noRecipesByName = q !== '' && searchedItems.length === 0;
  if (noRecipesByType && q !== '') {
    issue = (
      <p className='issue'>
        We cannot find any cocktail named&nbsp;<strong>{q}</strong>&nbsp;and is
        based on&nbsp;
        <strong>{type}</strong>.
      </p>
    );
  } else if (noRecipesByType) {
    issue = (
      <p className='issue'>
        We cannot find any cocktail based on&nbsp;<strong>{type}</strong>.
      </p>
    );
  } else if (noRecipesByName && filteredItems.length > 0) {
    issue = (
      <p className='issue'>
        We cannot find any cocktail named&nbsp;<strong>{q}</strong>&nbsp;and is
        based on&nbsp;
        <strong>{type}</strong>.
      </p>
    );
  } else if (noRecipesByName) {
    issue = (
      <p className='issue'>
        We cannot find any cocktail named&nbsp;<strong>{q}</strong>.
      </p>
    );
  }

  return (
    <>
      <SRecipesGrid>
        <Flex
          $alignItems='center'
          $justifyContent='space-between'
          $width='100%'
          $maxWidth='100%'
          $height='4.4rem'
          $bgColor='var(--clr-zinc-800)'
        >
          <Flex
            $alignItems='center'
            $gap='0.8rem'
            $width='100%'
            $maxWidth='100%'
            $height='100%'
          >
            <FilterLabel htmlFor='alcoholFilter'>
              I have a bottle of
            </FilterLabel>

            <RecipesFilter
              value={type}
              onChange={changeAlcoholType}
            />
          </Flex>

          <SearchInput
            type='text'
            value={q}
            onChange={(e) =>
              setSearchParams(
                (prevParams) => {
                  prevParams.set('q', e.target.value);
                  return prevParams;
                },
                { replace: true }
              )
            }
            placeholder='Search for a recipe...'
          />
        </Flex>

        {issue ? (
          issue
        ) : (
          <Grid
            $width='100%'
            $maxWidth='calc(100% - 8rem)'
            $columns='repeat(3, 36rem)'
            $gridGap='4rem'
          >
            <Recipe filteredData={searchedItems} />
          </Grid>
        )}
      </SRecipesGrid>

      <Footer />
    </>
  );
}

export default RecipesGrid;
