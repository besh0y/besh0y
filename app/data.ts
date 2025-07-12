type Project = {
  name: string;
  description: string;
  link: string;
  video: string;
  id: string;
};

type WorkExperience = {
  company: string;
  title: string;
  start: string;
  end: string;
  link: string;
  id: string;
};

type BlogPost = {
  title: string;
  description: string;
  link: string;
  uid: string;
};

type SocialLink = {
  label: string;
  link: string;
};

export const PROJECTS: Project[] = [
  // {
  //   name: "Motion Primitives Pro",
  //   description:
  //     "Advanced components and templates to craft beautiful websites.",
  //   link: "https://pro.motion-primitives.com/",
  //   video:
  //     "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0",
  //   id: "project1",
  // },
  // {
  //   name: "Motion Primitives",
  //   description: "UI kit to make beautiful, animated interfaces.",
  //   link: "https://motion-primitives.com/",
  //   video:
  //     "https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0",
  //   id: "project2",
  // },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "MOIA GmbH",
    title: "Senior Backend Engineer",
    start: "2023",
    end: "Present",
    link: "https://moia.io",
    id: "work1",
  },
  {
    company: "CLYR",
    title: "Senior Backend Engineer",
    start: "2022",
    end: "2025",
    link: "https://clyr.io",
    id: "work2",
  },
  {
    company: "Via",
    title: "Senior Backend Engineer",
    start: "2023",
    end: "2023",
    link: "https://www.linkedin.com/company/via-software",
    id: "work3",
  },
  {
    company: "Coformatique",
    title: "Backend Engineer",
    start: "2020",
    end: "2023",
    link: "https://coformatique.com",
    id: "work4",
  },
];

export const BLOG_POSTS: BlogPost[] = [
  // {
  //   title: "Exploring the Intersection of Design, AI, and Design Engineering",
  //   description: "How AI is changing the way we design",
  //   link: "/blog/exploring-the-intersection-of-design-ai-and-design-engineering",
  //   uid: "blog-1",
  // },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Github",
    link: "https://github.com/besh0y",
  },
  {
    label: "Twitter",
    link: "https://twitter.com/_besh0y",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/besh0y",
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com/besh0y__",
  },
];

export const TECH_STACK: string[] = [
  "Typescript",
  "Go",
  "Python",
  "Nodejs",
  "Expressjs",
  "NestJS",
  "GraphQL",
  "PostgreSQL",
  "DynamoDB",
  "MongoDB",
  "Redis",
  "Stripe",
  "OAuth",
  "Docker",
  "AWS",
  "IaC",
  "CI/CD",
  "Microservices",
  "RESTful APIs",
  "Serverless",
  "Event-Driven Architecture",
];

export const EMAIL = "contact@besh0y.com";
