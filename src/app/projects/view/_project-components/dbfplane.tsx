import ModelViewer from "@/components/ModelViewer";
import Stats from "@/components/stats";
import Image from "next/image";
import Link from "next/link";

function SeeMore() {
    return (
        <>
            {/* TODO: add links to download, see src code, etc. */}
        </>
    )
}

function PlaneModel2024() {
    return(
        <div id="planemodel2024">
            <ModelViewer name="RC Plane Model 2024 Mk 7" filepath="/projects/dbfplane/PlaneFull24.gltf" />
        </div>
    )
}

function Overview() {
    return (
        <>
            <h2 id="overview" className="text-3xl mt-10">Overview</h2>

            <p className="my-5">I am president of the Johns Hopkins Design Build Fly club, where we compete in the international annual Design Build Fly competition hosted by the AIAA. I joined in my sophomore year of college as a member, but have since been elected president at the end of last year. Last year, the club was revived after being inactive, which caused some issues regarding funding and experience. Despite these setbacks, we managed to place in the top 50% of the competition &mdash; even placing higher than teams with 20x our budget!</p>

            <p className="my-5">Below is a picture of the plane in parking configuration as well as the team members who went to the 2024 competition in Wichita, Kansas, with me holding the plane in the center.</p>

            <div className="flex flex-col w-full items-center gap-5">
                <Image
                    src='/projects/dbfplane/dbfteamphoto.jpg'
                    alt='team photo of members who competed'
                    width={500}
                    height={0}
                    unoptimized
                    >
                </Image>
                <Image
                    src='/projects/dbfplane/parked.jpg'
                    alt='competition plane parked on the grass'
                    width={500}
                    height={0}
                >
                </Image>
            </div>

            <p className="my-5">During my brief time as president this year, I have already increased funding by $5,000 and doubled membership by bolstering recruitment. The team is very excited to conquer the competition with our extra experience, funding, and man-power!</p>
        </>
    )
}

function Competition2025() {
    return (
        <>
            <h2 id="competition2025" className="text-3xl mt-10">Competition 2025</h2>
            
            <p>This year, though the competition rules have only just been released, we have been hard at work. Over the summer I set up weekly meetings to discuss logistics on budgeting, financing, recruitment, materials, and design. Under my leadership, we have already <span className="font-semibold">over tripled our budget</span> and <span className="font-semibold">doubled our active member count</span>. We are ecstatic with the growth that has occured and are ready to take on the competition!</p>

            <Stats data={[
                {label:"Budget", value:"$5,200"},
                {label:"Members", value:"20"},
            ]} />
        </>
    )
}

function Competition2024() {
    return (
        <>
            <h2 id="competition2024" className="text-3xl mt-10">Competition 2024</h2>

            <p>The club didn&apos;t exist in 2022. The leaders had graduated and neglected setting up a line of succession, causing the club to quietly disband. Though the leadership fell through, the members still kept their fire for designing, building, and flyling planes. Some of the members revived the club after the one year gap to form the new DBF team to compete in 2024! This wasn&apos;t without hardship, however, as with the leaders left all of the knowledge on how to run a club and even how to fully build an airplane. These were vitally important to the club&apos;s survival, but are so often ignored by typical members. The new leaders had to re-learn the hard way how to recruit, acquire funding, </p>


            <p>Despite these setbacks, the team was hard-working and highly motivated to learn. We managed to get our plane funcitoning in time for the competition in Wichita, Kansass where we went on to compete, beating out the majority of the competition. Below are some of the stats for the 2024 competition year.</p>

            <Stats data={[
                {label:"Budget", value:"$1,500"},
                {label:"Members", value:"9"},
                {label:"Out of 149 Teams", value:"67th"}
            ]} />

            <p>Especially considering the small team size and low budget solely consisting of leftover money from a previous year, we were enthralled with our performance. Especially because our peers from different schools had teams with 20x our funding and 3x our team size.</p>
        </>
    )
}
export default function DbfPlane() {
    return (
        <div className="flex flex-col w-full">
            <SeeMore />
            <h2 id="contents" className="text-3xl mt-10">Contents</h2>
            <ul className="text-xl">
                <li className="relative list-disc left-8"><button onClick={() => document.querySelector('#planemodel2024')?.scrollIntoView()}>Plane Model 2024</button></li>
                <li className="relative list-disc left-8"><button onClick={() => document.querySelector('#overview')?.scrollIntoView()}>Overview</button></li>
                <li className="relative list-disc left-8"><button onClick={() => document.querySelector('#competition2025')?.scrollIntoView()}>Competition 2025</button></li>
                <li className="relative list-disc left-8"><button onClick={() => document.querySelector('#competition2024')?.scrollIntoView()}>Competition 2024</button></li>
            </ul>
            <PlaneModel2024 />
            <Overview />
            <Competition2025 />
            <Competition2024 />
            <div className="h-[25vh]"></div>
        </div>
    )
}
