'use client';
import React, { useState, useEffect } from 'react';
import * as Styled from './styles';

type ILanding = {
  contact: string;
};

export const Landing: React.FC<ILanding> = ({ contact }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fontSize = 1 - scrollPosition / 1000;
  const navWidth = fontSize > 0.6 ? 1 : fontSize + 0.6;
  const isSmallNav = navWidth <= 0.4;

  return (
    <Styled.Container $height={scrollPosition} $width={navWidth}>
      <Styled.Motto $visible={isSmallNav.toString()}>
        <span>UK Based</span>
        Work Globally
      </Styled.Motto>

      <Styled.Title $size={fontSize > 0.4 ? fontSize : 0.4}>
        <Styled.TitleLarge $visible={(!isSmallNav).toString()}>McHardy : Collective</Styled.TitleLarge>
        <Styled.TitleSmall $visible={isSmallNav.toString()}>M&nbsp;&nbsp;:&nbsp;&nbsp;C</Styled.TitleSmall>
      </Styled.Title>

      <Styled.Contact $visible={isSmallNav.toString()} href={`mailto:${contact}?subject=Let's+Talk`}>
        Contact
      </Styled.Contact>
    </Styled.Container>
  );
};
