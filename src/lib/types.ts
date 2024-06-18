export type Job = {
    slug: string;
    title: string;
    company: string;
    start_date: Date;
    end_date: Date;
    description: string;
}

export type Project = {
    slug: string;
    title: string;
    end_date: Date;
    description: string;
    thumbnail: string;
    tags: ProjectTag[];
    links: string[];
}

export type ProjectTag = "Game" | "3D Design" | "Website" | "Coding" | "Group" | "Solo" | "Class" | "In Progress"; 

export type NavData = {
    ext: string;
    name: string;
}