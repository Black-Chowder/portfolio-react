import { Job, Project, NavData } from "./types"

export const navData: NavData[] = [
    {
        ext: "/aboutme",
        name: "About Me",
    },
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
]

export const jobs: Job[] = [
    {
        slug: "uc3m",
        title: "Lab Assistant",
        company: "Charles III University of Madrid",
        start_date: new Date(2023,4,22),
        end_date: new Date(2023,6,26),
        description: "Pandemic Simulation Research - led by Professor Dr. Dahbura. Led the Unity sub-team responsible for improving the \"gamified\" version of the simulation. As a team leader, I set deadlines, arranged team meetings and assigned workstreams. Other duties included programming; retrieving, parsing and importing data from the server; bug fixes.",
    },
    {
        slug: "delineo",
        title: "Game Programmer Team Lead",
        company: "Delineo Pandemic Research",
        start_date: new Date(2023,0,1),
        end_date: new Date(2023,4,12),
        description: "Research lab assistant. Integrated the NVIDIA Cuda toolkit and updated C/C++ functions to improve data sharing for a high performance computer system by utilizing the GPU. Conducted performance improvement analysis.",
    },
]

export const projects: Project[] = [
    {
        slug: "cppgameengine",
        title: "C++ Game Engine",
        end_date: new Date(2023, 1, 12),
        description: "Game I created only using C++ and the SFML library for rendering and audio.",
        thumbnail: "/project-img/TailSmashThumbnail.png",
        tags: [
            "Coding", "Game", "Solo",
        ],
        links: [
            "tobbot2.itch.io/tail-smash",
            "github.com/tobbot2/tailsmash",
        ]
    },
    {
        slug: "manhattanmap",
        title: "Manhattan Map",
        end_date: new Date(),
        description: "Wooden lasercut map of Manhattan with LEDs where the subway lines are.",
        thumbnail: "",
        tags: [
            "Coding", "3D Design", "Solo", "In Progress"
        ],
        links: [
            "github.com/tobbot2/manhattanmap"
        ]
    },
    {
        slug: "dbfplane",
        title: "Club RC Plane - DBF",
        end_date: new Date(),
        description: "RC plane made by the club I am president of (Design Build Fly).",
        thumbnail: "",
        tags: [
            "Group", "3D Design"
        ],
        links: [
            "https://jhu-dbf-website.pages.dev/" // TODO (probably needs updating when we publish it?) 
        ]
    },
    {
        slug: "dbfsite",
        title: "Club Website - DBF",
        end_date: new Date(2024, 6, 15),
        description: "Website I led the creation of for the club I am president of (Design Build Fly).",
        thumbnail: "",
        tags: [
            "Group", "Coding", "Website"
        ],
        links: [
            "https://jhu-dbf-website.pages.dev/" // TODO (probably needs updating when we publish it?)
        ]
    },
    {
        slug: "portfoliosite",
        title: "Portfolio Site (this site!)",
        end_date: new Date(),
        description: "Website I made using React, NextJS, and Shadcn.",
        thumbnail: "",
        tags: [
            "Coding", "Solo", "Website"
        ],
        links: [
            "github.com/tobbot2/portfolio-react",
        ]
    },
    {
        slug: "gamejams",
        title: "Game-Jam Games Collection",
        end_date: new Date(),
        description: "Collection of video games I created in separate game jam events using Unity (C#).",
        thumbnail: "",
        tags: [
            "Coding", "Game", "Group"
        ],
        links: [
            "tobbot2.itch.io", // TODO
        ]
    },
    {
        slug: "jwsimulations",
        title: "Physics Simulations Collection",
        end_date: new Date(2021, 5, 1),
        description: "Collection of physics simulations to teach students in an interactive, \"gamified,\" way.",
        thumbnail: "",
        tags: [
            "Coding", "Solo", "Class"
        ],
        links: [
            "github.com/tobbot2/JWSimulations",
            "" // TODO link to actual simulations site.
        ]
    },
    {
        slug: "cathedral",
        title: "Romanesque Cathedral 3D Model",
        end_date: new Date(2022, 2, 1),
        description: "3D Model created in Blender with heavy research in the Romanesque architecture style.",
        thumbnail: "",
        tags: [
            "3D Design", "Solo"
        ],
        links: [
            "thingiverse.com", // TODO
        ]
    },
    {
        slug: "yearbook",
        title: "Yearbook Page 3D Render",
        end_date: new Date(2022, 4, 1),
        description: "3D Render created in Blender - a collage of many models I have made by myself over the years.",
        thumbnail: "",
        tags: [
            "3D Design", "Solo"
        ],
        links: [
            "thingiverse.com", // TODO
        ]
    }
]