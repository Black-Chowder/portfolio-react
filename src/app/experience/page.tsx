import Header from "@/components/header";
import { jobs } from "@/lib/data";

export default function Experience() {
	const jobsList = jobs
		.toSorted((a, b) => b.start_date.getTime() - a.start_date.getTime())
		.map(job => 
			<div className="flex flex-row justify-center mb-8 max-w-fit">
				<div className="flex flex-col justify-between mr-2">  { /* timeline section */}
					<p className="text-right">{job.end_date.toLocaleDateString()}</p>
					<p className="text-right">{job.start_date.toLocaleDateString()}</p>
				</div>
				<div className="flex mt-1 mb-1 mr-4 border-r-2 border-accent-foreground"></div>
				<div className="flex flex-col max-w-xl"> { /* info section */}
					<div className="flex flex-col justify-start mb-1">
						<h1 className="mr-5 font-light text-2xl"> { job.title } </h1>
						<h3 className="font-light text-xl"> { job.company } </h3>
					</div>
					<p> { job.description } </p>
				</div>
			</div>
		);

    return (
        <main className="flex flex-col justify-self-stretch min-h-screen items-center">
            <Header/>
			<div className="flex flex-col flex-grow py-4 px-32 shadow-lg">
				{jobsList}
			</div>
        </main>
    );
}