import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;
 const displayedProjects2 = [
  {
    slug: "Pursit Portal",
    metadata: {
      title: "Pursit Portal",
      summary: "Pursit Portal is a user-friendly platform designed to assist Pursit startup users in managing their subscriptions. With this portal, users can easily change their plans, reset their passwords or email addresses, and upgrade or downgrade their plans.",
      images: ["/images/projects/project-01/p1.GIF", "/images/projects/car-dealer-2.webp"],
      team: [
        { avatar: "/images/projects/project-01/p1.GIF" },
      ],
      link: "https://purist-olive.vercel.app/",
    },
    content: "I developed a platform for auto dealerships using Next.js, Supabase, and Tailwind. Admins can manage dealers, upload invoices, and define buying rules. Dealers can track cars purchased and download invoices.",
  },
  {
    slug: "Dispo Depot",
    metadata: {
      title: "Dispo Depot",
      summary: " powerful CRM built for real estate professionals. Analyze deals, estimate repairs and max allowable offers (MAO), and send properties to the right buyer tags — all in one streamlined platform.",
      images: ["/images/projects/project-01/p7.GIF", "/images/projects/trip-2.webp"],
      team: [
        { avatar: "/images/avatars/badr.png" },
      ],
      link: "https://dispo-depot.vercel.app/",
    },
    content: "Built with Next.js, Supabase, and Google Maps API, this app allows users to create trips, calculate stay durations, and manage locations seamlessly.",
  },
  {
    slug: "Playroom platform",
    metadata: {
      title: "Playroom platform",
      summary: "Playroom is a platform provides scalable multiplayer backend and cross-platform integrations for web-based games. Build effortlessly with zero server setup. and I was the only developper that have created all the front end with React js and tailwind css for the platform",
      images: ["/images/projects/project-01/p10.GIF", "/images/projects/leads-2.webp"],
      team: [
        { avatar: "/images/avatars/badr.png" },
      ],
      link: "https://playroom-www-v2.pages.dev/",
    },
    content: "I built a leads database SaaS with Supabase, Next.js, and Stripe integration for payments. Admins can upload leads and manage users, while customers can search, filter, and export data using credits.",
  },
  {
    slug: "LaGriffe.io",
    metadata: {
      title: "LaGriffe.io",
      summary: "LaGriffe.io is a hybrid agency that combines conversational AI (LLM) with premium creative talent. The platform evaluates each brief, assembles the ideal team, and delivers solutions through flexible subscriptions, turnkey packages, or one-shot assets. Built with a Strapi backend and integrated chatbot,",
      images: ["/images/projects/project-01/h45.GIF"],
      team: [
        { avatar: "/images/avatars/badr.png" },
      ],
      link: "https://git00027-1.onrender.com/",
    },
    content: "Designed and developed my personal portfolio using Next.js, Tailwind, and Framer Motion animations for smooth transitions.",
  },
];

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects2.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
