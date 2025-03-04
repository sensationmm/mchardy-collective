import { FC } from 'react';
import * as Styled from './styles';
import { IPaletteItem, palette } from '@/config/color';

type IScrollerItem = {
  quote: string;
  attribution: string;
  bgColor: string;
};

type IScrollerItemContent = Omit<IScrollerItem, 'bgColor'>;

type IScroller = {
  title: string;
  intro: string;
  items: IScrollerItemContent[];
};

const ScrollItem: FC<IScrollerItem> = ({ quote, attribution, bgColor }) => {
  return (
    <Styled.Item $bgcolor={bgColor}>
      <Styled.ItemQuote>“{quote}”</Styled.ItemQuote>
      <Styled.ItemAttr>{attribution}</Styled.ItemAttr>
    </Styled.Item>
  );
};

export const Scroller: FC<IScroller> = ({ title, intro, items }) => {
  const colors: Array<string> = [palette.secondary.light, palette.secondary.main, palette.primary.light, '#fff'];

  return (
    <div>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Intro>{intro}</Styled.Intro>
      <Styled.Slider>
        <Styled.SliderInner $numSlides={items.length}>
          {items.map((item, count) => {
            return <ScrollItem key={`scroller-item-${count}`} {...item} bgColor={colors[count % colors.length]} />;
          })}
        </Styled.SliderInner>
      </Styled.Slider>
    </div>
  );
};
