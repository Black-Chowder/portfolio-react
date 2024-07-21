'use client'

import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const images = [
		'/projects/cppgameengine/TailSmashThumbnail.png'
	]
  	return (
		<>
			<div className="flex flex-col md:flex-row md:m-10 justify-center gap-8">
				<div className="flex justify-center flex-col rounded-xl">
					<h1 className="flex justify-center text-center rounded-xl text-6xl p-4 pt-8 pb-0 z-10">Hello, I'm Trevor</h1>
					<Image
						src="/portrait.jpg"
						alt="Image of me, Trevor"
						width={500}
						height={500}
						className="self-center m-8 aspect-square object-cover rounded-full"
					></Image>
				</div>
				<div className="flex flex-col w-1/3 justify-center">
					<p className="m-8 mb-2 text-xl">I'm a Junior at Johns Hopkins University, studying Computer Science. My favorite hobby is working on my various projects, especially coding video games.</p>
					<div className="flex flex-col items-center">
						<Link href='/projects/view?id=cppgameengine' className="rounded-xl">
							<p className="p-3 text-xl bg-transparent backdrop-blur-md rounded-lg">Click here to check out my project catalog!</p>
							<div className="grid grid-cols-3">
								{images.map((img, i) =>
									<Image
										key={i}
										src={img}
										alt={img}
										width={250}
										height={0}
									>
									</Image>
								)}
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
