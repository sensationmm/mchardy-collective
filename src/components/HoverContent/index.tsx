'use client';

import { useState } from 'react';
import { Button } from '../Button';
import * as Styled from './styles';

export type IHoverContentItem = {
  title: string;
  text: string;
  image: {
    node: {
      sourceUrl: string;
    };
  };
};

export type IHoverContent = {
  title: string;
  items: IHoverContentItem[];
  button: {
    url: string;
    title: string;
    target: string;
  };
};

export const HoverContent: React.FC<IHoverContent> = ({ title, items, button }) => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isHoverVisible, setIsHoverVisible] = useState(false);
  const [activeImage, setActiveImage] = useState<number>(0);

  const handleMouseMove = (e: MouseEvent) => {
    setHoverPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (activeImage: number) => {
    setActiveImage(activeImage);
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
      <Styled.Items>
        {items.map((item, count) => {
          return (
            <Styled.Item
              key={`item-${count}`}
              onMouseEnter={() => handleMouseEnter(count)}
              onMouseLeave={handleMouseLeave}
            >
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
        <Styled.ItemImage>
          {items.map((item, count) => {
            return (
              <Styled.ItemImageOption
                $active={(count === activeImage).toString()}
                key={`image-option-${count}`}
                src={item.image?.node.sourceUrl}
              ></Styled.ItemImageOption>
            );
          })}
        </Styled.ItemImage>
      </Styled.ItemImageContainer>

      {button && <Button label={button.title} link={button.url} target={button.target} />}
    </Styled.Container>
  );
};
