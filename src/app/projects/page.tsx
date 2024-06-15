import { projects } from "@/lib/data";
import { Project } from "@/lib/types";

function ProjectCard ({
    project,
}: {
    project: Project,
}){
    return (
        <div className="flex flex-col bg-card rounded-md shadow-lg w-11/12 md:w-4/6 aspect-square px-6 py-2 m-5">
            <div className="flex mb-1">
                <h1 className="mr-5 font-light text-2xl"> { project.title } </h1>
            </div>
            <p className="flex-grow"> { project.description } </p>
        </div>
    )
}

export default function Projects() {
    return (
		<>
			<div id="featured-project-container" className="">

			</div>
			<div id="project-list-container" 
				className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 py-4 px-32 shadow-lg justify-items-center">
				{ projects.map((project, i) => <ProjectCard project={project} key={i} />) }
			</div>
		</>
    );
}