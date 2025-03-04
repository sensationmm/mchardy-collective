import { palette } from '@/config/color';
import styled from 'styled-components';

export const Container = styled.div<{ $height: number; $width: number }>`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: ${({ $width = 1 }) => `${100 * $width}%`};
  min-width: 40%;
  height: ${({ $height = 0 }) => `calc(100vh - ${$height}px)`};
  min-height: 50px;
  background-color: ${palette.primary.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Title = styled.h1<{ $size: number }>`
  width: 100%;
  height: 30px;
  align-self: center;
  color: #fff;
  text-align: center;
  margin: 0;
  font-size: ${({ $size = 1 }) => `${$size * 60}px`};
`;

export const TitleLarge = styled.div<{ $visible: string }>`
  position: absolute;
  top: 0;
  width: 100%;
  opacity: ${({ $visible = 'true' }) => ($visible === 'true' ? 1 : 0)};
  transition: opacity ease-in 0.1s;
`;

export const TitleSmall = styled.div<{ $visible: string }>`
  position: absolute;
  top: 0;
  width: 100%;
  opacity: ${({ $visible = 'false' }) => ($visible === 'true' ? 1 : 0)};
  transition: opacity ease-in 0.1s;
  font-size: ${0.4 * 60}px;
`;

export const Motto = styled.div<{ $visible: string }>`
  position: absolute;
  left: 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  color: ${palette.primary.light};
  opacity: ${({ $visible = 'false' }) => ($visible === 'true' ? 1 : 0)};
  transition: opacity ease-in 0.1s;

  span {
    font-weight: bold;
    color: #fff;
  }
`;

export const Contact = styled.div<{ $visible: string }>`
  position: absolute;
  right: 20px;
  font-size: 16px;
  text-transform: uppercase;
  color: #fff;
  opacity: ${({ $visible = 'false' }) => ($visible === 'true' ? 1 : 0)};
  transition: opacity ease-in 0.1s;
`;
