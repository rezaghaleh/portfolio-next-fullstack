import type {
  EducationItem,
  ExperienceItem,
  NavItem,
  Project,
  SocialLink
} from "@/types";

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Dev Quiz", href: "#dev-quiz" },
  { label: "Contact", href: "#contact" }
];

export const socials: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/rezaghaleh",
    icon: "/assets/github-logo.png"
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/reza-ghaleh",
    icon: "/assets/linkedin-logo.png"
  },
  {
    name: "X",
    href: "https://x.com/realrezaghaleh",
    icon: "/assets/x-logo.png"
  }
];

export const about = {
  title: "About Me",
  content:
    "Passionate software developer with expertise in building scalable, user-focused web and mobile applications. Skilled in full-stack development, database management, and delivering impactful solutions. I thrive in collaborative environments and am eager to solve complex problems with clean, efficient code."
};

export const skills = [
  {
    category: "Languages",
    items: [
      "Java",
      "JavaScript",
      "SQL",
      "HTML",
      "CSS"
    ]
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Responsive Web Design"
    ]
  },
  {
    category: "Backend",
    items: [
      "Spring Boot",
      "Node.js",
      "REST APIs",
      "SOAP",
      "XML",
      "JDBC"
    ]
  },
  {
    category: "Software Concepts",
    items: [
      "Object-Oriented Programming (OOP)",
      "Design Patterns",
      "MVC Architecture",
      "DAO Pattern",
      "Multithreading"
    ]
  },
  {
    category: "Databases",
    items: [
      "PostgreSQL",
      "MySQL",
      "MS SQL Server"
    ]
  },
  {
    category: "Tools",
    items: [
      "Maven",
      "Git",
      "Eclipse",
      "AWS",
      "JUnit",
      "GitHub",
      "Docker",
      "VS Code"
    ]
  }
];
export const projects: Project[] = [
  {
    name: "BillBox App",
    description:
      "A user-friendly iOS app that simplifies expense tracking by allowing users to effortlessly file receipts throughout the year, streamlining tax preparation.",
    tech: ["React", "Node.js", "Python", "Swift", "SwiftUI"],
    githubUrl: "https://github.com/rezaghaleh/billbox_app/tree/main/BillBox"
  },
  {
    name: "E-Commerce Site",
    description:
      "I designed and developed a portfolio website, reza-ghaleh.com, using HTML, CSS, and JavaScript to create a sleek, responsive platform that highlights my projects and skills. The site features intuitive navigation and dynamic visuals, showcasing my expertise in web development and design.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://reza-ghaleh.com",
    liveUrl: "https://reza-ghaleh.com"
  },
  {
    name: "PropertySync",
    description:
      "I created a Java-based property management system with an interactive console interface, leveraging inheritance and file reading to manage residential, commercial, and retail properties efficiently. Using a HashMap, it supports queries for property features like bedrooms or parking, sourced from text files.",
    tech: ["Java"],
    githubUrl:
      "https://github.com/rezaghaleh/PropertySync/tree/main/PropertySync/PropertySync"
  }
];

export const experience: ExperienceItem[] = [
  {
    role: "Independent Software Developer",
    company: "Self-Employed",
    duration: "May 2024 – Present",
    details: [
      "Developed AI-driven tools and APIs, including resume builders and data visualization apps.",
      "Enhanced user productivity through scalable, user-focused solutions."
    ]
  },
  {
    role: "Insurance/Living Benefits Agent",
    company: "Self-Employed",
    duration: "Apr 2024 – Jan 2025",
    details: [
      "Assessed client needs and tailored insurance solutions.",
      "Improved customer satisfaction and retention through personalized support."
    ]
  },
  {
    role: "Solutions Specialist",
    company: "Rogers",
    duration: "May 2022 – Jun 2024",
    details: [
      "Drove sales by providing product expertise and technical support.",
      "Achieved top performance metrics through excellent customer service."
    ]
  }
];

export const education: EducationItem[] = [
  {
    institution: "BCIT – Software Development",
    duration: "2023–Present",
    details: [
      "Program focused on full-stack development, mobile apps, and database systems.",
      "Key projects: Task Manager (Python, SQL, Java), E-Commerce Site (JavaScript, HTML5/CSS)."
    ]
  },
  {
    institution: "Windsor Secondary School",
    duration: "2018–2020",
    details: ["High School Diploma - North Vancouver, BC."]
  }
];
