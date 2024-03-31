import Header from "@/components/header";
import { projects } from "@/lib/data";

import Image from "next/image";

export default function Projects() {
	const projectsList = projects
		.map((project, i) => 
			<div className={`w-4/6 h-full flex flex-col bg-card rounded-md shadow-lg -left-${(projects.length - i + 1) * 10} -z-${(i) * 10}`}>
				<div className="flex mb-1">
					<h1 className="mr-5 font-light text-2xl"> { project.title } </h1>
				</div>
				<p className="flex-grow"> { project.description } </p>
			</div>
		);

    return (
        <main className="flex flex-col justify-self-stretch items-start min-h-screen">
            <Header/>
			<div className="flex flex-row flex-grow px-20 py-12 w-full">
				{ projectsList }
			</div>
        </main>
    );
}