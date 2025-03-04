import { FC, ReactElement } from 'react';
import * as Styled from './styles';
import { Button } from '../Button';

type IContact = {
  intro: ReactElement;
  text: string;
};

export const Contact: FC<IContact> = ({ intro, text }) => {
  return (
    <Styled.Container>
      <Styled.Intro>{intro}</Styled.Intro>
      <Styled.Text>
        {text}
        <Styled.Buttons>
          <Button label='Talk to Us' />
          <Button label='Book a Meeting' />
        </Styled.Buttons>
      </Styled.Text>
    </Styled.Container>
  );
};
