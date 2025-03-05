'use client';

import { useState } from 'react';
import { Button } from '../Button';
import * as Styled from './styles';

export type IHoverContentItem = {
  title: string;
  text: string;
};

export type IHoverContent = {
  title: string;
  items: IHoverContentItem[];
};

export const HoverContent: React.FC<IHoverContent> = ({ title, items }) => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isHoverVisible, setIsHoverVisible] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    setHoverPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsHoverVisible(true);
    window.addEventListener('mousemove', handleMouseMove);
  };

  const handleMouseLeave = () => {
    setIsHoverVisible(false);
    window.removeEventListener('mousemove', handleMouseMove);
  };

  return (
    <Styled.Container>
      <Styled.Header>{title}</Styled.Header>
      <Styled.Items onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {items.map((item, count) => {
          return (
            <Styled.Item key={`item-${count}`}>
              <Styled.ItemCount>{(count + 1).toString().padStart(2, '0')}</Styled.ItemCount>
              <Styled.ItemTitle>{item.title}</Styled.ItemTitle>
              <Styled.ItemText>{item.text}</Styled.ItemText>
            </Styled.Item>
          );
        })}
      </Styled.Items>

      <Styled.ItemImageContainer
        style={{ opacity: isHoverVisible ? 1 : 0, left: hoverPosition.x, top: hoverPosition.y }}
      >
        <Styled.ItemImage></Styled.ItemImage>
      </Styled.ItemImageContainer>

      <Button label="Let's Connect" />
    </Styled.Container>
  );
};
