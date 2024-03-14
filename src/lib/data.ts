import { Job, Project } from "./types"

export const jobs: Job[] = [
    {
        slug: "uc3m",
        title: "Lab Assistant",
        company: "Charles III University of Madrid",
        start_date: new Date(2023,4,22),
        end_date: new Date(2023,6,26),
        description: "Pandemic Simulation Research - led by Professor Dr. Dahbura. I headed the Unity sub-team responsible for improving the \"gamified\" version of the simulation. As a team leader, I set deadlines, arranged team meetings and assigned workstreams. Other duties included programming; retrieving, parsing and importing data from the server; bug fixes.",
    },
    {
        slug: "delineo",
        title: "Game Programmer Team Lead",
        company: "Delineo Pandemic Research",
        start_date: new Date(2023,0,1),
        end_date: new Date(2023,4,12),
        description: "I was a research lab assistant. I integrated the NVIDIA Cuda toolkit and updated C/C++ functions to improve data sharing for a high performance computer system by utilizing the GPU. I also conducted performance improvement analyses.",
    },
]

export const projects: Project[] = [
    {
        slug: "cppgameengine",
        title: "C++ Game Engine",
        end_date: new Date(2023, 1, 12),
        description: "A game I created only using c++ and the SFML library for rendering and audio."
    },
    {
        slug: "manhattanmap",
        title: "Manhattan Map",
        end_date: new Date(),
        description: "A wooden lasercut map of Manhattan with LEDs where the subway lines are."
    },
    {
        slug: "portfoliosite",
        title: "Portfolio Site (this site!)",
        end_date: new Date(),
        description: "A website I made using React, NextJS, and Shadcn."
    }
]