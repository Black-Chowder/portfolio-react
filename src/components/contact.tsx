import { ContactData } from "@/lib/types";
import Link from "next/link";
import { Button } from "./ui/button";
import { TbMail, TbPhone, TbBrandLinkedin, TbBrandGithub, TbBrandItch } from "react-icons/tb";

function ContactPoint({link}:{link: ContactData}) {
    return (
        <div className="flex align-middle w-1/4 min-w-fit">
            <Button className="w-full h-full p-4 -skew-x-[20deg]" variant="outline">
                <Link className="text-xl text-nowrap flex flex-row items-center gap-1 skew-x-[20deg]" href={link.href}>{link.icon}{link.text}</Link>
            </Button>
        </div>
    )
}

export default function Contact() {
    const links: ContactData[] = [
        { href: 'mailto:trevoroblack@gmail.com', text: 'trevoroblack@gmail.com', icon: <TbMail/>},
        { href: 'tel:+19174288262', text: '917-428-8262', icon: <TbPhone/>},
        { href: 'https://linkedin.com/trevoroblack', text: 'LinkedIn', icon: <TbBrandLinkedin/> },
        { href: 'https://github.com/TobBot2', text: 'GitHub', icon: <TbBrandGithub/>},
        { href: 'https://tobbot2.itch.io', text: 'Itch.io', icon: <TbBrandItch/>},
    ]
    return (
        <div className="flex flex-col justify-center items-center w-screen backdrop-blur-sm py-10 border-y-2 border-solid border-border">
            <p className="text-4xl">
                Contact Me
            </p>
            <div className="flex flex-row flex-wrap justify-center w-2/3 gap-5 md:gap-15 my-8">
                { links.map(link => <ContactPoint key={link.href} link={link}/>) }
            </div>
        </div>
    )
}