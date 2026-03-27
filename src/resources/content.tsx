import BrandLogo from "@/components/BrandLogo";
import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Cristian",
  lastName: "Ponce",
  name: `Cristian Ponce`,
  role: "Full Stack Developer",
  avatar: "/images/avatar.jpg",
  email: "cristianponce94@outlook.com",
  location: "America/Guayaquil", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Spanish", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/cristianponce",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/cristianponce/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building ideas into reality</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Mi Portafolio</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Proyectos Destacados
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      Soy <strong>Cris</strong>, Full Stack Developer especializado en JavaScript, TypeScript, C#, React, .NET y React Native.
      <br /> Desarrollo aplicaciones web, móviles y de escritorio que resuelven problemas reales.
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
        Software Developer with over 6 years of experience in designing and implementing technological solutions. 
        I have participated in high-impact projects in sectors such as healthcare, e-commerce, logistics, inventory management, 
        WMS and TMS systems, as well as booking and shipping platforms, including airline reservations.
        My main stack includes Node.js, TypeScript, React, React Native, Next.js, .NET and C#, focusing on the development 
        of web, mobile and cloud solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "LOGIZTIK ALLIANCE",
        timeframe: "November 2023 - Present",
        role: "Semi Senior Developer",
        achievements: [
          <>
            Development of mobile applications for external and internal clients, focused on 
            operational efficiency and user experience.
          </>,
          <>
            Development and maintenance of frontend and backend systems for logistics solutions, 
            including WMS (Warehouse Management System), TMS (Transportation Management System) and 
            booking and shipping platforms, with emphasis on airline reservation management and cargo tracking.
          </>,
        ],
        images: [],
      },
      {
        company: "ASISTAMED SAS",
        timeframe: "April 2023 – November 2023",
        role: "Systems, Development, Technology and Projects Supervisor",
        achievements: [
          <>
            Supervise software project development
          </>,
          <>
            Development of web and mobile applications
          </>,
        ],
        images: [],
      },
      {
        company: "SIS-MEDIN LTDA",
        timeframe: "April 2019 – April 2023",
        role: "Programmer",
        achievements: [
          <>
            Technology department supervisor
          </>,
          <>
            Web and mobile application developer
          </>,
          <>
            Coordinate the implementation of new projects focused on management systems 
            for healthcare companies.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Escuela Politécnica Nacional",
        description: <>Electronics and Control Engineering - January 2019</>,
      },
      {
        name: "Recent Certifications",
        description: <>
          AZ 900 Azure Fundamentals (Mar. 2025), .NET MAUI course (Sep. 2024), 
          Scrum Fundamentals (Dec. 2023), among others.
        </>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend Development",
        description: (
          <>Development of modern web applications with React.js, Next.js and TypeScript, 
          focusing on creating intuitive and responsive user interfaces.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
        ],
        images: [],
      },
      {
        title: "Backend & Mobile Development",
        description: (
          <>Development of robust APIs with .NET and Node.js, and cross-platform 
          mobile applications with React Native and .NET MAUI.</>
        ),
        tags: [
          {
            name: "C#",
            icon: "csharp",
          },
          {
            name: ".NET",
            icon: "dotnet",
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "React Native",
            icon: "react",
          },
        ],
        images: [],
      },
      {
        title: "Cloud & Database",
        description: (
          <>Experience with cloud platforms like Azure and Google Cloud, 
          working with SQL Server, MySQL and MongoDB databases.</>
        ),
        tags: [
          {
            name: "Azure",
            icon: "azure",
          },
          {
            name: "SQL Server",
            icon: "database",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "Docker",
            icon: "docker",
          },
        ],
        images: [],
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
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
