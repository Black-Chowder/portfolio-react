import { StatData } from "@/lib/types";


function Stat({ stat }: {stat: StatData}) {
    return (
        <div className="flex flex-col items-center h-min">
            <p className="text-5xl text-primary">{stat.value}</p>
            <p className="text-lg">{stat.label}</p>
        </div>
    )
}

export default function Stats({ data }: {data: StatData[]}) {
    const stats = data.map(d => <Stat stat={d} key={d.label} />)
    return (
        <div className="flex flex-col md:flex-row justify-evenly w-full self-center p-8">
            { stats }
        </div>
    )
}