'use client'

import Image from "next/image";
import Link from "next/link";

import { projectsMetadata } from "@/lib/data";
import Contact from "@/components/contact";
import ProjectsDeck from "@/components/projects-deck";

export default function Home() {
	const images = projectsMetadata.map(proj => proj.thumbnail)
  	return (
	<>
		<div className="flex flex-col md:flex-row md:m-10 justify-center gap-8">
			<div className="flex justify-center flex-col rounded-xl md:w-1/2">
				<h1 className="flex justify-center font-bold text-center border-secondary border-solid border-2 rounded-xl text-6xl bg-transparent backdrop-blur-sm p-4 mt-8 mb-0 z-10 -skew-x-[20deg]">
					<span className="skew-x-[20deg]">Hello, I&apos;m Trevor</span>
				</h1>
				<Image
					src="/portrait.jpg"
					alt="Image of me, Trevor"
					width={500}
					height={500}
					priority
					className="self-center m-8 aspect-square object-cover rounded-full"
				></Image>
				<span className="m-4 mb-2 p-4 text-xl border-secondary border-solid border-2 rounded-xl bg-transparent backdrop-blur-sm -skew-x-[20deg]">
					<p className="skew-x-[20deg] ml-4">
						I&apos;m a Junior at Johns Hopkins University, studying Computer Science. My favorite hobby is working on my various projects, especially coding video games.
					</p>
				</span>
			</div>
			<div className="flex flex-col md:w-1/3 justify-center">
				<div className="flex flex-col items-center">
					<div className="rounded-xl m-4 w-full">
						<div className="hidden md:flex w-full flex-col">
							<ProjectsDeck/>
						</div>
						<p className="md:hidden p-3 text-xl border-secondary border-solid border-2 bg-transparent backdrop-blur-md rounded-lg"><Link href={"/projects"} className="underline text-primary">Click here</Link> to check out my full project catalog!</p>
						<div className="md:hidden flex flex-row flex-wrap justify-center">
							{images.map((img, i) =>
								i < 4 ?
								<Image
									key={i}
									src={img}
									alt={img}
									width={250}
									height={0}
									quality={40}
									className={"aspect-[16/10] object-cover object-top w-1/2"}
								>
								</Image>
								: <></>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
		<Contact/>
	</>
	);
}
