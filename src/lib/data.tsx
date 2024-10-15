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
    slug: "cppgameengine",
    title: "C++ Game Engine",
    end_date: new Date(2023, 1, 12),
    description: "Game I created only using C++ and the SFML library for rendering and audio. Source code is on GitHub, or play it on Itch.io! Click for more info.",
    thumbnail: "/projects/cppgameengine/TailSmashThumbnail.png",
    img1: "/projects/cppgameengine/TailSmashAsteroids.png",
    tags: [
        "Coding", "Game", "Solo",
    ],
    links: [
        "tobbot2.itch.io/tail-smash",
        "github.com/tobbot2/tailsmash",
    ]
}

export const projectsMetadata: Project[] = [
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
        slug: "dbfplane",
        title: "Club RC Plane - DBF",
        end_date: new Date(),
        description: "RC plane made by the club I am president of (Design Build Fly).",
        thumbnail: "/projects/dbfplane/thumbnail.jpg",
        tags: [
            "Group", "3D Design"
        ],
        links: [
            "https://jhu-dbf-website.pages.dev/" // TODO (probably needs updating when we publish it?) 
        ]
    },
    {
        slug: "portfoliosite",
        title: "Portfolio Site (this!)",
        end_date: new Date(),
        description: "Website I made using React, NextJS, and Shadcn.",
        thumbnail: "/projects/portfoliosite/homepage.png",
        tags: [
            "Coding", "Solo", "Website"
        ],
        links: [
            "github.com/tobbot2/portfolio-react",
        ]
    },
    {
        slug: "gamejams",
        title: "Game-Jam Collection",
        end_date: new Date(),
        description: "Collection of video games I created in separate game jam events using Unity (C#).",
        thumbnail: "/projects/gamejams/thumbnail.png",
        tags: [
            "Coding", "Game", "Group"
        ],
        links: [
            "tobbot2.itch.io", // TODO
        ]
    },
    {
        slug: "dbfsite",
        title: "Club Website - DBF",
        end_date: new Date(2024, 6, 15),
        description: "Website I led the creation of for the club I am president of (Design Build Fly).",
        thumbnail: "/projects/dbfsite/homepage.jpg",
        tags: [
            "Group", "Coding", "Website"
        ],
        links: [
            "https://jhu-dbf-website.pages.dev/" // TODO (probably needs updating when we publish it?)
        ]
    },
    {
        slug: "manhattanmap",
        title: "Manhattan Map",
        end_date: new Date(),
        description: "Wooden lasercut map of Manhattan with LEDs where the subway lines are.",
        thumbnail: "/projects/manhattanmap/thumbnail.jpg",
        tags: [
            "Coding", "3D Design", "Solo", "WIP"
        ],
        links: [
            "github.com/tobbot2/manhattanmap"
        ]
    },
    // {
    //     slug: "jwsimulations",
    //     title: "Physics Simulations",
    //     end_date: new Date(2021, 5, 1),
    //     description: "Collection of physics simulations to teach students in an interactive, \"gamified,\" way.",
    //     thumbnail: "",
    //     tags: [
    //         "Coding", "Solo", "Class"
    //     ],
    //     links: [
    //         "github.com/tobbot2/JWSimulations",
    //         "" // TODO link to actual simulations site.
    //     ]
    // },
    {
        slug: "cathedral",
        title: "Cathedral 3D Model",
        end_date: new Date(2022, 2, 1),
        description: "3D Model created in Blender with heavy research in Romanesque architecture.",
        thumbnail: "/projects/cathedral/Classic.png",
        tags: [
            "3D Design", "Solo"
        ],
        links: [
            "thingiverse.com", // TODO
        ]
    },
    {
        slug: "3dmodeling",
        title: "Miscellaneous 3D Models",
        end_date: new Date(2022, 4, 1),
        description: "3D Models and renders created in Blender I have made by myself over the years.",
        thumbnail: "/projects/3dmodeling/bluejaycampsite.png",
        tags: [
            "3D Design", "Solo"
        ],
        links: [
            "thingiverse.com", // TODO
        ]
    }
]