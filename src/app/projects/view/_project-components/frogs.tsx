import ExternalLinks from "@/components/external-links";
import Image from "next/image";
import Link from "next/link";
import { TbCode, TbDeviceGamepad } from "react-icons/tb";
import { Button } from '../../../../components/ui/button';

function SeeMore() {
    return (
        <div id="seemore" className="w-screen self-center mt-8">
            <ExternalLinks header="See More" links= {
                [
                    { href: 'https://github.com/Black-Chowder/Frogs', text: 'Source Code (on GitHub)', icon: <TbCode/>},
                    { href: 'https://black-chowder.itch.io/frogs', text: 'Download & Play (on Itch.io)', icon: <TbDeviceGamepad/>},
                ]
            }/>
        </div>
    )
}
  
function Overview() {
    return (
        <>
            <h2 id="overview" className="text-3xl mt-10">Frogs</h2>

            <p className="my-5">Frogs is a videogame I made using a custom 2D physics engine.  I&apos;d been working on this engine for some time but this was the first game I implemented it in.  This game was a submission to one of my university&#39;s game jams, the theme being &#34;Frogs!&#34; which meant I was tasked with creating a game about frogs!  This game is a platformer in which you are a frog and must collect as many flies as possible by bouncing around and using your tongue to swing off of platforms.</p>

            <div className="flex flex-row w-full items-center gap-5">
                <Image
                    src="/projects/frogs/screenshot1.jpg"
                    alt='Frogs! Screenshot 1'
                    width={500}
                    height={0}
                />
                <Image
                    src="/projects/frogs/screenshot3.jpg"
                    alt='Frogs! Screenshot 2'
                    width={500}
                    height={0}
                />
            </div>

            <p className="my-5">Below is a list of the technology and tools used to develop this game:</p>
            <ul>
                <li className="relative list-disc left-8">MonoGame XNA - A C# .NET Framework for graphics, audio, input, and other low-level functionality.</li>
                <li className="relative list-disc left-8">Black Magic Framework - A C# 2D physics framework I created to handle all physics processes</li>
                <li className="relative list-disc left-8">Visual Studio Community - My IDE of choice when coding in C# in large part due to its ease of building the executable and dealing with importing libraries.</li>
            </ul>
        </>
    )
}

function HowToPlay() {
    return (
        <>
            <h2 id="howtoplay" className="text-3xl mt-10">How To Play</h2>

            <div className="flex flex-col w-full items-center gap-5">
                <Image
                    src="/projects/frogs/How To Play.png"
                    alt='How to play banner'
                    width={500}
                    height={0}
                />
            </div>


            <p className="my-5">Swing and jump your way around the world to eat all the flies in the area!</p>
            <p className="my-5">Drag and pull back with the left mouse button to make your frog leap.</p>
            <p className="my-5">Right click between yourself and a platform to shoot out your tongue like a grappling hook!</p>

            <div className="flex flex-row flex-wrap justify-center w-2/3 gap-5 md:gap-15 my-8 self-center">
                <div className="flex align-middle w-1/4 min-w-fit">
                    <Button className="w-full h-full p-4 -skew-x-[20deg]" variant="outline">
                        <Link className="text-xl text-nowrap flex flex-row items-center gap-1 skew-x-[20deg]" href={'https://black-chowder.itch.io/frogs'}>{<TbDeviceGamepad/>}{'Download & Play on Itch.io'}</Link>
                    </Button>
                </div>
            </div>
        </>
    )
}

