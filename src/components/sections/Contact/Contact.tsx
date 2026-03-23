import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  Section, GlowBg, Inner, SectionLabel, Heading, SubText,
  EmailLink, SocialRow, SocialLink, EmailText, Footer,
} from './Contact.styled';

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Section id="contact" ref={ref}>
      <GlowBg />
      <Inner>
        <SectionLabel
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Contact
        </SectionLabel>
        <Heading
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          Let's build<br />something great.
        </Heading>
        <SubText
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Whether it's a new opportunity, an interesting project or just a
          good conversation about frontend architecture, my inbox is open.
        </SubText>
        <EmailLink
          href="mailto:guy.hasan@gmail.com"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Say Hello
        </EmailLink>
        <SocialRow
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SocialLink
            href="https://linkedin.com/in/guy-hassan-790a43160"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
          <SocialLink
            href="https://github.com/guyhassan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </SocialLink>
          <SocialLink
            href="mailto:guy.hasan@gmail.com"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </SocialLink>
        </SocialRow>
        <EmailText
          href="mailto:guy.hasan@gmail.com"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          guy.hasan@gmail.com
        </EmailText>
        <Footer>Designed & built by Guy Hassan &copy; 2026</Footer>
      </Inner>
    </Section>
  );
};

export default Contact;
