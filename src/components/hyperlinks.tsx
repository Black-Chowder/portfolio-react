import { HyperlinkData } from "@/lib/types";
import Link from "next/link";
import { Button } from "./ui/button";

function Hyperlink({link}:{link: HyperlinkData}) {
    return (
        <div className="flex align-middle w-1/4 min-w-fit">
            <Button className="w-full h-full" variant="outline">
                <Link className="text-xl text-nowrap flex flex-row items-center gap-1" href={link.href}>{link.icon}{link.text}</Link>
            </Button>
        </div>
    )
}

export default function Hyperlinks({links}:{links: HyperlinkData[]}) {
    return (
        <div className="flex flex-row flex-wrap justify-center w-2/3 gap-5 md:gap-20 my-8">
            { links.map(link => <Hyperlink key={link.href} link={link}/>) }
        </div>
    )
}