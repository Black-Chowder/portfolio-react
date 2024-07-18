import Image from "next/image";
import Link from "next/link";

function SeeMore() {
    return (
        <>
            {/* TODO: add links to download, see src code, etc. */}
        </>
    )
}

function Overview() {
    return (
        <>
            <h2 id="overview" className="text-3xl mt-10">Overview</h2>

            <p className="my-5">Tail Smash! is the video game I programmed in one month. The gameplay consists of a player-controlled car which can accelerate forward and backward, as well as steer left and right. Attached to the car is a long ball and chain which can be flung around when the car takes sharp turns. Each level is a single screen which consists of targets and obstacles. The player&apos;s goal in a level is to hit all the targets as quickly as possible without having the car touch any obstacles. If the car touches an obstacle, it will restart the level. The game is fast paced with levels typically lasting five seconds, though an average player will require many attempts to beat a level. Respawning is instantaneous, and once a level is beaten, the next one is automatically loaded. This keeps the player engaged in constant action.</p>

            <div className="flex flex-col w-full items-center gap-5">
                <Image
                    src='/projects/cppgameengine/TailSmashNuisance.gif'
                    alt='gif of some gameplay'
                    width={500}
                    height={0}
                    >
                </Image>
                <Image
                    src='/projects/cppgameengine/TailSmashAsteroids.png'
                    alt='iamge of some gameplay'
                    width={500}
                    height={0}
                >
                </Image>
            </div>

            <p className="my-5">This project took about a month, though only a week of it was during winter break, so the majority of the time was spent juggling working on the project versus school work. The project was only meant to be a short, fun game where I finish every aspect (including often neglected parts, i.e. menus, sound effects, and visual effects). Despite the small scope, there were many opportunities to learn new technologies and master new aspects of familiar ones. A more complete list of technologies used along with explanations on their usage can be found in the technical report, but the most important ones used were:</p>
            <ul>
                <li className="relative list-disc left-8">SFML - Framework for graphics, audio, input, and other low-level functionality.</li>
                <li className="relative list-disc left-8">Dear ImGui - Lightweight library for simple menus (i.e. buttons, sliders, etc.).</li>
                <li className="relative list-disc left-8">Visual Studio Community - My IDE of choice when coding in C/C++ in large part due to its ease of building the executable and dealing with importing libraries.</li>
            </ul>
        </>
    )
}

function Report() {
    return (
        <>
            <h2 id="report" className="text-3xl mt-10">Technical Report</h2>
            <p className="my-5">Check out the full technical report in the pdf below, detailing aspects of the project such as the UML/inheritance scheme, game loop, physics, and more.</p>
            
            <object data="/projects/cppgameengine/tailsmashreport.pdf" type="application/pdf" className="flex flex-auto h-screen">
                <p>
                    Resume PDF failed to load. Try
                    <Link href="/projects/cppgameengine/tailsmashreport.pdf"> clicking here instead! </Link>
                    or email me at trevoroblack@gmail.com
                </p>
            </object>
        </>
    )
}

function Journey() {
    return (
        <>
            <h2 id="journey" className="text-3xl mt-10">The Journey</h2>

            <div className="flex flex-col md:flex-row">
                <p className="my-5 mr-5">I was in the airport with my brother, looking forward to work on my survival game during our 8 hour flight, when he asked me if I wanted to do an airborne game jam. I reluctantly agreed as a game jam in the sky as well as getting a quick and simple game finished were too appealing to pass up. Immediately, I started thinking of ideas. I had recently coded a physically based 3D car controller demo in Unity, so I was particularly looking for car-related inspiration. Looking out the window, I saw some cars with chained carriages behind them to carry luggage. I thought it would be fun to drift around, whipping all the carriages around to hit things. Thus, Tail Smash was born.</p>

                <Image
                    src="/projects/cppgameengine/chainedcarriages.jpg"
                    alt="chained carriages cart at airport"
                    width={500}
                    height={0}
                    className="h-80 object-contain my-5"
                    >
                </Image>
            </div>

            <p className="my-3">As soon as the seat belt sign turned off, I opened my laptop and started coding. With a movie break and meals, my total time spent on the project by the end of the jam was about 5 horus. I had finished the core driving mechanic and hitting targets with your tail. While not quite a complete game, missing any sort of polish, menus, scoring, and only having two levels, the game was still enjoyable. After the jam, I figured I could just wrap this up in a few days and get back to working on my previous survival game. How hard could polish, menus, more levels be?</p>

            <p className="my-3">It turns out, very hard. In previous projects and game jams, scope creep has always been a looming threat. Knowing this, I decided to not add any extra features to my game. Though it sounds easy to not do work, ideas were constantly flowing in that I wanted to try out. A multitude of abilities, support for larger levels, and an online arena were just a few of the features I wanted to add, but I knew that would spiral into a game that I would never finish. Even without implementing those features, the game still took far longer than expected to finish. Because so many of my projects get abandoned before I add polish to them, I didn&apos;t have much practice in many parts of game making - most notably menus and shaders. Although I didn&apos;t want to add too many features, I did allow myself to add shaders as I considered it a part of polishing, which was an aspect that I sorely needed more practice in. I found glsl to be more or less easy to pick up and implement for my purposes, so it wasn&apos;t too much of a time suck in the end anyway. For the menus, I had never implemented a GUI in C++, so after reading up on Dear ImGui, I got some quick and dirty (but fully functional) menus - complete with a level select, settings, and even credits.</p>

            <p className="my-3">And just like that, a month had passed and my game was finished. I say &ldquo;just like that&rdquo; in hindsight, but progress felt slow considering my initial goal. As mentioned before, I left many features out that could have made the game a full steam releasable game, but the codebase got a bit too messy towards the end as I was just hacking things together to get it done. I knew that if I were to add all these other features, I would have to refactor a lot of code anyway. In the future, I expect I will remake the game using SDL2 rather than SFML, and develop the game with all my features in mind from the get-go, but for now I&apos;m ready to move on to other projects.</p>
        </>
    )
}

export default function CppGameEngine() {
    return (
        <div className="flex flex-col w-full">
            <SeeMore />
            <h2 id="contents" className="text-3xl mt-10">Contents</h2>
            <ul className="text-xl">
                <li className="relative list-disc left-8"><button onClick={() => document.querySelector('#overview')?.scrollIntoView()}>Overview</button></li>
                <li className="relative list-disc left-8"><button onClick={() => document.querySelector('#report')?.scrollIntoView()}>Technical Report</button></li>
                <li className="relative list-disc left-8"><button onClick={() => document.querySelector('#journey')?.scrollIntoView()}>Journey</button></li>
            </ul>
            <Overview />
            <Report />
            <Journey />
        </div>
    )
}
