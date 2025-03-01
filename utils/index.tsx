// IMPORTS
import { cara, flikart, flytravel, portfolio, proservice, recho, colorfol, cia, eCommerce, realEstate } from "@/public/assets/projects";

// NAVIGATION LINKS
export const navLinks  = [
    { name: "About", href: "/about" },
    { name: "Experience", href: "/experience" },
    { name: "Project", href: "/project" },
    // { name: "Pricing", href: "#" },
    { name: "Contact", href: "/contact" },
    // { name: "Terms", href: "#" },
];

// SERVICES
export const services = [
    { title: "Web Developer" },
    { title: "Mobile Developer" },
    { title: "Desktop Developer" },
    { title: "Software Engineer" },
];

// EXPERIENCES
export const experiences = [
    {
        id: 1,
        title: "Python Developer",
        company_name: "Personal, For individuals, Powerk-soft, Pro service",
        date: "Since - Sept 2021",
        points: [
            "Developing and maintaining desktop (Tkinter) and backend web applications (FastAPI).",
            "Collaborating with cross-functional teams including designers and other developers to create high-quality products.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        id: 2,
        title: "Android Developer",
        company_name: "Personal, For an individual",
        date: "Since - July 2022",
        points: ["Developing Android applications using Kotlin and related technologies."],
    },
    {
        id: 3,
        title: "JavaScript Developer",
        company_name: "CIA Formation, Powerk-soft, Pro service, Flikart +, For individuals",
        date: "Since - Oct 2022",
        points: [
            "Developing and maintaining web applications using React.js/Next.js and other related technologies.",
            "Developing mobile cross-platform applications using React Native.",
            "Developing and maintaining desktop applications using Electron.js.",
            "Developing backend services and REST APIs using Node.js.",
            "Collaborating with cross-functional teams to create high-quality products.",
            "Worked on a project presented at the 2022 GitHub Hackathon.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback.",
        ],
    },
    {
        id: 4,
        title: "Software Engineer",
        company_name: "Personal, Powerk-soft, Pro service, Leratel",
        date: "Since - Sept 2021",
        points: [
            "Managing the software development life cycle in an Agile way using Trello and GitHub.",
            "Collaborating with cross-functional teams including designers and product managers.",
            "Producing high-quality documentation using Microsoft Office and UML modeling software.",
        ],
    },
];

// PROJECTS
export const projects = [
    {
        id: 1,
        name: "My Portfolio",
        description: "This is my portfolio website. I used ReactJS, TailwindCSS, Material UI, ThreeJS, and other npm libraries for the UI. I utilized EmailJS for handling mail messages. I deployed the site on CPanel with GitHub Actions managing the CI/CD pipeline.",
        tools: ["React", "Tailwind CSS", "Material UI", "i18next", "Sass", "EmailJS", "CPanel", "Git", "GitHub", "GitHub Actions"],
        role: "React Developer",
        code: "https://github.com/EssiJunior/my-portfolio.git",
        demo: "https://essijunior.com",
        image: portfolio,
    },
    {
        id: 2,
        name: "Flikart +",
        description: "I built the website of a company that promotes African culture. I used ReactJS, TailwindCSS, Material UI, ThreeJS, and other npm libraries for the UI. I utilized NodeJS, ExpressJS, Nodemailer, Swagger UI, and Mongoose for developing and documenting REST APIs. The database used was MongoDB.",
        tools: ["React", "Tailwind CSS", "Material UI", "Three.js", "Node.js", "ExpressJS", "Swagger UI", "MongoDB", "CPanel", "Git", "GitHub"],
        role: "Fullstack Developer",
        demo: "https://flikart.org",
        image: flikart,
    },
    {
        id: 3,
        name: "Colorfol Artists",
        description: "I maintained and built new interfaces for the Colorfol Artists web app using ReactJS, TailwindCSS, Material UI, and other npm libraries.",
        tools: ["React", "Tailwind CSS", "Material UI", "Git", "GitLab"],
        role: "React Developer",
        demo: "https://www.artists.colorfol.com/",
        image: colorfol,
    },
    {
        id: 4,
        name: "CARA",
        description: "I built the website of a company that promotes services for African and Russian partnerships. I used ReactJS, TailwindCSS, Preline UI, and other npm libraries for the UI. I utilized Nodemailer for handling mail messages.",
        tools: ["React", "Tailwind CSS", "Preline UI", "CPanel", "Git", "GitHub"],
        role: "React Developer",
        demo: "https://russiaafrica.org",
        image: cara,
    },
    {
        id: 5,
        name: "CHP Compta",
        description: "I developed a cross-platform mobile app for managing medical items. The UI was built using React Native, and the backend was developed using FastAPI with MongoDB as the database.",
        tools: ["React Native", "FastAPI", "Redux", "MongoDB", "Git", "GitHub"],
        role: "React Native Developer",
    },
];

// PROFILE IMAGE & BASE URL
export const profileImage = "https://z-p3-scontent.fnsi1-2.fna.fbcdn.net/v/t39.30808-6/422269500_1743037766183745_2393162712879109188_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE8hoVEqHlImYi7FT0iVx45OT-p4lnyOOs5P6niWfI4659BJzi1gBbU_JCiV4ybHxSXZXM5JRoZTTp8LUxNqm7f&_nc_ohc=hyuVx3kqXY8AX8PNgdR&_nc_zt=23&_nc_ht=z-p3-scontent.fnsi1-2.fna&oh=00_AfCnaQc0K-0otOsUXUzNpjR1UcJPYKza6QbIlllvpLTcYQ&oe=660769FB";
export const baseURL = "https://essijunior.com";
