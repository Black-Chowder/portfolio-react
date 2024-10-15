import ExternalLinks from "@/components/external-links";
import Image from "next/image";
import Link from "next/link";
import { TbCode, TbDeviceGamepad } from "react-icons/tb";
import { Button } from './../../../../components/ui/button';

function SeeMore() {
    return (
        <div id="seemore" className="w-screen self-center mt-8">
            <ExternalLinks header="See More" links= {
                [
                    { href: 'https://github.com/Black-Chowder/lukewarm-snake', text: 'Source Code (on GitHub)', icon: <TbCode/>},
                    { href: 'https://black-chowder.itch.io/superhot-snake', text: 'Download & Play (on Itch.io)', icon: <TbDeviceGamepad/>},
                ]
            }/>
        </div>
    )
}
  
function Overview() {
    return (
        <>
            <h2 id="overview" className="text-3xl mt-10">Overview</h2>

            <p className="my-5">Superhot Snake is the video game I programmed. The gameplay consists of a player-controlled snake which can control time according to how fast it moves.  The player&apos;s goal in a level is to eat as many tadpoles as possible without being hit by the obstacles. If the snake&apos;s tail touches an obstacle, it will explode and you&apos;ll have to restart.</p>

            <div className="flex flex-col w-full items-center gap-5">
                <Image
                    src="/projects/superhotsnake/gameplay1.gif"
                    alt='Superhot Snake Gameplay'
                    width={500}
                    height={0}
                    unoptimized
                />
            </div>

            <p className="my-5">This project took a few months however this was during school so the majority of the time was spent juggling working on the project versus school work. The project was only meant to be a short, fun game where I finish every aspect (including often neglected parts, i.e. menus, sound effects, and visual effects). Despite the small scope, there were many opportunities to learn new technologies and master new aspects of familiar ones.  Here's a basic overview of the technology used in this project:</p>
            <ul>
                <li className="relative list-disc left-8">MonoGame XNA - A C# .NET Framework for graphics, audio, input, and other low-level functionality.</li>
                <li className="relative list-disc left-8">HLSL - The shader language of choice for effects implemented on the GPU</li>
                <li className="relative list-disc left-8">Visual Studio Community - My IDE of choice when coding in C# in large part due to its ease of building the executable and dealing with importing libraries.</li>
            </ul>

            <p className="my-5">You can view the source code as well as download and play the game through the links below</p>

            <div className="flex flex-row flex-wrap justify-center w-2/3 gap-5 md:gap-15 my-8 self-center">
                <div className="flex align-middle w-1/4 min-w-fit">
                    <Button className="w-full h-full p-4 -skew-x-[20deg]" variant="outline">
                        <Link className="text-xl text-nowrap flex flex-row items-center gap-1 skew-x-[20deg]" href={'https://github.com/Black-Chowder/lukewarm-snake'}>{<TbCode/>}{'Source Code (on GitHub)'}</Link>
                    </Button>
                </div>
                <div className="flex align-middle w-1/4 min-w-fit">
                    <Button className="w-full h-full p-4 -skew-x-[20deg]" variant="outline">
                        <Link className="text-xl text-nowrap flex flex-row items-center gap-1 skew-x-[20deg]" href={'https://black-chowder.itch.io/superhot-snake'}>{<TbDeviceGamepad/>}{'Download & Play (on Itch.io)'}</Link>
                    </Button>
                </div>
            </div>
        </>
    )
}

