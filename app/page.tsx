'use client';

import { useState } from 'react';
import {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
  TopNav,
  TopNavHeading,
  VStack,
  HStack,
  Grid,
  Card,
  Section,
  Heading,
  Text,
  Button,
  Token,
  TabList,
  Tab,
  Blockquote,
  Divider,
} from '@astryxdesign/core';

type CategoryKey = 'all' | 'ai' | 'design' | 'web';

interface Project {
  id: string;
  category: 'ai' | 'design' | 'web';
  categoryLabel: string;
  categoryColor: 'green' | 'teal' | 'blue' | 'purple';
  title: string;
  description: string;
  timeline: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 'ai-1',
    category: 'ai',
    categoryLabel: 'AI Automation',
    categoryColor: 'green',
    title: 'Autonomous Multi-Agent Triage Pipeline',
    description:
      'Engineered an event-driven AI workflow using LangGraph and vector rerankers that ingests incoming enterprise customer queries, extracts intent, and routes high-priority tickets to engineers while autonomously drafting verified resolutions.',
    timeline: 'Q3 2026',
    tags: ['LangGraph', 'OpenAI', 'Python', 'Redis Queue'],
  },
  {
    id: 'ai-2',
    category: 'ai',
    categoryLabel: 'AI Automation',
    categoryColor: 'green',
    title: 'Document Intelligence & Extraction Pipeline',
    description:
      'Automated extraction of dense contractual agreements, financial ledgers, and compliance forms into structured databases with confidence scoring and human-in-the-loop review queues.',
    timeline: 'Q2 2026',
    tags: ['OCR / Vision LLMs', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'design-1',
    category: 'design',
    categoryLabel: 'Product Design',
    categoryColor: 'teal',
    title: 'Pulse Analytics Design System',
    description:
      'Designed an enterprise-grade component system with over 80 Figma components, token hierarchies for light/dark modes, accessible data visualization palettes, and rigorous interactive states.',
    timeline: 'Q1 2026',
    tags: ['Figma', 'Design Tokens', 'Design Systems', 'WCAG AAA'],
  },
  {
    id: 'design-2',
    category: 'design',
    categoryLabel: 'Product Design',
    categoryColor: 'teal',
    title: 'Fintech Dashboard & Portfolio Interface',
    description:
      'Reimagined the end-to-end investment management experience for retail investors, creating clean data tables, simplified transaction flows, and modular balance composition charts.',
    timeline: 'Q4 2025',
    tags: ['User Research', 'Information Architecture', 'Prototyping'],
  },
  {
    id: 'web-1',
    category: 'web',
    categoryLabel: 'Web Development',
    categoryColor: 'blue',
    title: 'High-Performance Cloud Resource Console',
    description:
      'Built a real-time cluster monitoring and resource allocation console using Next.js, WebSockets, and StyleX with sub-second data refreshes and zero layout shifts.',
    timeline: 'Q3 2026',
    tags: ['Next.js 16', 'TypeScript', 'WebSockets', 'Tailwind'],
  },
  {
    id: 'web-2',
    category: 'web',
    categoryLabel: 'Web Development',
    categoryColor: 'blue',
    title: 'Headless E-Commerce & Asset Delivery Platform',
    description:
      'Architected a globally distributed digital marketplace with dynamic edge caching, sub-50ms TTFB, localized currencies, and instant search indexing.',
    timeline: 'Q2 2026',
    tags: ['React 19', 'Edge Runtime', 'GraphQL', 'Stripe'],
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <Layout height="auto">
      <LayoutHeader hasDivider padding={4}>
        <TopNav
          heading={
            <TopNavHeading
              heading="Alex Vance"
              subheading="AI Automator • Product Designer • Web Developer"
              headingHref="/"
            />
          }
          centerContent={
            <HStack gap={3}>
              <Button label="About" variant="ghost" size="sm" href="#about" />
              <Button label="Projects" variant="ghost" size="sm" href="#projects" />
              <Button label="Reviews" variant="ghost" size="sm" href="#reviews" />
              <Button label="Contact" variant="ghost" size="sm" href="#contact" />
            </HStack>
          }
          endContent={
            <Button label="Get In Touch" variant="primary" size="sm" href="#contact" />
          }
        />
      </LayoutHeader>

      <LayoutContent padding={0}>
        <Section id="about" padding={8} variant="transparent">
          <VStack gap={6}>
            <HStack gap={2}>
              <Token label="Available for Select Engagements" color="green" size="sm" />
              <Token label="AI + Design + Code" color="teal" size="sm" />
            </HStack>

            <Heading level={1} type="display-1">
              Building intelligent automations, refined products, and robust web applications.
            </Heading>

            <Text type="large" color="secondary">
              I combine autonomous AI workflow engineering, user-centered product design, and
              modern frontend architecture to turn complex technical challenges into frictionless,
              reliable software.
            </Text>

            <HStack gap={3}>
              <Button label="Explore Projects" variant="primary" size="lg" href="#projects" />
              <Button label="Schedule Discovery Call" variant="secondary" size="lg" href="#contact" />
            </HStack>

            <Divider />

            <Grid columns={3} gap={4}>
              <Card padding={5}>
                <VStack gap={1}>
                  <Heading level={3} color="primary">
                    45+
                  </Heading>
                  <Text weight="semibold">Automations & Pipelines</Text>
                  <Text type="supporting">
                    Production LLM agents, asynchronous ingestion jobs, and enterprise bots.
                  </Text>
                </VStack>
              </Card>

              <Card padding={5}>
                <VStack gap={1}>
                  <Heading level={3} color="primary">
                    12+
                  </Heading>
                  <Text weight="semibold">Design Systems</Text>
                  <Text type="supporting">
                    Scalable token architectures, accessible components, and pattern libraries.
                  </Text>
                </VStack>
              </Card>

              <Card padding={5}>
                <VStack gap={1}>
                  <Heading level={3} color="primary">
                    99.9%
                  </Heading>
                  <Text weight="semibold">Platform Reliability</Text>
                  <Text type="supporting">
                    Tested web applications deployed with optimal core web vitals and uptime.
                  </Text>
                </VStack>
              </Card>
            </Grid>
          </VStack>
        </Section>

        <Section id="projects" padding={8} variant="muted">
          <VStack gap={6}>
            <VStack gap={2}>
              <Heading level={2} type="display-3">
                Selected Work
              </Heading>
              <Text type="large" color="secondary">
                Explore specialized projects spanning autonomous workflows, product design, and
                full-stack web engineering.
              </Text>
            </VStack>

            <TabList
              value={selectedCategory}
              onChange={setSelectedCategory}
              role="tablist"
              hasDivider
              size="lg"
            >
              <Tab value="all" label="All Disciplines" panelId="panel-projects" />
              <Tab value="ai" label="AI Automation" panelId="panel-projects" />
              <Tab value="design" label="Product Design" panelId="panel-projects" />
              <Tab value="web" label="Web Development" panelId="panel-projects" />
            </TabList>

            <Grid id="panel-projects" columns={2} gap={6}>
              {filteredProjects.map((project) => (
                <Card key={project.id} padding={6}>
                  <VStack gap={4}>
                    <HStack gap={2}>
                      <Token
                        label={project.categoryLabel}
                        color={project.categoryColor}
                        size="sm"
                      />
                      <Token label={project.timeline} color="gray" size="sm" />
                    </HStack>

                    <Heading level={3}>{project.title}</Heading>

                    <Text type="body" color="secondary">
                      {project.description}
                    </Text>

                    <HStack gap={2}>
                      {project.tags.map((tag) => (
                        <Token key={tag} label={tag} size="sm" color="default" />
                      ))}
                    </HStack>

                    <HStack gap={2}>
                      <Button label="View Case Study" variant="secondary" size="sm" />
                      <Button label="Architecture Details" variant="ghost" size="sm" />
                    </HStack>
                  </VStack>
                </Card>
              ))}
            </Grid>
          </VStack>
        </Section>

        <Section id="reviews" padding={8} variant="transparent">
          <VStack gap={6}>
            <VStack gap={2}>
              <Heading level={2} type="display-3">
                Client Reviews & Endorsements
              </Heading>
              <Text type="large" color="secondary">
                Direct feedback from founders, product directors, and engineering leads.
              </Text>
            </VStack>

            <Grid columns={3} gap={4}>
              <Card padding={5}>
                <Blockquote cite="Sarah Chen — VP of Engineering, Synthetix AI">
                  Alex built an autonomous ticket routing and classification pipeline that reduced
                  our response latency from 4 hours to under 2 minutes. The code quality and
                  monitoring setup are stellar.
                </Blockquote>
              </Card>

              <Card padding={5}>
                <Blockquote cite="Marcus Brody — Founder & CEO, Kova Health">
                  Rarely do you find an automator who genuinely understands high-craft product
                  design. Alex restructured our complex health intake system into an effortless,
                  accessible user journey.
                </Blockquote>
              </Card>

              <Card padding={5}>
                <Blockquote cite="Elena Rostova — Head of Product, Horizon Cloud">
                  Alex delivered our design system token bridge and Next.js portal ahead of schedule.
                  Clean component architecture, zero layout bugs, and exceptional technical leadership.
                </Blockquote>
              </Card>
            </Grid>
          </VStack>
        </Section>

        <Section id="contact" padding={8} variant="muted">
          <Card padding={8}>
            <VStack gap={5}>
              <HStack gap={2}>
                <Token label="Ready to Collaborate" color="green" size="md" />
              </HStack>

              <Heading level={2} type="display-2">
                Let’s build something extraordinary together.
              </Heading>

              <Text type="large" color="secondary">
                Whether you need to automate multi-step operations with agentic AI, define a scalable
                design system, or ship a modern web application, I’m ready to help you execute.
              </Text>

              <HStack gap={3}>
                <Button
                  label="Schedule a 30-min Strategy Call"
                  variant="primary"
                  size="lg"
                  href="mailto:alex@example.com"
                />
                <Button
                  label="Download Resume / CV"
                  variant="secondary"
                  size="lg"
                  href="#contact"
                />
              </HStack>
            </VStack>
          </Card>
        </Section>
      </LayoutContent>

      <LayoutFooter hasDivider padding={6}>
        <HStack gap={4}>
          <VStack gap={1}>
            <Text weight="semibold">Alex Vance</Text>
            <Text type="supporting">
              AI Automator • Product Designer • Web Developer. Styled with Matcha Theme.
            </Text>
            <Text type="supporting">
              © 2026 Alex Vance. All rights reserved.
            </Text>
          </VStack>

          <HStack gap={2}>
            <Button
              label="GitHub"
              variant="ghost"
              size="sm"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            />
            <Button
              label="LinkedIn"
              variant="ghost"
              size="sm"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            />
            <Button
              label="X / Twitter"
              variant="ghost"
              size="sm"
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
            />
          </HStack>
        </HStack>
      </LayoutFooter>
    </Layout>
  );
}
