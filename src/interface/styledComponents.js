import styled, { keyframes } from 'styled-components';

// THE BLUR/SHADOW EFFECT
export const Blur = styled.span`
  position: absolute;
  top: ${(props) => props.$top};
  right: ${(props) => props.$right};
  bottom: ${(props) => props.$bottom};
  left: ${(props) => props.$left};
  box-shadow: 0 0 ${(props) => props.$blurRadius}
    ${(props) => props.$spreadRadius} ${(props) => props.$shadowColor};
  z-index: ${(props) => props.$zIndex};
`;

Blur.defaultProps = {
  $top: 'auto',
  $right: 'auto',
  $bottom: 'auto',
  $left: 'auto',
  $blurRadius: '20rem',
  $spreadRadius: '10rem',
  $shadowColor: '#fff',
  $zIndex: '-1',
};

// THE CONTAINER THAT HOLDS THE BARS
export const SectionBars = styled.div`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  align-items: ${(props) => props.$alignItems};
  justify-content: ${(props) => props.$justifyContent};
  gap: ${(props) => props.$gap};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
`;

SectionBars.defaultProps = {
  $direction: 'row',
  $alignItems: 'flex-start',
  $justifyContent: 'flex-start',
  $gap: '0.2rem',
  $width: 'auto',
  $height: '100%',
};

// THE BARS FOR DESIGN
export const Bar = styled.div`
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$bgColor};
`;

Bar.defaultProps = {
  $width: '0.2rem',
  $height: '100%',
  $bgColor: 'var(--clr-amber-500)',
};

// TITLE FOR EACH SECTION
export const SectionTitle = styled.h1`
  color: var(--clr-white);
  font-size: ${(props) => props.$fontSize};
  font-family: var(--font-fam-serif);
  line-height: ${(props) => props.$lineHeight};
  text-transform: uppercase;
  letter-spacing: var(--ltr-spacing-xs);
  word-spacing: var(--word-spacing-xs);

  span {
    border-bottom: 0.2rem solid var(--clr-amber-500);
  }

  ${(props) => {
    switch (props.$alignSelf) {
      case 'start':
        return 'align-self: flex-start;';
      case 'end':
        return 'align-self: flex-end;';
      default:
        return '';
    }
  }}

  ${(props) => {
    switch (props.$textAlign) {
      case 'start':
        return 'text-align: start;';
      case 'end':
        return 'text-align: end;';
      default:
        return '';
    }
  }}

  @media screen and (max-width: 1024px), screen and (max-height: 724px) {
    font-size: var(--font-size-lg);
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    font-size: var(--font-size-base);
  }
`;

SectionTitle.defaultProps = {
  $fontSize: 'var(--font-size-2xl)',
  $lineHeight: '1.4',
};

// DEFAULT BUTTON FOR EACH SECTION AND EACH INTERACTIVITY
export const CustomButton = styled.button`
  outline: ${(props) => props.$outline};
  border: ${(props) => props.$border};
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  align-self: ${(props) => props.$alignSelf};
  color: ${(props) => props.$textColor};
  background-color: ${(props) => props.$bgColor};
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  font-family: ${(props) => props.$fontFam};
  text-transform: ${(props) => props.$textTransform};
  padding: ${(props) => props.$paddingY} ${(props) => props.$paddingX};
  letter-spacing: ${(props) => props.$ltrSpacing};
  word-spacing: ${(props) => props.$wordSpacing};
  cursor: pointer;
  transition: ${(props) => props.$transition} 0.35s ease;
  position: relative;
  z-index: ${(props) => props.$zIndex};
  overflow: ${(props) => props.$overflow};

  &:focus {
    color: ${(props) => props.$textColorFocus};
    outline: none;
    border-color: ${(props) => props.$borderFocus};
  }

  &:hover {
    color: ${(props) => props.$textColorHover};
    border-color: ${(props) => props.$borderHover};
  }

  &:active {
    transform: translateY(0.4rem);
  }

  &:disabled {
    color: ${(props) => props.$textColorDisabled};
    background-color: ${(props) => props.$bgColorDisabled};
    border-color: ${(props) => props.$borderDisabled};
    cursor: ${(props) => props.$cursorDisabled};
  }

  &:disabled::before,
  &:disabled:hover::before {
    content: none;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.$bgColorBefore};
    top: 0;
    z-index: -1;

    ${(props) => {
      switch (props.$positionBefore) {
        case 'left':
          return 'left: calc(-100% - 0.2rem);';
        case 'right':
          return 'right: calc(-100% - 0.2rem);';
        default:
          return '';
      }
    }}

    ${(props) => {
      switch (props.$positionBefore) {
        case 'left':
          return 'transition: left 0.35s ease;';
        case 'right':
          return 'transition: right 0.35s ease;';
        default:
          return '';
      }
    }}
  }

  &:hover::before {
    ${(props) => {
      switch (props.$positionBefore) {
        case 'left':
          return 'left: 0;';
        case 'right':
          return 'right: 0;';
        default:
          return '';
      }
    }}
  }

  @media screen and (max-width: 768px), screen and (max-height: 664) {
    padding: 0.4rem 2rem;
    font-size: calc(var(--font-size-sm) - 0.2rem);
    border-width: 0.1rem;
  }
`;

