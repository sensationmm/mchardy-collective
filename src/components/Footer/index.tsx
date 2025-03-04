import * as Styled from './styles';

export const Footer = () => {
  return (
    <Styled.Container>
      <Styled.Inner>
        <Styled.Logo>McHardy : Collective</Styled.Logo>

        <Styled.SocialHeader>Social & Contact</Styled.SocialHeader>
        <Styled.SocialItem>LinkedIn</Styled.SocialItem>
        <Styled.SocialItem>richard@mchardycollective.com</Styled.SocialItem>
      </Styled.Inner>

      <Styled.Copyright>
        <div>&copy; 2025</div>
        <div>McHardyCollective.com</div>
        <div>All rights reserved</div>
      </Styled.Copyright>
    </Styled.Container>
  );
};
