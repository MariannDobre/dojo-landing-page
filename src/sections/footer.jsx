import React from 'react';
import styled from 'styled-components';
import AppLogo from '../components/appLogo';

const SFooter = styled.footer`
  --max-width: 60rem;
  --margin: 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  max-width: var(--max-width);
  margin-bottom: var(--margin);

  h1 {
    --margin: 2rem;

    color: var(--clr-white);
    font-size: var(--font-size-base);
    font-family: var(--font-fam-sans);
    letter-spacing: var(--ltr-spacing-xs);
    text-transform: uppercase;
    text-align: center;
    margin-top: var(--margin);
  }

  p {
    --max-width: 60rem;
    --line-height: 1.4;

    max-width: var(--max-width);
    color: var(--clr-zinc-400);
    font-size: var(--font-size-base);
    font-family: var(--font-fam-seif);
    text-align: center;
    line-height: var(--line-height);
    letter-spacing: var(--ltr-spacing-xs);
    word-spacing: var(--word-spacing-xs);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    max-width: 44rem;

    h1 {
      font-size: var(--font-size-sm);
    }

    p {
      font-size: var(--font-size-sm);
    }
  }

  @media screen and (max-width: 480px) {
    max-width: 32rem;

    h1 {
      line-height: 1.4;
    }
  }
`;

function Footer() {
  return (
    <SFooter>
      <AppLogo />

      <h1>Live Freely. Drink Responsibly.</h1>

      <p>
        All rights reserved. All other trademarks and trade names are properties
        of their respective owners. Do not share or forward with anyone under
        the legal drinking age.
      </p>
    </SFooter>
  );
}

export default Footer;
