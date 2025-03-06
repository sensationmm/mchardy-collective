'use client';

import { palette } from '@/config/color';
import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 64px;
  text-align: center;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Intro = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 60px;
  color: ${palette.tertiary.main};

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const Slider = styled.div`
  overflow-x: auto;
  padding: 10px 10px 60px 10px;

  @media screen and (max-width: 768px) {
    padding-bottom: 0px;
  }
`;

export const SliderInner = styled.div<{ $numSlides: number }>`
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: repeat(${({ $numSlides = '' }) => $numSlides}, 1fr);
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const Item = styled.div<{ $bgcolor: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 540px;
  background-color: ${({ $bgcolor = '' }) => $bgcolor};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  white-space: normal;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 64px;
    height: 64px;
    background: rgba(0, 0, 0, 0.2);
    left: 50%;
    transform: translateX(-50%);
  }

  &:before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
    padding: 30px 30px 50px 30px;

    &:before,
    &:after {
      width: 30px;
      height: 30px;
    }
  }
`;

export const ItemQuote = styled.blockquote`
  font-size: 36px;
  text-align: center;

  @media screen and (max-width: 768px) {
    margin: 20px 0 0;
  }
`;

export const ItemAttr = styled.cite`
  font-size: 14px;
  font-style: normal;
  text-transform: uppercase;
`;
