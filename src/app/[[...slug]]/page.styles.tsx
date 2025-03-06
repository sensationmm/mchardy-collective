'use client';

import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  grid-row-gap: 160px;

  @media screen and (max-width: 768px) {
    grid-row-gap: 60px;
  }
`;
