'use client'
 
import { redirect, useSearchParams } from 'next/navigation'

import { projectsMetadata } from "@/lib/data";
import { getProjectNodes } from "./getProject";
import { Suspense } from 'react';
import Image from 'next/image';

function ProjectNodes() {
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
        <div className="flex flex-col items-center w-11/12 md:w-1/2 text-justify">
            <h1 className="text-4xl sm:text-5xl mt-8 mb-5">{ projectMetadata.title }</h1>
            <Image
                src={projectMetadata.thumbnail}
                alt={`${projectMetadata.title} thumbnail image`}
                width={600}
                height={0}
                className="mb-10"
                >
            </Image>
            { projectNodes }
        </div>
    );
}

export default function ProjectView() {
    return (
        <>
            <Suspense>
                <ProjectNodes />
            </Suspense>
        </>
    )
}