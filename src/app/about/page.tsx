import {
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, services, agency, social } from "@/resources";
import TableOfContents from "@/components/services/TableOfContents";
import styles from "@/components/services/services.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: services.title,
    description: services.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(services.title)}`,
    path: services.path,
  });
}

export default function Services() {
  const structure = [
    {
      title: services.intro.title,
      display: services.intro.display,
      items: [],
    },
    {
      title: services.core.title,
      display: services.core.display,
      items: services.core.items.map((item) => item.name),
    },
    {
      title: services.tech.title,
      display: services.tech.display,
      items: services.tech.solutions.map((tech) => tech.title),
    },
    {
      title: services.process.title,
      display: services.process.display,
      items: services.process.steps.map((step) => step.title),
    },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={services.title}
        description={services.description}
        path={services.path}
        image={`/api/og/generate?title=${encodeURIComponent(services.title)}`}
        author={{
          name: agency.name,
          url: `${baseURL}${services.path}`,
          image: `${baseURL}${agency.logo}`,
        }}
      />

      {/* Table of Contents Navigation */}
      {services.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} services={services} />
        </Column>
      )}

      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        {/* Sticky Sidebar Action Card */}
        {services.sidebar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            top="64"
            s={{ position: "relative" }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
<Media
  src={agency.logo}
  alt={agency.name}
  radius="full"
  style={{ 
    width: "140px", 
    height: "140px", 
    maxWidth: "140px",
    maxHeight: "140px",
    objectFit: "cover" 
  }}
/>

             {/* <Heading variant="heading-strong-s" align="center">
              Dental Tech & Growth
            </Heading>  */}
            {/* <Text
              variant="body-default-s"
              onBackground="neutral-weak"
              align="center"
            >
              Helping dental practices scale patient bookings through high-performing tech.
            </Text> */}
 
            <Button
              href={services.calendar.link}
              prefixIcon="calendar"
              label="Book Audit Call"
              size="m"
              variant="primary"
              // fillWidth
            /> 

        
          </Column>
        )}

        {/* Main Content Area */}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          {/* Hero Section */}
          <Column
            id={services.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {services.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="sparkles" onBackground="brand-weak" />
                
                {/* 🛠️ Flex Fix: Text and Icon now share this Row parent */}
                <Row>
                  <Row paddingX="8">
                    Free Dental Practice Tech & SEO Audit
                  </Row>
                  <IconButton
                    href={services.calendar.link}
                    data-border="rounded"
                    variant="secondary"
                    icon="chevronRight"
                  />
                </Row>
              </Row>
            )}

            {/* 🛠️ Typography Size Fix: headline-strong-xl */}
            <Heading className={styles.textAlign}>
              Digital Solutions Built Specifically for Dental Clinics
            </Heading>

            {/* 🛠️ Typography Size Fix: body-default-l */}
            <Text
              className={styles.textAlign}
              variant="body-default-l"
              onBackground="neutral-weak"
              paddingTop="s"
            >
              High-converting custom web development, local SEO domination, patient booking integrations, and HIPAA-compliant tech infrastructure.
            </Text>
          </Column>

          {/* Intro Overview Text */}
          {services.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {services.intro.description}
            </Column>
          )}

          {/* Core Growth Services (Website Tiers including Express & Custom) */}
          {services.core.display && (
            <>
              <Heading as="h2" id={services.core.title} variant="display-strong-s" marginBottom="m">
                {services.core.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {services.core.items.map((service, index) => (
                  <Column key={`${service.name}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={service.name} variant="heading-strong-l">
                        {service.name}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="brand-weak">
                        {service.deliverableTime}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
                      {service.tagline}
                    </Text>
                    <Column as="ul" gap="16">
                      {service.features.map((feature: React.ReactNode, fIndex: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${service.name}-${fIndex}`}
                        >
                          {feature}
                        </Text>
                      ))}
                    </Column>
                    {service.deliverables && service.deliverables.length > 0 && (
                      <Row wrap gap="8" paddingTop="m">
                        {service.deliverables.map((item, dIndex) => (
                          <Tag key={dIndex} size="m" variant="neutral">
                            {item}
                          </Tag>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* Dental Tech Integration & Technical Infrastructure */}
          {services.tech.display && (
            <>
              <Heading
                as="h2"
                id={services.tech.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {services.tech.title}
              </Heading>
              <Column fillWidth gap="l">
                {services.tech.solutions.map((solution, index) => (
                  <Column key={`${solution.title}-${index}`} fillWidth gap="4">
                    <Text id={solution.title} variant="heading-strong-l">
                      {solution.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {solution.description}
                    </Text>
                    {solution.tags && solution.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {solution.tags.map((tag, tagIndex) => (
                          <Tag key={`${solution.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {/* How We Work / Process Section */}
          {services.process.display && (
            <>
              <Heading
                as="h2"
                id={services.process.title}
                variant="display-strong-s"
                marginTop="xl"
                marginBottom="m"
              >
                {services.process.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {services.process.steps.map((step, index) => (
                  <Column key={`${step.title}-${index}`} fillWidth gap="4">
                    <Text id={step.title} variant="heading-strong-l">
                      0{index + 1}. {step.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {step.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}