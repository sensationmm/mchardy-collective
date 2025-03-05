import { FC, ReactElement } from 'react';
import * as Styled from './styles';
import { Button } from '../Button';

export type IContact = {
  intro: string;
  text: string;
  buttons: Array<{
    cta: {
      url: string;
      title: string;
      target: string;
    };
  }>;
};

export const Contact: FC<IContact> = ({ intro, text, buttons = [] }) => {
  return (
    <Styled.Container>
      <Styled.Intro dangerouslySetInnerHTML={{ __html: intro.replace(/<\/?p[^>]*>/g, '') || ' ' }} />
      <Styled.Text>
        {text}
        <Styled.Buttons>
          {buttons &&
            buttons.map((button, count) => (
              <Button
                key={`contact-buttons-${count}`}
                label={button.cta.title}
                link={button.cta.url}
                target={button.cta.target}
              />
            ))}
        </Styled.Buttons>
      </Styled.Text>
    </Styled.Container>
  );
};
