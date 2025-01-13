import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Saran Zafar",
  initials: "SZ",
  url: "https://saranzafar.github.io",
  location: "Kashmir Pakistan",
  locationLink: "https://www.google.com/maps/place/pakistan",
  description:
    "Software Engineering student with a passion for creating impactful and functional web & desktop applications. Always learning, always growing.",
  summary:
    "Hi, I’m Saran! I’m a Software Engineering student (2021-2025) who loves building creative solutions to real-world problems. I’m passionate about web development and enjoy working on projects that challenge me to learn and improve. My GitHub is a great place to explore what I’ve been working on—feel free to check it out! Outside of coding, I’m always exploring new technologies and staying curious about the tech world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/131322772?v=4", // Replace with your image URL

  skills: [
    "JavaScript",
    "HTML",
    "CSS",
    "React.js",
    "Vue.js",
    "Node.js",
    "MongoDB",
    "Electron.js",
    "Next.js",
    "TypeScript",
    "WordPress",
    "Shopify",
    "Firebase",
    "GitHub",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "saran.development@gmail.com",
    tel: "+923119777995",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/saranzafar",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/saran-zafar-7b9a581a8/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "saran.development@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "LogicExer",
      href: "https://logicexer.com", // Replace with the actual company website, if available
      badges: ["Full Stack", "Desktop App"],
      location: "Remote", // Or specify a physical location if applicable
      title: "Full Stack Web Developer",
      logoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQGA8NU1xPfglw/company-logo_200_200/company-logo_200_200/0/1708936816981/logicexer_logo?e=2147483647&v=beta&t=dtU7StgwyRdR20JnTU9ZT0T5gYwCx_755bO8AAPIW0s", // Replace with the actual logo URL, if available
      start: "August 2024",
      end: "Present",
      description:
        "Currently working as a Full Stack Web Developer, building and maintaining scalable web applications using modern frameworks. Designed and implemented user interfaces with React, built robust backends with Node.js, and integrated third-party APIs to enhance functionality. Collaborated with cross-functional teams to deliver high-quality solutions.",
    },
    {
      company: "LogicExer",
      href: "https://logicexer.com", // Replace with the actual company website, if available
      badges: ["Internship", "MERN Stack"],
      location: "Remote", // Or specify a physical location if applicable
      title: "Summer Intern (Full Stack Developer)",
      logoUrl: "https://media.licdn.com/dms/image/v2/D4D0BAQGA8NU1xPfglw/company-logo_200_200/company-logo_200_200/0/1708936816981/logicexer_logo?e=2147483647&v=beta&t=dtU7StgwyRdR20JnTU9ZT0T5gYwCx_755bO8AAPIW0s",
      start: "June 2024",
      end: "August 2024",
      description:
        "Contributed to the development of web applications by designing user interfaces and implementing RESTful APIs. Assisted in debugging and optimizing codebase for better performance and scalability.",
    },
  ],
  education: [
    {
      school: "University of Kotli AJK",
      href: "https://www.uokajk.edu.pk/",
      degree: "Bachelor of Science in Software Engineering",
      logoUrl: "https://www.hec.gov.pk/english/universities/PublishingImages/University%20of%20Kotli.png",
      start: "December 2021",
      end: "December 2025",
    }
  ],
  projects: [
    {
      title: "Backend-Boy",
      dates: "August 2023 - Present",
      description:
        "A video series showcasing backend development by creating a backend system for a YouTube-like platform.",
      technologies: ["Node.js", "Express", "MongoDB", "JavaScript"], // Technologies used
      image:
        "https://raw.githubusercontent.com/saranzafar/Backend-Boy/main/preview.png",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/saranzafar/Backend-Boy",
        },
      ],
    },
    {
      title: "Business Website Frontend",
      dates: "July 2023",
      description:
        "A fully responsive static business website built using Bootstrap.",
      technologies: ["HTML", "CSS", "Bootstrap"], // Technologies used
      image:
        "https://raw.githubusercontent.com/saranzafar/Business-website-frontend/main/preview.png",
      links: [
        {
          title: "Live Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://saranzafar.github.io/BusinessWebsite/",
        },
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/saranzafar/Business-website-frontend",
        },
      ],
    },
  ],


} as const;
