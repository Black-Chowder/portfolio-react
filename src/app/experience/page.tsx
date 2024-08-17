import { jobs } from "@/lib/data";
import { Job } from "@/lib/types";

function ExperiencePoint({
	job,
} : {
	job: Job,
}) {
	const dateFormatOptions: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
	};

	return (
		<div className="flex flex-row justify-start mb-8 w-full">
			<div className="flex mt-1 mb-1 mr-4 border-r-2 border-accent-foreground"></div>
			<div className="flex flex-col w-full"> { /* info section */}
				<div className="flex flex-col justify-start mb-1">
					<div className="flex justify-between align-bottom">
						<h1 className="mr-5 font-semibold text-2xl"> { job.title } </h1>
						<div className="flex flex-row justify-end">
							<p className="text-right text-xl">
											{`${job.start_date.toLocaleString("en-US", dateFormatOptions)}`} &ndash; {job.end_date.getFullYear() == new Date().getFullYear() && job.end_date.getMonth() == new Date().getMonth()
								? "Present" : `${job.end_date.toLocaleString("en-US", dateFormatOptions)}`}</p>
						</div>
					</div>
					<div className="flex justify-between align-bottom">
						<h2 className="text-lg"> { job.company } </h2>
						<h2 className="text-base"> { job.location } </h2>
					</div>
				</div>
				<ul>
					{job.description.map((point, i) =>
					<li key={i} className="relative left-4 list-item list-disc">
						{point}
					</li>)}
				</ul>
			</div>
		</div>
	)
}

function YearDivider({ year } : { year: number }) {
	return <div className="flex justify-center items-center w-full text-3xl font-extrabold opacity-25">
		{year}
	</div>
}

export default function Experience() {
	jobs.sort((a, b) => {
		if (a.start_date.getTime() == b.start_date.getTime()) return 0;
		return a.start_date > b.start_date ? 1 : -1;
	});

	// Place year headers
	let lastJobYear = jobs[jobs.length - 1].start_date.getFullYear();
	const expAndYearGaps = []
	expAndYearGaps.push(<YearDivider key={"present"} year={lastJobYear} />);
	for (let i = jobs.length - 1; i >= 0; i--) {
		const currentYear = jobs[i].start_date.getFullYear();
		if (currentYear < lastJobYear) {
			// year jump
			expAndYearGaps.push(<YearDivider key={currentYear} year={currentYear} />)
			lastJobYear = currentYear;
		}
		expAndYearGaps.push(<ExperiencePoint key={jobs[i].slug} job={jobs[i]} />)
	}

    return (
		<div className="flex flex-col flex-grow py-4 px-6 md:px-32 bg-opacity-70 backdrop-blur-sm shadow-lg dark:shadow-neutral-800">
			<h1 className="flex w-full my-12 justify-center text-4xl font-medium">
				Work Experience
			</h1>
			{expAndYearGaps}
		</div>
    );
}