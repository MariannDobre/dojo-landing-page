import React from 'react';
import styled from 'styled-components';

const SBanner = styled.div`
  --banner-width: 100%;
  --banner-max-width: 112rem;
  --padding: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 100;
  padding: var(--padding);
  width: var(--banner-width);
  max-width: var(--banner-max-width);

  &.banner-visible {
    background-color: var(--clr-zinc-800);
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: all 0.35s ease;
  }

  &.banner-hidden {
    background-color: var(--clr-zinc-800);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-6.4rem);
    transition: all 0.35s ease;
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    padding: 2.4rem;
  }
`;

const BannerContent = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: var(--clr-white);
  font-size: var(--font-size-md);
  font-family: var(--font-fam-sans);
  text-align: center;
  line-height: 1.4;
  letter-spacing: var(--ltr-spacing-xs);
  word-spacing: var(--word-spacing-xs);

  svg {
    color: var(--clr-red-600);
    font-size: calc(var(--font-size-md) + 0.2rem);
  }

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    font-size: var(--font-size-sm);

    svg {
      font-size: var(--font-size-base);
    }
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    svg {
      font-size: var(--font-size-sm);
    }
  }

  @media screen and (max-width: 565px) {
    svg {
      align-self: flex-start;
    }
  }
`;

const CloseButton = styled.button`
  outline: none;
  border: none;
  color: var(--clr-red-600);
  background-color: transparent;
  font-size: var(--font-size-base);
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  cursor: pointer;
  transition: all 0.35s ease;

  &:focus {
    outline: none;
    border: none;
    color: var(--clr-white);
  }

  &:hover {
    color: var(--clr-red-400);
  }

  &:active {
    transform: translateY(0.4rem);
  }
`;

function Banner({ children, buttonContent = 'X', error, setError }) {
  return (
    <SBanner className={error ? 'banner-visible' : 'banner-hidden'}>
      <BannerContent>{children}</BannerContent>

      <CloseButton onClick={() => setError(false)}>{buttonContent}</CloseButton>
    </SBanner>
  );
}

export default Banner;
