import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CustomButton } from '../interface/styledComponents';

const SPageNotFound = styled.div`
  --page-width: 100%;
  --page-max-width: 100%;
  --page-height: 100vh;
  --padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  width: var(--page-width);
  max-width: var(--page-max-width);
  height: var(--page-height);
  padding: var(--padding);

  span {
    color: var(--clr-amber-500);
    font-size: calc(var(--font-size-3xl) + 0.4rem);
    font-family: var(--font-fam-sans);
    letter-spacing: var(--ltr-spacing-xs);
  }

  p {
    color: var(--clr-white);
    font-size: var(--font-size-md);
    font-family: var(--font-fam-sans);
    text-align: center;
    letter-spacing: var(--ltr-spacing-xs);
    word-spacing: var(--word-spacing-xs);

    code {
      color: var(--clr-zinc-400);
    }
  }

  div {
    margin-top: 2rem;
  }
`;

function PageNotFound() {
  const location = useLocation();
  const navigate = useNavigate();
  const isAgeVerified = sessionStorage.getItem('ageIsVerified');

  return (
    <SPageNotFound>
      <span>404</span>

      <p>
        The following path&nbsp;<code>{location.pathname}</code>&nbsp;does not
        exist.
      </p>

      <div>
        {isAgeVerified === 'true' ? (
          <CustomButton
            onClick={() => navigate('/home')}
            $width='100%'
            $maxWidth='28rem'
            $fontSize='var(--font-size-sm)'
            $positionBefore='left'
          >
            Home Page
          </CustomButton>
        ) : (
          <CustomButton
            onClick={() => navigate('/')}
            $width='100%'
            $maxWidth='28rem'
            $fontSize='var(--font-size-sm)'
            $positionBefore='left'
          >
            Confirm Age
          </CustomButton>
        )}
      </div>
    </SPageNotFound>
  );
}

export default PageNotFound;
