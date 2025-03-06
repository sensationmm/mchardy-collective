'use client';

import styled from 'styled-components';

export const Button = styled.a<{ $color: string }>`
  display: inline-block;
  border: ${({ $color = '' }) => `2px solid ${$color}`};
  padding: 15px 40px;
  text-transform: uppercase;
  background: transparent;
  cursor: pointer;
  font-size: 18px;
  color: ${({ $color = '' }) => $color};
  transform: scale(1);
  transition: all linear 0.1s;
  text-decoration: none;
  text-align: center;

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

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 10px 30px;
  }
`;
