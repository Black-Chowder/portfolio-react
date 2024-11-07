import { TbMail, TbPhone, TbBrandLinkedin, TbBrandGithub, TbBrandItch } from "react-icons/tb"
import { Job, Project, NavData, FeaturedProject, ContactData } from "./types"

export const navData: NavData[] = [
    {
        ext: "/resume",
        name: "Resume",
    },
    {
        ext: "/experience",
        name: "Experience",
    },
    {
        ext: "/projects",
        name: "Projects",
    },
    {
        ext: "/contact",
        name: "Contact Me",
    }
]

export const contactLinks: ContactData[] = [
    { href: 'mailto:iblack@u.rochester.edu', text: 'iblack@u.rochester.edu', icon: <TbMail/>},
    { href: 'tel:+16462416683', text: '646-241-6683', icon: <TbPhone/>},
    { href: 'https://www.linkedin.com/in/ian-black-1924921a9/', text: 'LinkedIn', icon: <TbBrandLinkedin/> },
    { href: 'https://github.com/Black-Chowder', text: 'GitHub', icon: <TbBrandGithub/>},
    { href: 'https://black-chowder.itch.io/', text: 'Itch.io', icon: <TbBrandItch/>},
]

export const jobs: Job[] = [
    {
        slug: "cdw",
        title: "Application Developer Intern",
        company: "CDW",
        location: "Chicago, IL",
        start_date: new Date(2023, 4, 1),
        end_date: new Date(2023, 7, 1),
        description: [
            "Built and tested new features using jQuery, React and Postman",
            "Maintained NuGet and npm configurations to keep projects inline with security protocols",
            "Workedin a SCRUM AGILE environment"
        ]
    },
    {
        slug: "ta",
        title: "Teaching Assistant for Data Structures & Algorithms",
        company: "University of Rochester",
        location: "Rochester, NY",
        start_date: new Date(2022, 7, 1),
        end_date: new Date(2022, 11, 1),
        description: [
            "Gradedcoding assignments in Java",
            "Led bi-weekly lab sessions",
            "Assisted students individually to help with homework and understanding of course material"
        ]
    },
    {
        slug: "pt",
        title: "PT Assistant",
        company: "Professional Physical Therapy",
        location: "New York, NY",
        start_date: new Date(2021, 4, 1),
        end_date: new Date(2021, 7, 1),
        description: [
        ]
    },
    {
        slug: "mizuho",
        title: "Programming Intern",
        company: "Mizuho Securities",
        location: "New York, NY",
        start_date: new Date(2018, 4, 1),
        end_date: new Date(2018, 8, 1),
        description: [
        ]
    },
]

export const featuredProjectMetadata: FeaturedProject = {
    slug: "superhotsnake",
    title: "Superhot Snake",
    end_date: new Date(2023, 1, 12),
    description: "A snake game with a time-manipulation twist!  Click for more info",
    thumbnail: "/projects/superhotsnake/banner.png",
    img1: "/projects/superhotsnake/gameplay1.gif",
    tags: [
        "Coding", "Game", "Solo",
    ],
    links: [
        "https://black-chowder.itch.io/superhot-snake",
    ]
}

export const projectsMetadata: Project[] = [
    {
        slug: "superhotsnake",
        title: "Superhot Snake",
        end_date: new Date(),
        description: "A snake game with a time-manipulation twist",
        thumbnail: "/projects/superhotsnake/banner.png",
        tags: [
            "Coding", "Game", "Solo"
        ],
        links: [
            "https://black-chowder.itch.io/superhot-snake"
        ]
    },
    {
        slug: "contextsteering2d",
        title: "Context Steering 2D",
        end_date: new Date(2023, 1, 12),
        description: "Library to help AI agents navigate 2D space",
        thumbnail: "/projects/contextsteering2d/RepulsionBlock.jpg",
        tags: [
            "Coding", "AI", "Solo",
        ],
        links: [
            "https://github.com/Black-Chowder/ContextSteering2D",
        ]
    },
    {
        slug: "deepisbig",
        title: "Deep Is Big",
        end_date: new Date(),
        description: "Submission for the 2024 GMTK Game Jam",
        thumbnail: "/projects/deepisbig/DeepIsBigThumbnail.png",
        tags: [
            "Coding", "Game", "Group"
        ],
        links: [
            "https://black-chowder.itch.io/deep-is-big",
        ]
    },
    {
        slug: "frogs",
        title: "Frogs!",
        end_date: new Date(),
        description: "A game I developed using my own 2D physics engine for a game jam",
        thumbnail: "/projects/frogs/TitleScreen_bigger.png",
        tags: [
            "Coding", "Game", 
        ],
        links: [
            "https://black-chowder.itch.io/frogs", // TODO
        ]
    },
]