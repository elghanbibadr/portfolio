"use client";

import React from "react";
import { Column, Text } from "@once-ui-system/core";

interface StructureItem {
  title: string;
  display: boolean;
  items: string[];
}

interface TableOfContentsProps {
  structure: StructureItem[];
  services: any;
}

export default function TableOfContents({ structure }: TableOfContentsProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Column
      gap="12"
      style={{ borderLeft: "1px solid var(--neutral-border-weak)" }}
      paddingLeft="16"
    >
      <Text variant="heading-strong-xs" onBackground="neutral-weak">
        SERVICES MENU
      </Text>
      {structure.map(
        (section) =>
          section.display && (
            <Column key={section.title} gap="4">
              <Text
                variant="body-default-s"
                style={{ cursor: "pointer" }}
                onClick={() => scrollToSection(section.title)}
              >
                {section.title}
              </Text>
            </Column>
          )
      )}
    </Column>
  );
}