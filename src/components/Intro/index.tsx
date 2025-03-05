import { FC } from 'react';
import { Button } from '../Button';
import * as Styled from './styles';

export type IIntro = {
  content: string;
  cta: {
    url: string;
    title: string;
    target: string;
  };
};

export const Intro: FC<IIntro> = ({ content, cta }) => {
  return (
    <Styled.Container>
      <Styled.Text dangerouslySetInnerHTML={{ __html: content.replace(/<\/?p[^>]*>/g, '') || ' ' }} />

      <Button label={cta.title} link={cta.url} target={cta.target} />
    </Styled.Container>
  );
};
