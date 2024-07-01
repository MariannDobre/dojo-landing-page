import React from 'react';
import styled from 'styled-components';

const alcoholTypes = [
  { id: 1, label: 'Anything', value: 'anything' },
  { id: 2, label: 'Aperol', value: 'aperol' },
  { id: 3, label: 'Angostura Bitters', value: 'angostura-bitters' },
  { id: 4, label: 'Black Rum', value: 'black-rum' },
  { id: 5, label: 'Campari', value: 'campari' },
  { id: 6, label: 'Champagne', value: 'champagne' },
  { id: 7, label: 'Dry Vermouth', value: 'dry-vermouth' },
  { id: 8, label: 'Gin', value: 'gin' },
  { id: 9, label: 'Prosecco', value: 'prosecco' },
  { id: 10, label: 'Tequila', value: 'tequila' },
  { id: 11, label: 'Triple Sec', value: 'triple-sec' },
  { id: 12, label: 'Vodka', value: 'vodka' },
  { id: 13, label: 'White Rum', value: 'white-rum' },
  { id: 14, label: 'Whiskey', value: 'whiskey' },
];

const SRecipesFilter = styled.select`
  --select-width: 100%;
  --select-max-width: 20rem;
  --select-max-width-tablet: 14rem;
  --select-max-width-mobile: 100%;

  --select-height: 100%;
  --padding: 0.6rem;

  outline: 0.2rem solid transparent;
  border: none;
  width: var(--select-width);
  max-width: var(--select-max-width);
  height: var(--select-height);
  color: var(--clr-white);
  background-color: var(--clr-zinc-800);
  font-family: var(--font-fam-serif);
  font-size: var(--font-size-sm);
  letter-spacing: var(--ltr-spacing-xs);
  word-spacing: var(--word-spacing-xs);
  padding-left: var(--padding);
  cursor: pointer;
  transition: all 0.35s ease;

  &:focus {
    outline-color: var(--clr-amber-500);
    border: none;
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    max-width: var(--select-max-width-tablet);
    font-size: calc(var(--font-size-sm) - 0.2rem);
  }

  @media screen and (max-width: 480px) {
    max-width: var(--select-max-width-mobile);
  }
`;

const Options = styled.option``;

function RecipesFilter({ value, onChange }) {
  return (
    <SRecipesFilter
      id='alcoholFilter'
      value={value}
      onChange={onChange}
    >
      {alcoholTypes.map((type) => (
        <Options
          key={type.id}
          value={type.value}
        >
          {type.label}
        </Options>
      ))}
    </SRecipesFilter>
  );
}

export default RecipesFilter;
