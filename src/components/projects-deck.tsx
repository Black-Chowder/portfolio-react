import { projectsMetadata } from "@/lib/data";
import { Project } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({project, first} : {project: Project, first: boolean}) {
    return <>
        <div className={`group relative w-full ${first ? '' : '-mt-[40%]'} z-20`}>
            <Link href={`/projects/view?id=${project.slug}`}>
                <Image
                    width="500"
                    height="0"
                    quality="50"
                    src={project.thumbnail}
                    alt={project.title}
                    className="relative w-full aspect-[16/10] object-cover object-top rounded-md shadow-xl transition group-hover:-translate-x-[95%] duration-500 group-hover:duration-150"
                />
            </Link>
        </div>
    </>
}

export default function ProjectsDeck() {
    const projectCards = projectsMetadata.map((project, i) => {return i < 4 ? <ProjectCard project={project} key={project.slug} first={i == 0}/> : <></>} );
    return <>
        {projectCards}
        <div className="p-3 z-30 text-xl border-secondary border-solid border-2 bg-transparent backdrop-blur-md rounded-lg -skew-x-[20deg]">
            <p className="skew-x-[20deg] ml-4">
                <Link href={"/projects"} className="underline text-primary">Click here</Link> to check out my full project catalog!
            </p>
        </div>    
    </>
}