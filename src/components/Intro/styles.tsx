'use client';

import { palette } from '@/config/color';
import styled from 'styled-components';

export const Container = styled.div`
  color: ${palette.tertiary.dark};

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: ${palette.tertiary.dark};
    left: 0;
  }

  &:before {
    top: 20px;
  }

  &:after {
    top: 50px;
  }
`;

export const Text = styled.p`
  font-size: 72px;
  margin: 0 0 30px 0;
  text-indent: 200px;

  i,
  em {
    color: ${palette.primary.main};
    font-style: normal;
  }
`;
