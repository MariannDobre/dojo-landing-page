import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ImSpinner11 } from 'react-icons/im';

const spinner = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SLoader = styled.div`
  --loader-width: 100%;
  --loader-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--loader-width);
  height: var(--loader-height);

  svg {
    color: var(--clr-amber-500);
    font-size: var(--font-size-xl);
    animation: ${spinner} 2s linear infinite;
  }
`;

function Loader() {
  return (
    <SLoader>
      <ImSpinner11 />
    </SLoader>
  );
}

export default Loader;