CustomButton.defaultProps = {
  $outline: 'none',
  $border: '0.2rem solid var(--clr-amber-500)',
  $alignSelf: 'flex-start',
  $width: 'auto',
  $height: 'auto',
  $paddingY: '0.8rem',
  $paddingX: '2.4rem',
  $textColor: 'var(--clr-amber-500)',
  $bgColor: 'transparent',
  $fontSize: 'var(--font-size-base)',
  $fontWeight: '700',
  $fontFam: 'var(--font-fam-sans)',
  $textTransform: 'uppercase',
  $ltrSpacing: 'var(--ltr-spacing-xs)',
  $wordSpacing: 'var(--word-spacing-xs)',
  $transition: 'all',
  $zIndex: '1',
  $overflow: 'hidden',

  $borderFocus: 'var(--clr-white)',
  $textColorFocus: 'var(--clr-white)',

  $textColorHover: 'var(--clr-black)',
  $borderHover: 'var(--clr-amber-400)',

  $borderDisabled: 'var(--clr-zinc-700)',
  $textColorDisabled: 'var(--clr-zinc-700)',
  $bgColorDisabled: 'transparent',
  $cursorDisabled: 'default',

  $bgColorBefore: 'var(--clr-amber-400)',
};

// FLEX CONTAINER
export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  align-items: ${(props) => props.$alignItems};
  justify-content: ${(props) => props.$justifyContent};
  gap: ${(props) => props.$gap};
  width: ${(props) => props.$width};
  max-width: ${(props) => props.$maxWidth};
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$bgColor};
`;

Flex.defaultProps = {
  $direction: 'row',
  $alignItems: 'flex-start',
  $justifyContent: 'flex-start',
  $gap: '0',
  $width: 'auto',
  $maxWidth: 'auto',
  $height: 'auto',
  $bgColor: 'transparent',
};

// GRID CONTAINER
export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.$columns};
  grid-template-rows: ${(props) => props.$rows};
  grid-gap: ${(props) => props.$gridGap};
  width: ${(props) => props.$width};
  max-width: ${(props) => props.$maxWidth};
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$bgColor};
`;

Grid.defaultProps = {
  $columns: 'auto',
  $rows: 'auto',
  $gridGap: '0',
  $width: 'auto',
  $maxWidth: 'auto',
  $height: 'auto',
  $bgColor: 'transparent',
};

// PLACEHOLDERS ANIMATION
const loadingAnimation = keyframes`
  0% {
    background-color: var(--clr-zinc-700);
  }
  100% {
    background-color: var(--clr-zinc-400);
  }
`;

export const SectionPlaceholder = styled.div`
  width: ${(props) => props.$placeholderWidth};
  max-width: ${(props) => props.$placeholderMaxWidth};
  height: ${(props) => props.$placeholderHeight};
  animation: ${loadingAnimation} 1.5s linear infinite alternate;
`;

SectionPlaceholder.defaultProps = {
  $placeholderWidth: '100%',
  $placeholderMaxWidth: '100%',
  $placeholderHeight: 'auto',
};

export const ImagePlaceholder = styled.div`
  width: ${(props) => props.$imagePlaceholderWidth};
  max-width: ${(props) => props.$imagePlaceholderMaxWidth};
  height: ${(props) => props.$imagePlaceholderHeight};
  animation: ${loadingAnimation} 1.5s linear infinite alternate;
`;

ImagePlaceholder.defaultProps = {
  $imagePlaceholderWidth: '100%',
  $imagePlaceholderMaxWidth: '100%',
  $imagePlaceholderHeight: 'auto',
};
