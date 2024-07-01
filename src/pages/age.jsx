import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import AgeForm from '../components/ageForm';
import Footer from '../sections/footer';
import Banner from '../components/banner';
import {
  SectionBars,
  Bar,
  CustomButton,
  Flex,
} from '../interface/styledComponents';
import { BsExclamationOctagonFill } from 'react-icons/bs';

const sharedStyles = css`
  --container-max-width: 120rem;
  --container-margin: 8rem auto 0 auto;
  --padding: 0 4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  max-width: var(--container-max-width);
  padding: var(--padding);
  margin: var(--container-margin);
`;

const StyledSubmited = styled.div`
  ${sharedStyles}

  span {
    color: var(--clr-white);
    font-size: var(--font-size-base);
    font-family: var(--font-fam-sans);
    font-weight: 700;
    line-height: 1.4;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: var(--ltr-spacing-xs);
    word-spacing: var(--word-spacing-xs);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    span {
      font-size: var(--font-size-sm);
    }

    & > div:nth-child(-n + 2) {
      max-width: 24rem;
    }
  }

  @media screen and (max-width: 480px) {
    & > div:nth-child(-n + 2) {
      max-width: 20rem;
    }
  }
`;

const StyledNotSubmited = styled.div`
  ${sharedStyles}
`;

const SectionTitle = styled.h1`
  --font-size-laptop: calc(var(--font-size-md) - 0.2rem);
  --font-size-tablet: calc(var(--font-size-base));
  --font-size-mobile: var(--font-size-sm);

  color: var(--clr-white);
  font-size: var(--font-size-md);
  font-family: var(--font-fam-sans);
  text-transform: uppercase;
  text-align: center;
  letter-spacing: var(--ltr-spacing-xs);
  word-spacing: var(--word-spacing-xs);

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    font-size: var(--font-size-laptop);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    font-size: var(--font-size-tablet);
  }

  @media screen and (max-width: 480px) {
    font-size: var(--font-size-mobile);
    line-height: 1.4;
  }
`;

// BIRTH YEAR SUBMITED UI
function SubmitedUI() {
  const navigate = useNavigate();

  function handleNavigate(path) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    navigate(path);
  }

  return (
    <StyledSubmited>
      <span>
        You`ve already submitted your birth year.
        <br />
        Choose one of the valid options below to continue.
      </span>

      <Flex
        $direction='column'
        $alignItems='center'
        $justifyContent='center'
        $gap='1.6rem'
        $width='100%'
        $maxWidth='28rem'
      >
        <CustomButton
          onClick={() => handleNavigate('/home')}
          $width='100%'
          $maxWidth='28rem'
          $fontSize='var(--font-size-sm)'
          $positionBefore='left'
        >
          explore home page
        </CustomButton>

        <CustomButton
          onClick={() => handleNavigate('/recipes')}
          $width='100%'
          $maxWidth='28rem'
          $fontSize='var(--font-size-sm)'
          $positionBefore='right'
        >
          explore recipes page
        </CustomButton>
      </Flex>

      <SectionBars
        $direction='column'
        $width='100%'
        $height='auto'
      >
        <Bar
          $width='100%'
          $height='0.2rem'
        />

        <Bar
          $width='100%'
          $height='0.2rem'
        />
      </SectionBars>

      <Footer />
    </StyledSubmited>
  );
}

// BIRTH YEAR NOT SUBMITED UI
function NotSubmitedUI({ error, setError }) {
  return (
    <StyledNotSubmited>
      <Banner
        error={error}
        setError={setError}
      >
        <BsExclamationOctagonFill />
        You need to be at least 18 years old if you want to proceed.
      </Banner>

      <SectionTitle>
        Give us your birth year before you can proceed.
      </SectionTitle>

      <AgeForm
        error={error}
        setError={setError}
      />

      <SectionBars
        $direction='column'
        $width='100%'
        $height='auto'
      >
        <Bar
          $width='100%'
          $height='0.2rem'
        />

        <Bar
          $width='100%'
          $height='0.2rem'
        />
      </SectionBars>

      <Footer />
    </StyledNotSubmited>
  );
}

// MAIN COMPONENT
function Age() {
  const [error, setError] = useState(false);
  const verifiedAge = sessionStorage.getItem('ageIsVerified');

  return (
    <React.Fragment>
      {verifiedAge === 'true' ? (
        <SubmitedUI />
      ) : (
        <NotSubmitedUI
          error={error}
          setError={setError}
        />
      )}
    </React.Fragment>
  );
}

export default Age;
