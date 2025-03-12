'use client';

import { ReactElement, useState } from 'react';
import * as Styled from './styles';
import { IPaletteItem, palette } from '@/config/color';
import { Button } from '../Button';
import parse from 'html-react-parser';

type IBoxContent = {
  title: string;
  intro: string;
  heroText: ReactElement;
  mainText: ReactElement;
  strapline: ReactElement;
  icon: {
    node: {
      sourceUrl: string;
    };
  };
};

interface IBox extends IBoxContent {
  color: string;
  bgcolor: IPaletteItem;
  onClick: () => void;
  onMouseOver: () => void;
  onMouseOut: () => void;
  opened: boolean;
  hovered: boolean;
  slideDir: 'left' | 'right';
}

export type IBoxes = {
  boxes: IBoxContent[];
};

const Box: React.FC<IBox> = ({
  icon,
  title,
  intro,
  heroText,
  mainText,
  strapline,
  color,
  bgcolor,
  onClick,
  onMouseOver,
  onMouseOut,
  opened,
  hovered,
  slideDir,
}) => {
  return (
    <Styled.Box
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      $opened={opened.toString()}
      $hovered={hovered.toString()}
      onTouchStart={onClick}
    >
      <Styled.BoxCover $bgcolor={bgcolor} $opened={opened.toString()} $slidedir={slideDir}>
        <Styled.BoxMain>
          <img src={icon.node.sourceUrl} />
          <div>
            <Styled.BoxTitle color={color}>{title}</Styled.BoxTitle>
            <Styled.BoxIntro color={color}>{intro}</Styled.BoxIntro>
          </div>
          <Button label='Discover More' color={color} />
        </Styled.BoxMain>

        <Styled.BoxSub $color={color}>{parse(mainText.toString())}</Styled.BoxSub>
      </Styled.BoxCover>

      <Styled.BoxBase $bgcolor={bgcolor.light}>
        <div>{parse(heroText.toString())}</div>
        <Styled.BoxFooter>{strapline}</Styled.BoxFooter>
      </Styled.BoxBase>
      <Styled.BoxBackground $bgcolor={bgcolor} $hovered={hovered.toString()} $opened={opened.toString()} />
    </Styled.Box>
  );
};

export const Boxes: React.FC<IBoxes> = ({ boxes }) => {
  const [opened, setOpened] = useState<number>(0);
  const [hovered, setHovered] = useState<number>(0);

  const boxColor: IPaletteItem[] = [{} as IPaletteItem, palette.primary, palette.secondary];

  return (
    <Styled.Container>
      <Box
        {...boxes[0]}
        color='#ffffff'
        bgcolor={boxColor[1]}
        onMouseOver={() => setHovered(1)}
        onMouseOut={() => setHovered(0)}
        opened={opened === 1}
        hovered={hovered === 1 && opened === 0}
        onClick={() => setOpened(1)}
        slideDir='right'
      />
      <Box
        {...boxes[1]}
        color={palette.tertiary.dark}
        bgcolor={boxColor[2]}
        onMouseOver={() => setHovered(2)}
        onMouseOut={() => setHovered(0)}
        opened={opened === 2}
        hovered={hovered === 2 && opened === 0}
        onClick={() => setOpened(2)}
        slideDir='left'
      />

      <Styled.Trigger
        $bgcolor={boxColor[hovered].main || boxColor[opened].main}
        $triggered={(opened !== 0).toString()}
        $hovered={(hovered !== 0 || opened !== 0).toString()}
        onClick={() => setOpened(0)}
      />
    </Styled.Container>
  );
};
