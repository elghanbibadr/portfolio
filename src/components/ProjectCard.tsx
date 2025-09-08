"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  Media,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
  <Column fillWidth gap="m">
  <Flex
    s={{ direction: "column" }} // On small screens, keep them stacked
    m={{ direction: "row" }}    // On medium screens and up, place them side-by-side
    fillWidth
    paddingX="s"
    paddingTop="12"
    paddingBottom="24"
    gap="l"
  >
    {/* Image Section - will take 50% width on medium screens and up */}
    <Column flex={6}> {/* Use a Column to wrap the Media, and give it flex */}
      <Media
        // enlarge
        radius="m"
        alt={"hel"}
        src={images[0]}
        // If Media component has a 'fill' prop for its container, use it.
        // Otherwise, ensure the image itself fills its parent.
        // You might need to add responsive styles here if the image itself isn't expanding.
      />
    </Column>


    {/* Content Section - will take 50% width on medium screens and up */}
    {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
      <Column flex={6} gap="16"> {/* Give this Column flex as well */}
        {title && (
          <Flex> {/* Changed flex={5} to just Flex unless you have a specific ratio in mind for title within its own parent */}
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {description?.trim() && (
          <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
            {description}
          </Text>
        )}
        <Flex gap="24" wrap>

          {link && (
            <SmartLink
              suffixIcon="arrowUpRightFromSquare"
              style={{ margin: "0", width: "fit-content" }}
              href={link}
            >
              <Text variant="body-default-s">View project</Text>
            </SmartLink>
          )}
        </Flex>
      </Column>
    )}
  </Flex>
</Column>
  );
};
