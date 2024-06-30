import { getProjectData } from '@/lib/projects';
import { MDXRemote } from 'next-mdx-remote/rsc'

export default function ProjectPage({ params }: { params: { slug: string }}) {
    const { slug } = params;

    const markdown = getProjectData(slug); 

    return (
        <>
            <MDXRemote source={markdown} />
        </>
    )
}