'use client';

import { palette } from '@/config/color';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const Intro = styled.div`
  font-size: 46px;
  text-align: center;
  margin-bottom: 60px;

  em {
    color: ${palette.primary.main};
    font-style: normal;
  }
`;

export const Text = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
`;
