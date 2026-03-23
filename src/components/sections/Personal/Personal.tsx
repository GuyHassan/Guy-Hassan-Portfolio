import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { personalData } from '../../../data';
import {
  Section, Header, SectionLabel, Heading, SubText, Grid, Card, Icon, Title, Description,
} from './Personal.styled';

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const Personal = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Section id="personal" ref={ref}>
      <Header>
        <SectionLabel
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Beyond Code
        </SectionLabel>
        <Heading
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Outside the Terminal
        </Heading>
        <SubText
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          There's a person behind the code. Here's what keeps me going
          when the laptop is closed.
        </SubText>
      </Header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <Grid>
          {personalData.outside.map((item) => (
            <Card key={item.title} variants={cardVariants}>
              <Icon>{item.icon}</Icon>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
            </Card>
          ))}
        </Grid>
      </motion.div>
    </Section>
  );
};

export default Personal;
