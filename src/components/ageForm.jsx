import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CustomButton } from '../interface/styledComponents';

const currentYear = new Date().getFullYear();
const minYear = 1899;

const SAgeForm = styled.form`
  --width: 100%;
  --max-width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  width: var(--width);
  max-width: var(--max-width);

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
  }
`;

const Year = styled.input`
  --input-width: 100%;
  --input-max-width: 11.307rem;
  --padding: 0.8rem 0;

  outline: none;
  border: 0.2rem solid transparent;
  width: var(--input-width);
  max-width: var(--input-max-width);
  color: var(--clr-white);
  background-color: var(--clr-zinc-700);
  font-size: var(--font-size-sm);
  text-align: center;
  padding: var(--padding);
  letter-spacing: var(--ltr-spacing-xs);
  opacity: 1;
  transition: border 0.35s ease;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &[type='number'] {
    appearance: textfield;
    -moz-appearance: textfield;
  }

  &:focus {
    outline: none;
    border-color: var(--clr-amber-500);

    &::selection {
      background-color: transparent;
    }
  }

  &::placeholder {
    color: var(--clr-zinc-400);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    padding: 0.4rem 0;
    font-size: calc(var(--font-size-sm) - 0.2rem);
    border-width: 0.1rem;
    max-width: 8.96rem;
  }
`;

const ErrorMessage = styled.p`
  color: var(--clr-red-600);
  font-size: var(--font-size-base);
  font-family: var(--font-fam-sans);
  letter-spacing: var(--ltr-spacing-xs);
  transition: opacity 0.35s ease, visibility 0.35s ease;

  &.error-msg-visible {
    opacity: 1;
    visibility: visible;
  }

  &.error-msg-hidden {
    opacity: 0;
    visibility: hidden;
  }
`;

function AgeForm({ error, setError }) {
  const navigate = useNavigate();
  const [birthYear, setBirthYear] = useState('');
  const isYearValid =
    birthYear.length === 4 &&
    Number(birthYear) > minYear &&
    Number(birthYear) <= currentYear;
  const age = currentYear - Number(birthYear);

  function handleSubmit(event) {
    event.preventDefault();
    setBirthYear('');

    if (age >= 18) {
      sessionStorage.setItem('ageIsVerified', 'true');
      navigate('/home');
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <SAgeForm onSubmit={handleSubmit}>
      <div>
        <Year
          id='user-birth-year'
          name='user-birth-year'
          type='text'
          aria-label='Birth Year'
          placeholder='YYYY'
          value={birthYear}
          onChange={(e) => {
            let inputValue = e.target.value;
            const regex = /^[0-9]*$/;

            if (regex.test(inputValue)) {
              setBirthYear(inputValue);
            }
          }}
          min={minYear}
          max={currentYear}
          maxLength={4}
          pattern='[0-9]*'
        />

        <ErrorMessage
          className={
            (Number(birthYear) <= minYear || Number(birthYear) > currentYear) &&
            birthYear.length >= 4
              ? 'error-msg-visible'
              : 'error-msg-hidden'
          }
        >
          Provide a valid birth year
        </ErrorMessage>
      </div>

      <CustomButton
        $alignSelf='auto'
        $positionBefore='left'
        disabled={!isYearValid}
      >
        Enter
      </CustomButton>
    </SAgeForm>
  );
}

export default AgeForm;
