import { Flex, Text } from "@once-ui-system/core";
import { TECHNOLOGIES } from "../../../lib/technologies";

interface Props {
  items: string[];
}

export const TechStack: React.FC<Props> = ({ items }) => {

    console.log("techhs",items)
  return (
    <Flex gap="12" wrap>
      {items.map((key) => {
        const tech = TECHNOLOGIES[key as keyof typeof TECHNOLOGIES];
        if (!tech) return null;

        return (
          <Flex
            key={key}
            align="center"
            gap="8"
            style={{
              padding: "6px 10px",
              marginBlock:"10px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.05)",
              border: `1px solid ${tech.color}30`,
            }}
          >
            <img
              src={tech.logo}
              alt={tech.name}
              width={16}
              height={16}
            />
            <Text
              variant="body-default-xs"
              style={{ color: tech.color }}
            >
              {tech.name}
            </Text>
          </Flex>
        );
      })}
    </Flex>
  );
};