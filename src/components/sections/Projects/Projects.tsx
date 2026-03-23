import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import {
  Section, Inner, Header, SectionLabel, Heading, SubText,
  Grid, Card, ProjectType, ProjectTitle, ProjectDesc, Tags, Tag, Arrow,
} from './Projects.styled';

interface Project {
  type: string;
  title: string;
  description: string;
  tags: string[];
  href: string | null;
}

const PROJECTS: Project[] = [
  {
    type: 'Frontend Infrastructure',
    title: 'Nx Monorepo Host Architecture',
    description:
      'Migrating a legacy React monolith to a modular Nx monorepo with Module Federation at Payoneer. Built the application bootstrap layer handling auth, HTTP clients, and host initialization.',
    tags: ['React', 'TypeScript', 'Nx', 'Module Federation', 'Webpack'],
    href: null,
  },
  {
    type: 'Platform Engineering',
    title: 'Shared Platform Libraries',
    description:
      'Designed and built reusable platform libraries enabling standalone applications and scalable microfrontend integration across multiple product teams.',
    tags: ['React', 'TypeScript', 'Design Systems', 'LaunchDarkly'],
    href: null,
  },
  {
    type: 'Personal Projects',
    title: 'Open Source & Side Projects',
    description:
      'A collection of personal side projects exploring new technologies and ideas. Check my GitHub for the full list.',
    tags: ['React', 'Node.js', 'JavaScript', 'Various'],
    href: 'https://github.com/guyhassan',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <Section id="projects" ref={ref}>
      <Inner>
        <Header>
          <SectionLabel
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Work
          </SectionLabel>
          <Heading
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Projects & Highlights
          </Heading>
          <SubText
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Things I've built, shipped and maintained.
          </SubText>
        </Header>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <Grid>
            {PROJECTS.map((project) => {
              const inner = (
                <>
                  {project.href && <Arrow>&#x2197;</Arrow>}
                  <ProjectType>{project.type}</ProjectType>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDesc>{project.description}</ProjectDesc>
                  <Tags>
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Tags>
                </>
              );
              return (
                <Card
                  key={project.title}
                  $clickable={!!project.href}
                  variants={cardVariants}
                  as={project.href ? 'a' : 'div'}
                  href={project.href || undefined}
                  target={project.href ? '_blank' : undefined}
                  rel={project.href ? 'noopener noreferrer' : undefined}
                >
                  {inner}
                </Card>
              );
            })}
          </Grid>
        </motion.div>
      </Inner>
    </Section>
  );
};

export default Projects;
