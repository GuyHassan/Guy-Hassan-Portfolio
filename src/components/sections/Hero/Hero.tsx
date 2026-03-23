import { useEffect, useState } from 'react';
import {
  HeroSection, BgImage, BgOverlay, GridLines, Content,
  Greeting, Name, TypewriterLine, BlinkCursor,
  CTAGroup, PrimaryBtn, SecondaryBtn, ScrollIndicator, ScrollLine,
} from './Hero.styled';

const TITLES = [
  'Senior Frontend Engineer',
  'Frontend Infrastructure',
  'React & TypeScript Specialist',
  'Microfrontend Architect',
];

const useTypewriter = (texts: string[], speed = 60, pause = 2000): string => {
  const [displayed, setDisplayed] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout> | undefined;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((i) => i + 1), speed);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((i) => i - 1), speed / 2);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex((i) => (i + 1) % texts.length);
    }

    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, speed, pause]);

  return displayed;
};

const Hero = () => {
  const displayed = useTypewriter(TITLES);

  return (
    <HeroSection id="home">
      <BgImage />
      <BgOverlay />
      <GridLines />

      <Content>
        <Greeting
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Hey, I'm
        </Greeting>

        <Name
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          Guy Hassan
        </Name>

        <TypewriterLine
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <span>{displayed}</span>
          <BlinkCursor />
        </TypewriterLine>

        <CTAGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7 }}
        >
          <PrimaryBtn to="timeline" smooth duration={600} offset={-64}>
            View My Journey
          </PrimaryBtn>
          <SecondaryBtn href="mailto:guy.hasan@gmail.com">
            Get in Touch
          </SecondaryBtn>
        </CTAGroup>
      </Content>

      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      >
        <span>scroll</span>
        <ScrollLine
          animate={{ scaleY: [1, 0.4, 1], opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
