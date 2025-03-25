'use client';

import { palette } from '@/config/color';
import styled from 'styled-components';
import { Button } from '../Button/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${Button} {
    align-self: center;
  }
`;

export const Header = styled.h2`
  font-size: 220px;
  margin: 0;

  @media screen and (max-width: 1350px) {
    font-size: 160px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 120px;
  }

  @media screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

export const Items = styled.ol`
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid ${palette.tertiary.light};
  margin-bottom: 50px;
  z-index: 2;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: 2fr 3fr 2fr;
  grid-column-gap: 60px;
  padding: 50px 0;
  border-bottom: 1px solid ${palette.tertiary.light};
  color: ${palette.tertiary.main};
  cursor: pointer;

  &:hover {
    color: ${palette.tertiary.dark};

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 24px;
      height: 24px;
      background: ${palette.tertiary.dark};
      left: 50%;
      transform: translateX(-50%);
    }

    &:before {
      top: 0;
    }

    &:after {
      bottom: 0;
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
    margin-bottom: 20px;
    padding: 0 0 20px 0;
  }
`;

export const ItemCount = styled.div`
  font-size: 64px;
`;

export const ItemTitle = styled.div`
  font-size: 64px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 36px;
    text-align: left;
  }
`;

export const ItemText = styled.div`
  font-size: 18px;
`;

export const ItemImageContainer = styled.div`
  position: fixed;
  transform-origin: center;
  transform: rotate(10deg) translateX(-150%);
  z-index: 20;
  transition: opacity linear 0.1s;
  z-index: 1;
`;

export const ItemImage = styled.div`
  width: 475px;
  height: 475px;
  background: ${palette.tertiary.dark};

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-origin: bottom right;
  }

  &:before {
    background: ${palette.primary.main};
    -webkit-transform: rotate(-2deg);
    transform: rotate(-1deg);
    z-index: -1;
  }

  &:after {
    background: ${palette.secondary.main};
    -webkit-transform: rotate(-4deg);
    transform: rotate(-2deg);
    z-index: -2;
  }
`;

export const ItemImageOption = styled.img<{ $active: string }>`
  display: ${({ $active = 'false' }) => ($active === 'true' ? 'block' : 'none')};
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
