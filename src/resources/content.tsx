import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Badr",
  lastName: "Ghanbi",
  name: `Badr Ghanbi`,
  role: "Front End Engineer",
  avatar: "/images/avatar.jpg",
  email: "bghanbi50@gmail.com",
  location: "Europe/Vienna", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Aranic","French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning ideas into seamless web experiences</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">My Upwork</strong>{" "}
        <Line background="accent-alpha-medium" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Showcase
        </Text>
      </Row>
    ),
    href: "https://www.upwork.com/freelancers/~015c5fa1a95af5c54d",
  },
  subline: (
    <>
    I’m Badr, a front-end engineer crafting intuitive, user-focused web apps,
      {/* <Logo
        dark
        icon="/trademarks/wordmark-dark.svg"
        style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}
      /> */}
    
      <br />  In my spare time, I bring my own ideas to life through side projects.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
  I love building scalable web applications and SaaS solutions. I specialize in modern technologies such as React, Next.js, and Tailwind CSS, and I’m passionate about transforming complex requirements into clean, user-focused digital experiences
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Upwork",
        timeframe: "2022 - Present",
        role: "Top Rated Front-End Developer",
        achievements: [
          <>
      Built modern, responsive web applications with Next.js, React, and Tailwind CSS,Typescript ,Supabase delivering high-performing solutions for global clients.
          </>,
          <>
        Streamlined development workflows and optimized UI/UX, ensuring both scalability and exceptional user experience.
          </>,
          <>
          Achieved Top Rated status on Upwork by consistently exceeding client expectations, with projects spanning SaaS platforms, dashboards, and e-commerce.
          </>,
          <>
Completed 50+ projects with over 500 hours of development, building modern, responsive web applications using Next.js, React, Tailwind CSS, TypeScript, and Supabase, delivering high-performing solutions for clients worldwide.          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
       
        ],
      },
       {
        company: "Green Phoenix Engineering",
        timeframe: "2024 - Present",
        role: "Front-End Developer",
        achievements: [
          <>
Contributing to  a powerful CRM platform for real estate professionals designed to automate and streamline wholesale workflows. Key features include:          </>,
          <>
connect With Buyers Faster: Automate property distribution by buyer tags, analyze deals, estimate repairs and Max Allowable Offers (MAO), all in one unified platform.          </>,
          <>
AI Estimator: Quickly calculate job estimates based on property dimensions, materials, and brief descriptions.          </>,
        
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
       
        ],
      },
      {
        company: "Tajriba",
        timeframe: "2023 - 2024",
        role: "Front-End developer",
        achievements: [
          <>
           Collaborating with a dynamic team to develop Ajyal Academy, a comprehensive school management system, using Next.js, TypeScript, and Strapi.
          </>,
          <>
        Developing robust admin tools for monitoring registrations, generating invoices, analyzing subscription data, and managing activities across multiple locations.
          </>,
          <>
          Streamlining school operations and enhancing user experience for all stakeholders, including parents, administrators, and staff.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "ENSA",
        description: <>Studied software engineering.</>,
      },

    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
 skills: [
  {
    title: "Next.js",
    description: (
      <>Building next-gen web applications with Next.js and Supabase.</>
    ),
    tags: [
      {
        name: "TypeScript",
        icon: "typescript",
      },
      {
        name: "Next.js",
        icon: "nextjs",
      },
      {
        name: "Supabase",
        icon: "supabase",
      },
    ],

  },
  {
    title: "React & Tailwind CSS",
    description: (
      <>Creating responsive, high-performance UI with React and Tailwind CSS.</>
    ),
    tags: [
      {
        name: "React",
        icon: "react",
      },
      {
        name: "Tailwind CSS",
        icon: "tailwind",
      },
   
    ],
    images: [
      {
        src: "/images/projects/project-01/cover-03.jpg",
        alt: "Project image",
        width: 16,
        height: 9,
      },
    ],
  },
  {
  title: "Laravel & PHP",
  description: (
    <>Learning and building simple back-end applications using Laravel and PHP, working with databases, APIs, and server-side logic.</>
  ),
  tags: [
    {
      name: "Laravel",
      icon: "laravel",
    },
    {
      name: "PHP",
      icon: "php",
    },
    {
      name: "MySQL",
      icon: "mysql",
    },
  ],
 
},
{
  title: "Databases (SQL & MongoDB)",
  description: (
    <>Learning to work with databases, including designing schemas, querying data, and integrating SQL and MongoDB into applications.</>
  ),
  tags: [
    {
      name: "SQL",
      icon: "sql",
    },
    {
      name: "MongoDB",
      icon: "mongodb",
    },
  ],
  images: [
 
  ],
},

],

  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    // {
    //   src: "/images/gallery/horizontal-1.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/vertical-4.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/horizontal-3.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/vertical-1.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/vertical-2.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
    // {
    //   src: "/images/gallery/horizontal-2.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/horizontal-4.jpg",
    //   alt: "image",
    //   orientation: "horizontal",
    // },
    // {
    //   src: "/images/gallery/vertical-3.jpg",
    //   alt: "image",
    //   orientation: "vertical",
    // },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
