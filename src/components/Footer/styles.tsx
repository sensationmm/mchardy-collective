'use client';

import { palette } from '@/config/color';
import styled from 'styled-components';

export const Container = styled.footer`
  background: ${palette.primary.main};
  padding: 60px 0 350px 0;
  overflow: hidden;

  &:after {
    content: 'McHardy';
    position: absolute;
    bottom: 40px;
    font-size: 200px;
    width: 100%;
    color: ${palette.primary.dark};
    font-family: 'bell-centennial-std-bold-lis', sans-serif;
    line-height: 1;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 100px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 30px 0 150px 0;
  }
`;

export const Inner = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

export const Logo = styled.div`
  font-size: 40px;
  font-family: 'bell-centennial-std-bold-lis', sans-serif;
  margin-bottom: 100px;

  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
    font-size: 30px;
  }
`;

export const SocialHeader = styled.div`
  font-size: 24px;
  color: #fff;
  font-family: 'bell-centennial-std-bold-lis', sans-serif;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const SocialItem = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: ${palette.primary.light};
  cursor: pointer;

  &:hover {
    color: #fff;

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 5px;
      height: 5px;
      background: #fff;
      top: 50%;
      transform: translateY(-50%);
    }

    &:before {
      left: -20px;
    }

    &:after {
      right: -20px;
    }
  }

  a {
    text-decoration: none;
  }
`;

export const Copyright = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: absolute;
  width: 100%;
  bottom: 20px;
  justify-content: space-between;
  padding: 0 20px;
  color: ${palette.primary.light};
  text-transform: uppercase;
  font-size: 14px;

  div:nth-child(2) {
    text-align: center;
  }

  div:nth-child(3) {
    text-align: right;
  }
`;
