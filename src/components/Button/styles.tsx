'use client';

import { palette } from '@/config/color';
import styled from 'styled-components';

export const Button = styled.button<{ $color: string }>`
  border: ${({ $color = '' }) => `2px solid ${$color}`};
  padding: 15px 40px;
  text-transform: uppercase;
  background: transparent;
  cursor: pointer;
  font-size: 18px;
  color: ${({ $color = '' }) => $color};
  transform: scale(1);
  transition: all linear 0.1s;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background: ${({ $color = '' }) => $color};
    top: 50%;
    transform: translateY(-50%);
  }

  &:before {
    left: 15px;
  }

  &:after {
    right: 15px;
  }

  &:hover {
    transform: scale(1.05);
  }
`;
