import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { personalData } from '../../../data';
import profileImage from '../../../assets/images/profile.jpeg';
import {
  Section, Grid, ImageWrapper, ImageFrame, GlowRing, Dot,
  SectionLabel, Heading, Bio, StatsGrid, StatItem, StatValue, StatLabel,
} from './About.styled';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Section id="about" ref={ref}>
      <Grid>
        <ImageWrapper
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <GlowRing
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <ImageFrame>
            <img src={profileImage} alt="Guy Hassan" />
          </ImageFrame>
          <Dot
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            4+ yrs<br />Payoneer
          </Dot>
        </ImageWrapper>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionLabel variants={fadeUp}>Who I am</SectionLabel>
          <Heading variants={fadeUp}>
            Building things<br />that actually scale.
          </Heading>
          <Bio variants={fadeUp}>
            I'm a <strong>Senior Frontend Engineer</strong> at Payoneer, where
            I work on frontend infrastructure and large-scale product systems.
            Currently part of the Baseline team, I help shape the foundation
            that other teams build on - from the app bootstrap layer to
            microfrontend architecture.
          </Bio>
          <Bio variants={fadeUp}>
            I care deeply about <strong>maintainable code</strong>, reusable
            platform components, and making life easier for the developers
            around me. I'm as comfortable in architecture discussions as I am
            writing the actual code.
          </Bio>

          <StatsGrid
            variants={containerVariants}
          >
            {personalData.stats.map((stat) => (
              <StatItem key={stat.label} variants={fadeUp}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsGrid>
        </motion.div>
      </Grid>
    </Section>
  );
};

export default About;
