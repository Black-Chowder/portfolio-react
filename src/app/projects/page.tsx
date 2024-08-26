'use client'

import { FeaturedProject, Project, ProjectTag } from "@/lib/types";
import { getProjectTagBorderColor, useIsVisible } from "@/lib/utils";
import { featuredProjectMetadata, projectsMetadata } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function Tag({ tag }: { tag: ProjectTag }) {
	const color = getProjectTagBorderColor(tag);

	return (
		<>
			<p className={`scale-90 md:scale-100 rounded-lg border-solid ${color} border-2 md:border-4 text-nowrap px-2 w-min h-12 mx-1 -z-10 backdrop-blur-lg`}>
				{ tag }
			</p>
		</>
	)
}

function ProjectCard ({
	project,
}: {
	project: Project,
}){
	const ref1: any = useRef(null);
    const isVisible = useIsVisible(ref1);

	// keeps it visible once it has been rendered once
	const [rendered, setRendered] = useState(false);
	useEffect(() => {
		if (isVisible) {
			setRendered(true);
		}
	})

    return (
		<Link ref={ref1} href={`/projects/view?id=${project.slug}`} className={`flex flex-col justify-center items-center md:-mb-20 w-full h-full md:hover:scale-105 transition-all ease-out duration-200 ${rendered ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
			<div className="flex w-full aspect-[16/10] relative md:-bottom-20 -z-10 px-4 pt-4 md:p-4">
				<Image
					src={project.thumbnail ? project.thumbnail : "/react-logo.png"}
					alt={`${project.title} thumbnail`}
					width={1000}
					height={1000}
					className="w-full h-full object-cover object-top rounded-t-2xl md:rounded-2xl bg-gradient-to-tl dark:bg-gradient-to-br from-accent to-background"
				/>
				<div id="tag-container" className="flex flex-row md:gap-1 absolute -top-8 left-0 w-[calc(100%-1.5rem)] p-6 overflow-hidden">
					{ project.tags.map(tag => <Tag key={tag} tag={tag} />) }
				</div>
			</div>
			<div className="flex justify-center p-4 pt-0">
				<div id="card-info-container" className="flex flex-col w-full md:w-4/6 px-6 py-2 mb-5 md:m-5 rounded-b-2xl md:rounded-2xl shadow-lg bg-card">
					<div className="flex mb-1">
						<h1 className="mr-5 font-light text-2xl"> { project.title } </h1>
					</div>
					<p className="flex-grow"> { project.description } </p>
				</div>
			</div>
		</Link>
    )
}

function FeaturedProjectCard({
	project
}: {
	project: FeaturedProject
}) {
	return (
		<>
			<Link id="featured-project" href={`/projects/view?id=${project.slug}`} className='grid w-2/3 mb-8 grid-cols-[5fr_2fr]'>
				<div className="flex flex-col items-center col-start-1">
					<h1 className="relative top-5 hover:text-primary transition-all py-4 px-16 w-min h-min rounded-lg shadow-lg backdrop-blur-xl text-5xl text-nowrap z-10">
						{project.title}
					</h1>
					<Image
						src={project.thumbnail ? project.thumbnail : "/react-logo.png"}
						alt={`${project.title} thumbnail`}
						width={500}
						height={500}
						quality={100}
						className="w-full transition-transform col-start-1 col-end-4 row-start-1 row-end-3 [image-rendering:pixelated]"
						/>
				</div>
				<div className="flex flex-col items-end justify-end col-start-2 z-10">
					<div className="w-[120%] my-8">
						<div className="flex flex-row relative -bottom-7 w-full text-base p-2 overflow-hidden">
							{ project.tags.map(tag => <Tag key={tag} tag={tag} /> ) }
						</div>
						<div className="w-full p-4 bg-card rounded-lg shadow-lg">
							{ project.description }
						</div>
					</div>
					<div className="w-[120%] relative top-8 scale-125">
						<Image
							src={project.img1 ? project.img1 : "/react-logo.png"}
							alt={`${project.title} thumbnail`}
							width={1000}
							height={1000}
							/>
					</div>
				</div>
			</Link>
		</>
	)
}

export default function ProjectCatalog() {
    return (
		<>
			{featuredProjectMetadata ?
				<div className="hidden md:flex w-full flex-col justify-center items-center">
					<h1 className="flex w-full mt-8 text-lg text-center text-muted-foreground justify-center">
						~ Featured Project ~
					</h1>
					<FeaturedProjectCard project={featuredProjectMetadata} />
				</div>
			: null}
			<h1 className="flex w-full mt-8 text-lg text-center text-muted-foreground justify-center">
				~ Full Project Catalog ~
			</h1>
			<div id="project-list-container"	
				className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 py-4 pb-40 md:px-32 shadow-lg justify-items-center">
				{ projectsMetadata.map(project => <ProjectCard project={project} key={project.slug} />) }
			</div>
		</>
    );
}