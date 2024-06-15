import { projects } from "@/lib/data";
import { Project } from "@/lib/types";
import Image from "next/image";

function ProjectCard ({
    project,
}: {
    project: Project,
}){
    return (
		<div className="flex flex-col justify-center items-center -mb-20 w-full h-full">
			<div className="flex w-full aspect-[16/10] relative -bottom-20 -z-10 p-4">
				<Image
					src={project.thumbnail ? project.thumbnail : "/react-logo.png"}
					alt={`${project.title} thumbnail`}

					width={1000}
					height={1000}

					className="w-full h-full object-cover object-top rounded-2xl bg-gradient-to-br from-accent to-background"
				/>
			</div>
			<div className="flex flex-col w-11/12 md:w-4/6 px-6 py-2 m-5 rounded-md shadow-lg bg-card">
				<div className="flex mb-1">
					<h1 className="mr-5 font-light text-2xl"> { project.title } </h1>
				</div>
				<p className="flex-grow"> { project.description } </p>
			</div>
		</div>
    )
}

export default function Projects() {
    return (
		<>
			<div id="featured-project-container" className="">

			</div>
			<div id="project-list-container"	
				className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 py-4 pb-40 md:px-32 shadow-lg justify-items-center">
				{ projects.map((project, i) => <ProjectCard project={project} key={i} />) }
			</div>
		</>
    );
}