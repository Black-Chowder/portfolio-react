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
        location: "New York, NY",
        start_date: new Date(2024, 5, 1),
        end_date: new Date(2024, 7, 1),
        description: [
            "Instructed teens to code in Lua with Roblox Studio. Promoted to teach Unreal Engine. ",
            "Communicated difficult programming topics in easy to understand terms tailored to individual students. "
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
            "Lab assistant for high performance computing research tasked with optimization and performance analysis. ",
            "Integrated NVIDIA Cuda toolkit and updated C/C++ functions to improve data sharing by utilizing the GPU. ",
            "Explored ways to visualize GitHub collaboration in a classroom setting. "
        ]
    },
    {
        slug: "delineo",
        title: "Research Lab Assistant",
        company: "Johns Hopkins \"Delineo\" Pandemic Research",
        location: "Baltimore, MD",
        start_date: new Date(2023,0,1),
        end_date: new Date(2023,4,12),
        description: [
            "Headed Unity sub-team responsible for improving “gamified” version of the pandemic simulation. ",
            "As a sub-team lead, I set deadlines, arranged team meetings and assigned work to meet sprint deadlines. ",
            "Responsible for over 40 commits to the established Azure DevOps repository. ",
            "Programmed pandemic event system, handling of server simulation data, and pre-existing bug fixes. "
        ]
    },
    {
        slug: "mgagolf",
        title: "Intern",
        company: "Metropolitan Golf Association",
        location: "White Plains, NY",
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
        slug: "cppgameengine",
        title: "C++ Game Engine",
        end_date: new Date(2023, 1, 12),
        description: "Game I created only using C++ and the SFML library for rendering and audio.",
        thumbnail: "/projects/cppgameengine/TailSmashThumbnail.png",
        tags: [
            "Coding", "Game", "Solo",
        ],
        links: [
            "tobbot2.itch.io/tail-smash",
            "github.com/tobbot2/tailsmash",
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