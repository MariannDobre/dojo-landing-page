import React from 'react';
import styled from 'styled-components';
import { SiDungeonsanddragons } from 'react-icons/si';

const SAppLogo = styled.div`
  --text-font-size-laptop-lg: var(--font-size-md);
  --text-font-size-tablet: var(--font-size-base);

  --svg-font-size-laptop-lg: 6rem;
  --svg-font-size-laptop: 5.6rem;
  --svg-font-size-tablet: 5.2rem;
  --svg-font-size-mobile: 4.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  color: var(--clr-white);
  font-size: var(--font-size-xl);
  font-family: var(--font-fam-serif);

  svg {
    color: var(--clr-amber-500);
    font-size: calc(var(--font-size-3xl) * 2);
  }

  @media screen and (max-width: 1364px), screen and (max-height: 864px) {
    font-size: var(--text-font-size-laptop-lg);

    svg {
      font-size: var(--svg-font-size-laptop-lg);
    }
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    svg {
      font-size: var(--svg-font-size-laptop);
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    font-size: var(--text-font-size-tablet);

    svg {
      font-size: var(--svg-font-size-tablet);
    }
  }

  @media screen and (max-width: 480px) {
    svg {
      font-size: var(--svg-font-size-mobile);
    }
  }
`;

function AppLogo() {
  return (
    <SAppLogo>
      Do
      <SiDungeonsanddragons />
      Jo
    </SAppLogo>
  );
}

export default AppLogo;
