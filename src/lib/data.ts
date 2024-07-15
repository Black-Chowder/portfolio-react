import { Job, Project, NavData, FeaturedProject } from "./types"

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
]

export const jobs: Job[] = [
    {
        slug: "idtech",
        title: "Camp Instructor",
        company: "iD Tech",
        location: "Manhattan, New York",
        start_date: new Date(2024, 5, 1),
        end_date: new Date(), //new Date(2024, 7, 1),
        description: [
            "Led lessons for groups of 9-12 year olds on programming for Roblox in Lua. ",
            "Effectively communicated difficult topics in easy to understand terms. ",
            "Created custom projects suited for each child. ",
            "Attentively ensured the safety and engagement of all students. "
        ]
    },
    {
        slug: "uc3m",
        title: "Research Lab Assistant",
        company: "Charles III University of Madrid",
        location: "Madrid, Spain",
        start_date: new Date(2023,4,22),
        end_date: new Date(2023,6,26),
        description: [
            "Integrated the NVIDIA Cuda toolkit in a high performance computer system. ",
            "Updated C functions to improve data sharing between nodes by utilizing the GPU. ",
            "Conducted performance improvement analysis and unit testing. ",
        ]
    },
    {
        slug: "delineo",
        title: "Research Lab Assistant",
        company: "Johns Hopkins \"Delineo\" Pandemic Research",
        location: "Baltimore, Maryland",
        start_date: new Date(2023,0,1),
        end_date: new Date(2023,4,12),
        description: [
            "Pandemic Simulation Research - led by Professor Dr. Dahbura. ",
            "Led the Unity sub-team which improved the \"gamified\" version of the simulation. ",
            "As a team leader, I set deadlines, arranged team meetings and assigned workstreams. ",
            "Coded new features to the existing codebase such as sanitizing retrieved server data. ",
        ]
    },
    {
        slug: "mgagolf",
        title: "Intern",
        company: "Metropolitan Golf Association",
        location: "White Plains, New York",
        start_date: new Date(2022, 4, 1),
        end_date: new Date(2022, 5, 1),
        description: [
            "Updated website by streamlining data pipelines for renewing information and fixing various bugs. ",
            "Condensed decades of tournament data for easy analysis and manipulation using Excel formulas. "
        ]
    },
]

export const featuredProjectMetadata: FeaturedProject = {
    slug: "cppgameengine",
    title: "C++ Game Engine",
    end_date: new Date(2023, 1, 12),
    description: "Game I created only using C++ and the SFML library for rendering and audio.",
    thumbnail: "/project-img/TailSmashThumbnail.png",
    img1: "/project-img/TailSmashThumbnail.png",
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
            "Coding", "3D Design", "Solo", "WIP"
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