function Journey() {
    return (
        <>
            <h2 id="journey" className="text-3xl mt-10">How It Was Made</h2>

            <p className="my-5">This project started as a way to dip my toes into effects, shaders and parallel programming on the GPU.  As such, I challenged myself to use as few textures as possible.</p>
            
            <h3 className="text-2xl mt-10">The Water Background</h3>

            <p className="my-5">To start, I implemented a water shader algorithm on the GPU and but modified such that I could control time since that would be a central mechanic in the game</p>

            <div className="flex flex-col w-full items-center gap-5">
                <Image
                    src="/projects/superhotsnake/waterrippleshader/shadertiming.gif"
                    alt='Water shader effect with timing implemented'
                    width={500}
                    height={0}
                    unoptimized
                />
            </div>

            <p className="my-5">This algorithm is a modified implementation of a 2d water algoirthm but modified to work on the GPU and allow for time manipulation.  The original explanation for this algorithm can be found <a className="text-blue-400" href="https://web.archive.org/web/20160418004149/http://freespace.virgin.net/hugo.elias/graphics/x_water.htm">here</a>.</p>
            <p className="my-5">Once implemented, I could create an influence buffer to draw anything that stirs water (such as the snake) as a pure white texture that would then ripple out and interact with pre-existing waves.</p>
            <div className="flex flex-col w-full items-center gap-5">
                <Image
                    src="/projects/superhotsnake/waterrippleshader/ingame.gif"
                    alt='Superhot Snake Gameplay'
                    width={500}
                    height={0}
                    unoptimized
                />
            </div>

            <h3 className="text-2xl mt-10">The Tadpoles</h3>
            <p className="my-5">Yup.  Not even the tadpoles have textures.  I use multiple effects to create a wobbling semi-transparent ellipse on top of a circular body and gave it an outline.</p>
            <div className="flex flex-col w-full items-center gap-5">
                <Image
                    src="/projects/superhotsnake/waterrippleshader/Food Shader Process.gif"
                    alt='Superhot Snake Gameplay'
                    width={500}
                    height={0}
                    unoptimized
                />
            </div>
            <p className="my-5">To explain what's going on briefly, here are the effects as they appear:</p>
            <ul className="mx-10">
                <li className="list-decimal">Horizontal Gradient</li>
                <li className="list-decimal">Horizontal sine wave</li>
                <li className="list-decimal">Horizontal sine wave multiplied by the horizontal gradient</li>
                <li className="list-decimal">An ellipse</li>
                <li className="list-decimal">An ellipse being offset by the value of the horizontal sine wave multiplied by the horizontal gradient</li>
                <li className="list-decimal">A smaller, darker ellipse being placed on top of the already existing ellipse</li>
                <li className="list-decimal">The tadpole appearing in game with an outline drawn around it</li>
            </ul>

            <h3 className="text-2xl mt-10">The Snake</h3>
            <p className="my-5">The snake&apos;s body and eyes are completely procedurally generated.  Its body is made up of circles that shrink as it gets closer to the tail.  A shadow effect is applied to these circles to give them more depth.  The eyes are lines within circles and rotate to look at the food.  The only texture used in the game is that of the snake&apos;s head and the bullet&apos;s body however they are just used as masks for their general shape.  The texture&apos;s depth, color and outline are procedurally added.</p>
            <div className="flex flex-row w-full items-center gap-5">
                <Image
                    src="/projects/superhotsnake/SnakeHead.png"
                    alt='Snake head mask'
                    width={500}
                    height={0}
                    unoptimized
                />
                <Image
                    src="/projects/superhotsnake/Snake AI.gif"
                    alt='Snake eating food'
                    width={500}
                    height={0}
                    unoptimized
                />
            </div>
        </>
    )
}

export default function SuperhotSnake() {
    return (
        <div className="flex flex-col w-full">
            <h2 id="contents" className="text-3xl mt-10">Contents</h2>
            <ul className="text-xl">
                <li className="relative list-disc left-8"><button onClick={() => document.querySelector('#overview')?.scrollIntoView()}>Overview</button></li>
                <li className="relative list-disc left-8"><button onClick={() => document.querySelector('#journey')?.scrollIntoView()}>How It Was Made</button></li>
                <li className="relative list-disc left-8"><button onClick={() => document.querySelector('#seemore')?.scrollIntoView()}>See More</button></li>
            </ul>
            <Overview />
            <Journey />
            <SeeMore />
        </div>
    )
}
