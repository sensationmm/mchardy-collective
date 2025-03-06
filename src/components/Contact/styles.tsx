'use client';

import { palette } from '@/config/color';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 120px 0;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 100vw;
    height: 100%;
    transform: translateX(-50%);
    background: #fff;
  }

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const Intro = styled.div`
  font-size: 46px;
  text-align: center;
  margin-bottom: 60px;

  em {
    color: ${palette.primary.main};
    font-style: normal;
  }

  @media screen and (max-width: 768px) {
    font-size: 35px;
    margin-bottom: 30px;
  }
`;

export const Text = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;
