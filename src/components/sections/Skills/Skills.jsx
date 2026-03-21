import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalData } from '../../../data';
import {
  Section, Header, SectionLabel, Heading,
  CategoriesGrid, CategoryCard, CategoryTitle, SkillList, SkillItem,
} from './Skills.styled';

const CATEGORIES = [
  { label: 'Core', key: 'core' },
  { label: 'Frontend', key: 'frontend' },
  { label: 'DevOps & Cloud', key: 'devops' },
  { label: 'Testing', key: 'testing' },
  { label: 'Tools', key: 'tools' },
  { label: 'AI Tools', key: 'ai' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Section id="skills" ref={ref}>
      <Header>
        <SectionLabel
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Toolkit
        </SectionLabel>
        <Heading
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Skills & Expertise
        </Heading>
      </Header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <CategoriesGrid>
          {CATEGORIES.map(({ label, key }) => (
            <CategoryCard key={key} variants={cardVariants}>
              <CategoryTitle>{label}</CategoryTitle>
              <SkillList>
                {personalData.skills[key].map((skill) => (
                  <SkillItem key={skill} variants={itemVariants}>
                    {skill}
                  </SkillItem>
                ))}
              </SkillList>
            </CategoryCard>
          ))}
        </CategoriesGrid>
      </motion.div>
    </Section>
  );
};

export default Skills;
