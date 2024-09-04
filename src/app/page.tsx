'use client'

import Image from "next/image";
import Link from "next/link";

import { projectsMetadata } from "@/lib/data";
import Contact from "@/components/contact";
import { TbBrandGithub, TbBrandLinkedin, TbBrandItch, TbPhone, TbMail} from 'react-icons/tb'

export default function Home() {
	const images = projectsMetadata.map(proj => proj.thumbnail || "/projects/cppgameengine/TailSmashThumbnail.png")
  	return (
		<>
			<div className="flex flex-col md:flex-row md:m-10 justify-center gap-8">
				<div className="flex justify-center flex-col rounded-xl">
					<h1 className="flex justify-center font-besley text-center border-accent border-solid border-2 rounded-xl text-6xl bg-transparent backdrop-blur-sm p-4 mt-8 mb-0 z-10">Hello, I&apos;m Trevor</h1>
					<Image
						src="/portrait.jpg"
						alt="Image of me, Trevor"
						width={500}
						height={500}
						priority
						className="self-center m-8 aspect-square object-cover rounded-full"
					></Image>
				</div>
				<div className="flex flex-col md:w-1/3 justify-center">
					<p className="m-4 mb-2 p-4 text-xl border-accent border-solid border-2 rounded-xl bg-transparent backdrop-blur-sm">I&apos;m a Junior at Johns Hopkins University, studying Computer Science. My favorite hobby is working on my various projects, especially coding video games.</p>
					<div className="flex flex-col items-center">
						<Link href='/projects' className="rounded-xl m-4">
							<p className="p-3 text-xl border-accent border-solid border-2 bg-transparent backdrop-blur-md rounded-lg"><span className="underline text-primary">Click here</span> to check out my project catalog!</p>
							<div className="flex flex-row flex-wrap justify-center">
								{images.map((img, i) =>
									<Image
										key={i}
										src={img}
										alt={img}
										width={250}
										height={0}
										quality={40}
										className={"aspect-[16/10] object-cover object-top w-1/3"}
									>
									</Image>
								)}
							</div>
						</Link>
					</div>
				</div>
			</div>
			<Contact
				links={[
					{ href: 'mailto:trevoroblack@gmail.com', text: 'trevoroblack@gmail.com', icon: <TbMail/>},
					{ href: 'tel:+19174288262', text: '917-428-8262', icon: <TbPhone/>},
					{ href: 'https://linkedin.com/trevoroblack', text: 'LinkedIn', icon: <TbBrandLinkedin/> },
					{ href: 'https://github.com/TobBot2', text: 'GitHub', icon: <TbBrandGithub/>},
					{ href: 'https://tobbot2.itch.io', text: 'Itch.io', icon: <TbBrandItch/>},
				]}
			/>
		</>
	);
}
