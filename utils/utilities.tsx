import { Facebook, GitHub, LinkedIn, X } from "@mui/icons-material";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoElectron } from "react-icons/io5";
import { BiLogoJavascript } from "react-icons/bi";
import { SiMui, SiNextdotjs, SiFastapi, SiJavascript, SiKotlin, SiMongodb, SiMysql, SiPostgresql, SiRedux, SiSwagger, SiTailwindcss, SiDjango } from "react-icons/si";
import { TbBrandThreejs, TbBrandTrello } from "react-icons/tb";
import { FaAndroid, FaAws, FaCss3, FaDocker, FaFigma, FaGit, FaJava, FaMarkdown, FaNodeJs, FaPython, FaReact, FaSass } from "react-icons/fa6";

export function capitalise(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

interface LottieOptions {
    loop: boolean;
    autoplay: boolean;
    animationData: unknown;
    rendererSettings: {
        preserveAspectRatio: string;
    };
}

export const defaultLottieOptions = (lottie: unknown): LottieOptions => {
    return {
        loop: true,
        autoplay: true,
        animationData: lottie,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
};

interface SocialLink {
    name: string;
    href: string;
    icon: any;
}

export const social: SocialLink[] = [
    {
        name: "Github",
        href: "https://github.com/sandjonyves",
        icon: <GitHub fontSize="large" />,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/sandjonyves/",
        icon: <LinkedIn fontSize="large" />,
    },
    {
        name: "Facebook",
        href: "https://web.facebook.com/sandjonyves",
        icon: <Facebook fontSize="large" />,
    },
    {
        name: "X (Formerly Twitter)",
        href: "https://twitter.com/sandjonyves",
        icon: <X fontSize="large" />,
    },
];

export const tech = [
    {
        'label': 'Python',
        'icon': <FaPython size='20' />
    },
    {
        'label': 'JavaScript',
        'icon': <BiLogoJavascript size='20' />
    },
    {
        'label': 'FastAPI',
        'icon': <SiFastapi size='20' />
    },
    {
        'label': 'Next',
        'icon': <SiNextdotjs size='20' />
    },
    {
        'label': 'React',
        'icon': <FaReact size='20' />
    },
    {
        'label': 'React Native',
        'icon': <RiReactjsLine size='20' />
    },
    // {
    //     'label': 'Electron',
    //     'icon': <IoLogoElectron size='20' />
    // },
    // {
    //     'label': 'NodeJS',
    //     'icon': <FaNodeJs size='20' />
    // },
    // {
    //     'label': 'Android',
    //     'icon': <FaAndroid size='20' />
    // },
]

export const skills = [
    {
        id: 3,
        icon: <SiJavascript size={40} />,
        tag: 'Javascript',
    },
    {
        id: 16,
        icon: <FaPython size={40} />,
        tag: 'Python',
    },
    {
        id: 4,
        icon: <FaReact size={40} />,
        tag: 'React',
    },
    {
        id: 7,
        icon: <SiMysql size={40} />,
        tag: 'MySQL',
    },
    {
        id: 5,
        icon: <SiTailwindcss size={40} />,
        tag: 'Tailwind',
    },
    {
        id: 8,
        icon: <SiPostgresql size={40} />,
        tag: 'PostgreSQL',
    },
    
    {
        id: 21,
        icon: <FaJava size={30} />,
        tag: 'Java',
    },
  
    {
        id: 9,
        icon: <FaGit size={40} />,
        tag: 'Git',
    },
    {
        id: 10,
        icon: <FaAws size={40} />,
        tag: 'AWS',
    },
    {
        id: 12,
        icon: <FaDocker size={40} />,
        tag: 'Docker',
    },
    {
        id: 13,
        icon: <FaFigma size={40} />,
        tag: 'Figma',
    },
    {
        id: 14,
        icon: <SiMui size={40} />,
        tag: 'MaterialUI',
    },
    {
        id: 15,
        icon: <FaNodeJs size={40} />,
        tag: 'NodeJS',
    },
   {
        id: 6,
        icon: <SiDjango size={40} />,
        tag: 'Django',
    },
    {
        id: 17,
        icon: <SiFastapi size={40} />,
        tag: 'FastAPI',
    },
    {
        id: 18,
        icon: <FaMarkdown size={40} />,
        tag: 'Markdown',
    },
   
    {
        id: 22,
        icon: <SiKotlin size={40} />,
        tag: 'Kotlin',
    },
    {
        id: 24,
        icon: <RiReactjsLine size={40} />,
        tag: 'ReactNative',
    },
    {
        id: 25,
        icon: <IoLogoElectron size={40} />,
        tag: 'ElectronJS',
    },
    // {
    //     id: 26,
    //     icon: <FaAndroid size={40} />,
    //     tag: 'Android',
    // },
    {
        id: 27,
        icon: <FaCss3 size={40} />,
        tag: 'Css',
    },
    {
        id: 28,
        icon: <SiRedux size={40} />,
        tag: 'Redux',
    },
    {
        id: 29,
        icon: <TbBrandTrello size={40} />,
        tag: 'Teello',
    },
    {
        id: 30,
        icon: <SiNextdotjs size={40} />,
        tag: 'NextJS',
    },
    {
        id: 31,
        icon: <SiSwagger size={40} />,
        tag: 'Swagger',
    }
]
