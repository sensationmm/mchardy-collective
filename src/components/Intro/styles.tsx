'use client';

import { palette } from '@/config/color';
import styled, { keyframes } from 'styled-components';

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

export const Text = styled.div`
  font-size: 72px;
  margin: 0 0 30px 0;
  text-indent: 200px;
  color: ${palette.tertiary.light};

  i,
  em {
    /* color: ${palette.primary.main}; */
    font-style: normal;
  }
`;

const fadeInAnim = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const TextReveal = styled(Text)<{ $animate: 'true' | 'false' }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  color: ${palette.tertiary.dark};

  > span {
    opacity: 0;
    display: inline !important;
    white-space: normal !important;
    animation-name: ${({ $animate = '' }) => ($animate === 'true' ? fadeInAnim : '')};
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  &.animate {
    > span {
    }
  }
`;
