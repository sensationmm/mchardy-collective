'use client';

import { IPaletteItem, palette } from '@/config/color';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  /* overflow: hidden; */

  > div:nth-child(2n -1) {
    transform-origin: center right;
  }

  > div:nth-child(2n) {
    transform-origin: center left;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const BoxesButton = styled.div`
  position: absolute;
  width: 75px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

export const Branding = styled(BoxesButton)`
  height: 200px;
  z-index: 3;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 75px;
    height: 75px;
    background: #fff;
    left: 0;
  }

  &:before {
    top: 0;
  }

  &:after {
    bottom: 0;
  }

  @media screen and (max-width: 1024px) {
    width: 130px;
    height: 50px;

    &:before,
    &:after {
      width: 50px;
      height: 50px;
      top: 0;
      left: auto;
    }

    &:before {
      left: 0;
    }

    &:after {
      right: 0;
    }
  }
`;

export const Trigger = styled(BoxesButton)<{ $bgcolor: string; $triggered: string; $hovered: string }>`
  opacity: ${({ $hovered = 'false' }) => ($hovered === 'true' ? 1 : 0)};
  background: #fff;
  width: 74px;
  height: 74px;
  z-index: 3;
  transition: all linear 0.1s;
  transform-origin: center !important;
  transform: ${({ $triggered = 'false', $bgcolor = '' }) =>
    $triggered === 'true'
      ? `translateX(-50%) translateY(-50%) rotate(${$bgcolor === palette.primary.main ? '90deg' : '-90deg'})`
      : 'translateX(-50%) translateY(-50%) rotate(0deg)'};
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: ${({ $triggered = 'false' }) => ($triggered === 'true' ? '2px' : '42px')};
    height: ${({ $triggered = 'false' }) => ($triggered === 'true' ? '20px' : '42px')};
    background: ${({ $bgcolor = '' }) => $bgcolor};
    top: 50%;
    left: 50%;
    transform-origin: center;
    transition: all linear 0.2s;
  }

  &:before {
    transform: translateX(-50%) translateY(-50%)
      rotate(${({ $triggered = 'false' }) => ($triggered === 'true' ? '45deg' : '0deg')});
  }

  &:after {
    transform: translateX(-50%) translateY(-50%)
      rotate(${({ $triggered = 'false' }) => ($triggered === 'true' ? '-45deg' : '0deg')});
  }

  @media screen and (max-width: 1024px) {
    width: 50px;
    height: 50px;
  }
`;

export const Box = styled.div<{ $hovered: string; $opened: string }>`
  z-index: ${({ $hovered = 'false', $opened = 'false' }) => ($hovered === 'true' || $opened === 'true' ? '2' : '1')};
  cursor: pointer;
`;

export const BoxMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  h2 {
    margin: 20px 0 0 0;
  }

  p {
    margin: 0 0 20px 0;
  }

  @media screen and (max-width: 1024px) {
    img {
      max-width: 100px;
    }
  }
`;

export const BoxSub = styled.div<{ $color: string; $opened: string }>`
  position: absolute;
  width: 100%;
  padding: 0 100px;
  top: 50%;
  /* transform: translateY(-50%); */
  font-size: 28px;
  text-align: center;
  color: ${({ $color = '' }) => $color};

  transform: ${({ $opened = 'false' }) => ($opened === 'true' ? 'translateY(-50%)' : 'translateY(-40%)')};
  opacity: ${({ $opened = 'false' }) => ($opened === 'true' ? 1 : 0)};
  transition: ${({ $opened = 'false' }) => ($opened === 'true' ? 'all linear 0.3s 0.5s' : 'all linear 0s 0s')};

  @media screen and (max-width: 1024px) {
    padding: 0 30px;
    font-size: 22px;
  }
`;

export const BoxBackground = styled.div<{ $bgcolor: IPaletteItem; $hovered: string; $opened: string }>`
  background: ${({ $bgcolor }) => $bgcolor.main};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  transform-origin: center;
  transform: ${({ $hovered = 'false' }) => ($hovered === 'true' ? 'scale(1.05)' : 'scale(1)')};
  transition: all linear 0.1s;
  display: ${({ $opened = 'false' }) => ($opened === 'true' ? 'none' : 'block')};
`;

export const BoxFooter = styled.div`
  font-size: 18px;
`;

export const BoxCover = styled.div<{ $bgcolor: IPaletteItem; $opened: string; $slidedir: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ $bgcolor }) => $bgcolor.main};
  padding: 50px 100px;
  transition: all ease-in-out 0.5s;
  transform: ${({ $opened = 'false', $slidedir = 'left' }) =>
    $opened === 'true' ? `translateX(${$slidedir === 'right' ? '100%' : '-100%'})` : 'translateX(0%)'};
  z-index: 2;
  height: 100%;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    background: ${({ $bgcolor }) => $bgcolor.dark};
    transform: ${({ $opened = 'false' }) => `translateX(-50%) scale(${$opened === 'true' ? '1' : '0'})`};
    transition: all linear 0.5s;
    left: 50%;
  }

  &:before {
    top: 0px;
    transform-origin: top center;
  }

  &:after {
    bottom: 0px;
    transform-origin: bottom center;
  }

  ${BoxMain} {
    opacity: ${({ $opened = 'false' }) => ($opened === 'true' ? 0 : 1)};
  }

  ${BoxSub} {
    opacity: ${({ $opened = 'false' }) => ($opened === 'true' ? 1 : 0)};
  }

  @media screen and (max-width: 1024px) {
    padding: 40px 30px;
    transform: ${({ $opened = 'false', $slidedir = 'left' }) =>
      $opened === 'true' ? `translateY(${$slidedir === 'right' ? '100%' : '-100%'})` : 'translateY(0%)'};

    &:before,
    &:after {
      width: 75px;
      height: 75px;
    }
  }
`;

export const BoxBase = styled.div<{ $bgcolor: string }>`
  position: absolute;
  top: 0;
  height: 100%;
  background: ${({ $bgcolor = '' }) => $bgcolor};
  padding: 50px;
  z-index: 1;
  font-size: 50px;

  p {
    margin: 0;
  }

  @media screen and (max-width: 1024px) {
    font-size: 30px;
    padding: 30px;
  }
`;

export const BoxBaseInner = styled.div<{ $opened: string }>`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transform: ${({ $opened = 'false' }) => ($opened === 'true' ? 'translateY(0)' : 'translateY(20px)')};
  opacity: ${({ $opened = 'false' }) => ($opened === 'true' ? 1 : 0)};
  transition: ${({ $opened = 'false' }) => ($opened === 'true' ? 'all linear 0.3s 0.5s' : 'all linear 0s 0s')};
`;

export const BoxTitle = styled.h2<{ color: string }>`
  font-size: 48px;
  color: ${({ color = '' }) => color};
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 38px;
    margin: 10px 0;
  }
`;

export const BoxIntro = styled.p<{ color: string }>`
  font-size: 24px;
  color: ${({ color = '' }) => color};
  text-align: center;

  @media screen and (max-width: 1024px) {
    margin: 0 0 10px 0;
  }
`;
