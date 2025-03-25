import * as Styled from './styles';

type IFooter = {
  contact: string;
  linkedin: string;
};

export const Footer: React.FC<IFooter> = ({ contact, linkedin }) => {
  return (
    <Styled.Container>
      <Styled.Inner>
        <Styled.Logo>McHardy : Collective</Styled.Logo>

        <Styled.SocialHeader>Social & Contact</Styled.SocialHeader>
        <Styled.SocialItem>
          <a href={linkedin} target='_blank'>
            LinkedIn
          </a>
        </Styled.SocialItem>
        <Styled.SocialItem>
          <a href={`mailto:${contact}`}>{contact}</a>
        </Styled.SocialItem>
      </Styled.Inner>

      <Styled.Copyright>
        <div>&copy; 2025</div>
        <div>McHardyCollective.com</div>
        <div>All rights reserved</div>
      </Styled.Copyright>
    </Styled.Container>
  );
};
