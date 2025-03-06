'use client';

import { FC } from 'react';
import * as Styled from './styles';
import { palette } from '@/config/color';
import { animated, useSpring } from 'react-spring';
import { useScroll } from 'react-use-gesture';

type IScrollerItem = {
  quote: string;
  author: string;
  bgColor: string;
};

type IScrollerItemContent = Omit<IScrollerItem, 'bgColor'>;

export type IScroller = {
  title: string;
  intro: string;
  items: IScrollerItemContent[];
};

const ScrollItem: FC<IScrollerItem> = ({ quote, author, bgColor }) => {
  return (
    <Styled.Item $bgcolor={bgColor}>
      <Styled.ItemQuote>“{quote}”</Styled.ItemQuote>
      <Styled.ItemAttr>{author}</Styled.ItemAttr>
    </Styled.Item>
  );
};

export const Scroller: FC<IScroller> = ({ title, intro, items = [] }) => {
  const colors: Array<string> = [palette.secondary.light, palette.secondary.main, palette.primary.light, '#fff'];

  const [style, set] = useSpring(() => ({
    transform: 'perspective(500px) rotateY(0deg)',
  }));

  const clamp = (value: number, clampAt: number = 10) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${event.scrolling ? clamp(event.delta[0]) : 0}deg)`,
    });
  });

  return (
    <Styled.Container>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Intro>{intro}</Styled.Intro>
      <Styled.Slider {...bind()}>
        {items &&
          items.length > 0 &&
          items.map((item, count) => {
            return (
              <animated.div key={`scroller-item-${count}`} style={{ ...style }}>
                <ScrollItem {...item} bgColor={colors[count % colors.length]} />
              </animated.div>
            );
          })}
      </Styled.Slider>
    </Styled.Container>
  );
};
