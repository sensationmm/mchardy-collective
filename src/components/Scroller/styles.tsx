'use client';

import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 64px;
  text-align: center;
`;

export const Intro = styled.p`
  font-size: 18px;
  text-align: center;
`;

export const Slider = styled.div`
  overflow-x: auto;
`;

export const SliderInner = styled.div<{ $numSlides: number }>`
  display: grid;
  grid-column-gap: 40px;
  grid-template-columns: repeat(${({ $numSlides = '' }) => $numSlides}, 1fr);
  white-space: nowrap;
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
`;

export const ItemQuote = styled.blockquote`
  font-size: 36px;
  text-align: center;
`;

export const ItemAttr = styled.cite`
  font-size: 14px;
  font-style: normal;
  text-transform: uppercase;
`;
