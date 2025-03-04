import { Button } from '../Button';
import * as Styled from './styles';

export const Intro = () => {
  return (
    <Styled.Container>
      <Styled.Text>
        McHardy Collective is <i>a catalyst for growth.</i> We are the go-to connector for brands and agencies seeking
        to build lasting, <i>meaningful partnerships</i> that are mutually beneficial.
      </Styled.Text>

      <Button label="Let's Connect" />
    </Styled.Container>
  );
};
