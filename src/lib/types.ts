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
    links: string[];
}
