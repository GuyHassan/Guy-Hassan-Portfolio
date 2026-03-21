import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalData } from '../../../data';
import {
  Section, Inner, Header, SectionLabel, Heading,
  TimelineWrapper, TimelineLine, TimelineItem, TimelineDot,
  Card, Period, Role, Company, Highlights, HighlightItem, Tags, Tag,
} from './Timeline.styled';

const Timeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeId, setActiveId] = useState(null);

  return (
    <Section id="timeline" ref={ref}>
      <Inner>
        <Header>
          <SectionLabel
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Experience
          </SectionLabel>
          <Heading
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            My Journey
          </Heading>
        </Header>

        <TimelineWrapper>
          <TimelineLine
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
            style={{ height: '100%' }}
          />

          {personalData.experience.map((item, i) => (
            <TimelineItem
              key={item.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              onMouseEnter={() => setActiveId(item.id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <TimelineDot $active={activeId === item.id} />
              <Card $active={activeId === item.id}>
                <Period>{item.period}</Period>
                <Role>{item.role}</Role>
                <Company>
                  {item.team && <span>{item.team} - </span>}
                  {item.company}
                </Company>
                <Highlights>
                  {item.highlights.map((h, idx) => (
                    <HighlightItem key={idx}>{h}</HighlightItem>
                  ))}
                </Highlights>
                <Tags>
                  {item.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </Tags>
              </Card>
            </TimelineItem>
          ))}
        </TimelineWrapper>
      </Inner>
    </Section>
  );
};

export default Timeline;
