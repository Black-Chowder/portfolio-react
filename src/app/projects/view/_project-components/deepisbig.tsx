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
                    { href: 'https://black-chowder.itch.io/deep-is-big', text: 'Download & Play (on Itch.io)', icon: <TbDeviceGamepad/>},
                ]
            }/>
        </div>
    )
}
  
function Overview() {
    return (
        <>
            <h2 id="overview" className="text-3xl mt-10">Overview</h2>

            <p className="my-5">Deep Is Big is a videogame my younger brother and I created as our submission to the GMTK 2024 Game Jam; the itch.io&#39;s largest annual game jam.  The theme was &#34;Built to Scale&#34;.  In this game, the player is in a submarine and must catch as many fish as possible before the time runs out, but the fish get bigger the deeper you go.  In the end each fish is worth its weight in points and you have to get as high a score as possible.</p>

            <div className="flex flex-col w-full items-center gap-5">
                <Image
                    src="/projects/deepisbig/GMTK2024.gif"
                    alt='Superhot Snake Gameplay'
                    width={500}
                    height={0}
                    unoptimized
                />
            </div>

            <p className="my-5">This game won top 22% in style competing against 7,604 other entries</p>

            <p className="my-5">Below is a list of the technology and tools used to develop this game:</p>
            <ul>
                <li className="relative list-disc left-8">Unity - Our game engine of choice to handle physics, lighting, sound and basic functionality</li>
                <li className="relative list-disc left-8">Blender - The 3D modeling software used to design every model seen in game</li>
                <li className="relative list-disc left-8">Figma - A design tool I used to create the 2D assets featured in game</li>
                <li className="relative list-disc left-8">Visual Studio Community - My IDE of choice when coding in C# in large part due to its ease of building the executable and dealing with importing libraries.</li>
            </ul>
        </>
    )
}

function HowToPlay() {
    return (
        <>
            <h2 id="howtoplay" className="text-3xl mt-10">How To Play</h2>

            <p className="my-5">Catch as many fish as possible before time runs out</p>
            <p className="my-5">Make sure the line doesn&apos;t break</p>
            <p className="my-5">Remember: the deeper you are, the bigger they get!</p>
            <br/>
            <ul>
                <li className="relative list-disc left-8">SPACE/CTRL --&gt; Throttle/Reverse</li>
                <li className="relative list-disc left-8">LEFT CLICK --&gt; Shoot Harpoon</li>
                <li className="relative list-disc left-8">SPAM RIGHT CLICK --&gt; Reel In Harpoon</li>
                <li className="relative list-disc left-8">ESC --&gt; Quit</li>
            </ul>

            <div className="flex flex-row flex-wrap justify-center w-2/3 gap-5 md:gap-15 my-8 self-center">
                <div className="flex align-middle w-1/4 min-w-fit">
                    <Button className="w-full h-full p-4 -skew-x-[20deg]" variant="outline">
                        <Link className="text-xl text-nowrap flex flex-row items-center gap-1 skew-x-[20deg]" href={'https://black-chowder.itch.io/deep-is-big'}>{<TbDeviceGamepad/>}{'Download & Play on Itch.io'}</Link>
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

            <h3 className="text-2xl mt-10">Competition Structure</h3>

            <p className="my-5">Every year the YouTube channel GMTK (Game Maker&#39;s Tool Kit) hosts a 48 hour game jam on itch.io where participants have to create a video game centered around a theme within 48 hours.  My younger brother and I have been competing in this game jam since 2021, every year creating a small game within 48 hours.  This year was slightly different as the host increased the amount of time allotted to 4 days.  This gave us more time which enabled us to work in 3D while all our other submissions have been in 2D.</p>
            <p className="my-5">This year the theme was &#34;Built to Scale&#34;</p>
            <div className="flex flex-col w-full items-center gap-5">
                <Image
                    src="/projects/deepisbig/BuiltToScaleTweet.PNG"
                    alt='Theme Anouncement Screenshot'
                    width={500}
                    height={0}
                />
            </div>

            <h3 className="text-2xl my-10">Development Screenshots</h3>

            <div className="flex flex-row w-full items-center gap-5">
                <Image
                    src="/projects/deepisbig/UnityScreenshot.PNG"
                    alt='Unity Screenshot'
                    width={500}
                    height={0}
                    unoptimized
                />
                <Image
                    src="/projects/deepisbig/UIDev.png"
                    alt='UI Screenshot'
                    width={500}
                    height={0}
                    unoptimized
                />
            </div>

            <div className="flex flex-row w-full items-center gap-5">
                <Image
                    src="/projects/deepisbig/FishHull.png"
                    alt='Fish Hull Screenshot'
                    width={500}
                    height={0}
                    unoptimized
                />
                <Image
                    src="/projects/deepisbig/AnglerFish.png"
                    alt='Submarine Screenshot'
                    width={500}
                    height={0}
                    unoptimized
                />
            </div>

            <div className="flex flex-row w-full items-center gap-5">
                <Image
                    src="/projects/deepisbig/Submarine.PNG"
                    alt='Beta Submarine'
                    width={500}
                    height={0}
                    unoptimized
                />
                <Image
                    src="/projects/deepisbig/DeepIsBig1.png"
                    alt='Unity Screenshot'
                    width={500}
                    height={0}
                    unoptimized
                />
            </div>
        </>
    )
}

export default function DeepIsBig() {
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
