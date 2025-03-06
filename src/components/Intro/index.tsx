'use client';

import { FC, useEffect, useRef, useState } from 'react';
import { Button } from '../Button';
import * as Styled from './styles';
import parse from 'html-react-parser';
import { palette } from '@/config/color';

export type IIntro = {
  content: string;
  button: {
    url: string;
    title: string;
    target: string;
  };
};

export const Intro: FC<IIntro> = ({ content, button }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const formatContent = (string: string) => {
    let content = string.replace(/<\/?p[^>]*>/g, '');

    const regex = /<em>(.*?)<\/em>/g;

    const emTexts = Array.from(content.matchAll(regex), (m) => m[1]);
    const noHtml = content.replace(/<[^>]*>/g, '');
    const emTextsIds = emTexts.map((em) => noHtml.indexOf(em));

    let currentEmTarget = 0;
    let isEm = false;
    const markup = noHtml.split('').map((char, count) => {
      if (
        count >= emTextsIds[currentEmTarget] &&
        count < emTextsIds[currentEmTarget] + emTexts[currentEmTarget]?.length
      ) {
        isEm = true;
      } else {
        if (
          count === emTextsIds[currentEmTarget] + emTexts[currentEmTarget]?.length &&
          currentEmTarget < emTexts.length - 1
        ) {
          currentEmTarget++;
        }
        isEm = false;
      }

      return `<span style="animation-delay:${count * 0.03}s;${
        isEm ? `color:${palette.primary.main}` : ''
      }">${char}</span>`;
    });

    return parse(markup.join(''));
  };

  return (
    <Styled.Container>
      <div>
        <Styled.Text>{formatContent(content.replace(/<[^>]*>/g, ''))}</Styled.Text>
        <Styled.TextReveal ref={ref} $animate={`${isVisible ? 'true' : 'false'}`}>
          {formatContent(content)}
        </Styled.TextReveal>
      </div>

      {button && <Button label={button.title} link={button.url} target={button.target} />}
    </Styled.Container>
  );
};
