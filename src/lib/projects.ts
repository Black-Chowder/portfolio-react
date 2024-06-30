import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { Project } from '@/lib/types'

const projectsDir = path.join(process.cwd(), 'project-mdx');

export function getAllProjectsMetadata(): Project[] {
    const fileNames = fs.readdirSync(projectsDir);
    const allProjectsMetadata: Project[] = fileNames.map((fileName): Project => {
        const slug = fileName.replace(/\.md$/, '');

        const fullPath = path.join(projectsDir, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        const matterResult = matter(fileContents);

        const { title, end_date, description, thumbnail, tags, links } = matterResult.data

        return {
            title,
            slug,
            end_date,
            description,
            thumbnail,
            tags,
            links,
        };
    });

    return allProjectsMetadata;
}

export function getProjectData(projectSlug: string) {
    const filepath = path.join(projectsDir, `${projectSlug}.md`);
    const fileContents = fs.readFileSync(filepath, 'utf-8');

    const matterResult = matter(fileContents);
    
    return matterResult.content;
}