function Journey() {
    return (
        <>
            <h2 id="journey" className="text-3xl mt-10">Journey</h2>

            <p className="my-5">As stated previously, this game uses my own physics engine I made from scratch.  After fiddling around with static body collision, I found that any technique I implemeneted had trouble with fast-moving objects where an object ran the risk of phasing through walls if it were moving fast enough.  To fix thism, a ray-based implementation was necessary.  Most pre-built engines call this a &#34;continuous&#34; calculation method because it enables those fast-moving objects to collide with anything with increased accuracy at the cost of efficiency.</p>
            <p className="my-5">This game was the first game I published to itch as part of my University&apos;s game jam with the theme Frogs</p>
            <p className="my-5">My original rigidbody system for the submission to the game jam did not use a ray-based approach but the updated system felt so much better than the previous system I went back and implemented it into Frogs!  Thanks to Sebastian Lague for making a wonderful explanation on Ray Marching</p>
            <p className="my-5">https://youtu.be/Cp5WWtMoeKg?si=gi5FRZVXT96Qji8s</p>


            <h3 className="text-2xl my-10">Journal Screenshots</h3>
            <p className="my-5">I want to provide some screenshots of my programming journal from when I was developing this game.  To be frank, reading through my old thoughts like this is a bit embarrassing but maybe someone will find it interesting.</p>

            <div className="flex flex-row w-full items-center gap-5">
                <Image
                    src="/projects/frogs/journal photos/IMG_2248.png"
                    alt='Journal Image'
                    width={500}
                    height={0}
                    unoptimized
                />
                <Image
                    src="/projects/frogs/journal photos/IMG_2249.png"
                    alt='Journal Image'
                    width={500}
                    height={0}
                    unoptimized
                />
            </div>

            <div className="flex flex-row w-full items-center gap-5">
                <Image
                    src="/projects/frogs/journal photos/IMG_2250.png"
                    alt='Journal Image'
                    width={500}
                    height={0}
                    unoptimized
                />
                <Image
                    src="/projects/frogs/journal photos/IMG_2251.png"
                    alt='Journal Image'
                    width={500}
                    height={0}
                    unoptimized
                />
            </div>

            <div className="flex flex-row w-full items-center gap-5">
                <Image
                    src="/projects/frogs/journal photos/IMG_2252.png"
                    alt='Journal Image'
                    width={500}
                    height={0}
                    unoptimized
                />
                <Image
                    src="/projects/frogs/journal photos/IMG_2253.png"
                    alt='Journal Image'
                    width={500}
                    height={0}
                    unoptimized
                />
            </div>

            <div className="flex flex-row w-full items-center gap-5">
                <Image
                    src="/projects/frogs/journal photos/IMG_2254.png"
                    alt='Journal Image'
                    width={500}
                    height={0}
                    unoptimized
                />
                <Image
                    src="/projects/frogs/journal photos/IMG_2255.png"
                    alt='Journal Image'
                    width={500}
                    height={0}
                    unoptimized
                />
            </div>

            <div className="flex flex-row w-full items-center gap-5">
                <Image
                    src="/projects/frogs/journal photos/IMG_2256.png"
                    alt='Journal Image'
                    width={500}
                    height={0}
                    unoptimized
                />
                <Image
                    src="/projects/frogs/journal photos/IMG_2257.png"
                    alt='Journal Image'
                    width={500}
                    height={0}
                    unoptimized
                />
            </div>
        </>
    )
}

export default function Frogs() {
    return (
        <div className="flex flex-col w-full">
            <h2 id="contents" className="text-3xl mt-10">Contents</h2>
            <ul className="text-xl">
                <li className="relative list-disc left-8"><button onClick={() => document.querySelector('#overview')?.scrollIntoView()}>Overview</button></li>
                <li className="relative list-disc left-8"><button onClick={() => document.querySelector('#howtoplay')?.scrollIntoView()}>How To Play</button></li>
                <li className="relative list-disc left-8"><button onClick={() => document.querySelector('#journey')?.scrollIntoView()}>Journey</button></li>
                <li className="relative list-disc left-8"><button onClick={() => document.querySelector('#seemore')?.scrollIntoView()}>See More</button></li>
            </ul>
            <Overview />
            <HowToPlay />
            <Journey />
            <SeeMore />
        </div>
    )
}
