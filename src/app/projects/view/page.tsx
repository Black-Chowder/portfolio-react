'use client'
 
import { redirect, useSearchParams } from 'next/navigation'

import { projectsMetadata } from "@/lib/data";
import { getProjectNodes } from "./getProject";


export default function ProjectView() {
    const searchParams = useSearchParams()
    const projectId = searchParams.get('id')

    if (!projectId) {
        redirect('/projects');
    }

    const projectMetadata = projectsMetadata.find(project => project.slug === projectId);
    if (!projectMetadata) {
        return <p className="text-destructive">Error getting project: { projectId }</p>
    }

    const projectNodes = getProjectNodes(projectId);

    return (
        <>
            <h1>{ projectMetadata.title }</h1>
            { projectNodes }
        </>
    );
}