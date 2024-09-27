import { ContactData } from "@/lib/types";
import Link from "next/link";
import { Button } from "./ui/button";

function ExternalLinkButton({link}:{link: ContactData}) {
    return (
        <div className="flex align-middle w-1/4 min-w-fit">
            <Button className="w-full h-full p-4 -skew-x-[20deg]" variant="outline">
                <Link className="text-xl text-nowrap flex flex-row items-center gap-1 skew-x-[20deg]" href={link.href}>{link.icon}{link.text}</Link>
            </Button>
        </div>
    )
}

export default function ExternalLinks({ header, links } : { header: string, links: ContactData[] }) {
    return (
        <div className="flex flex-col justify-center items-center w-screen self-center backdrop-blur-sm py-10 border-y-2 border-solid border-border">
            <p className="text-4xl">
                { header }
            </p>
            <div className="flex flex-row flex-wrap justify-center w-2/3 gap-5 md:gap-15 my-8">
                { links.map(link => <ExternalLinkButton key={link.href} link={link}/>) }
            </div>
        </div>
    )
}