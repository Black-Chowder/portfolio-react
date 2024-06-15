import { jobs } from "@/lib/data";
import { Job } from "@/lib/types";

function ExperiencePoint({
	job,
} : {
	job: Job,
}) {
	return <div className="flex flex-row justify-center mb-8 max-w-fit">
		<div className="flex flex-col justify-between mr-2">  { /* timeline section */}
			<p className="text-right">{`${job.end_date  .getMonth()+1}/${job.end_date  .getFullYear() - 2000}`}</p>
			<p className="text-right">{`${job.start_date.getMonth()+1}/${job.start_date.getFullYear() - 2000}`}</p>
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
}

export default function Experience() {
    return (
		<div className="flex flex-col flex-grow py-4 px-6 md:px-32 shadow-lg">
			{jobs.map((job, i) => <ExperiencePoint key={i} job={job} />)}
		</div>
    );
}