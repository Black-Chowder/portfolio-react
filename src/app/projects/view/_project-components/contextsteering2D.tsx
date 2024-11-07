import ExternalLinks from "@/components/external-links";
import Image from "next/image";
import Link from "next/link";
import { TbCode, TbDeviceGamepad } from "react-icons/tb";

function SeeMore() {
    return (
        <div id="seemore" className="w-screen self-center mt-8">
            <ExternalLinks header="See More" links= {
                [
                    { href: 'https://github.com/Black-Chowder/ContextSteering2D', text: 'Source Code (on GitHub)', icon: <TbCode/>},
                ]
            }/>
        </div>
    )
}

function Overview() {
    return (
        <>
            <h2 id="overview" className="text-3xl mt-10">Overview</h2>

            <p className="my-5">ContextSteering2D is a library to enable easy implementation of context-based steering behaviors.  This class calculates the most desired angle to travel in based on given context information in the form of attraction and repulsion vectors.</p>

            <div className="flex flex-col w-full items-center gap-5">
                <Image
                    src='/projects/contextsteering2d/Attraction2.jpg'
                    alt='Context steering visualization'
                    width={500}
                    height={0}
                    unoptimized
                    >
                </Image>
            </div>

            <p className="my-5">Much of the code was inspired from this article:</p>
            <a href="http://www.gameaipro.com/GameAIPro2/GameAIPro2_Chapter18_Context_Steering_Behavior-Driven_Steering_at_the_Macro_Scale.pdf">http://www.gameaipro.com/GameAIPro2/GameAIPro2_Chapter18_Context_Steering_Behavior-Driven_Steering_at_the_Macro_Scale.pdf</a>
            <br></br>
            <p className="my-5">Here&apos;s an overview of some of the technology used in this project:</p>
            <ul>
                <li className="relative list-disc left-8">MonoGame XNA - Framework for graphics and standard for classes such as vectors</li>
                <li className="relative list-disc left-8">Visual Studio Community - My IDE of choice when coding in C# in large part due to its ease of building the executable and dealing with importing libraries.</li>
            </ul>
        </>
    )
}

function UserGuide() {
    return (
        <>
            <h2 id="report" className="text-3xl mt-10">User Guide</h2>
            
            <h3 className="text-2xl mt-10">Implementing in your project</h3>
            <p className="my-5">The main file is called ContextSteering.cs and is located in the main directory</p>
            
            <h3 className="text-2xl mt-10">Using ContextSteering2D</h3>
            <h4 className="text-xl mt-10">Constructor</h4>
            <p className="my-5">The constructor takes an x and y position as floats</p>
            <code>ContextSteering cts = new ContextSteering(x, y);</code>
            <p className="my-5">These describe the center of the context map.  All attraction and repulsion vertices will be compared to the context map relative to this point</p>
            <p className="my-5">It can be changed after construction</p>
            <code>cts.x = 100f;<br/>cts.y = 100f;</code>

            <h3 className="text-2xl mt-10">Adding Context Vectors</h3>
            <p className="my-5">There are generally two types of context vectors.  Attraction and repulsion vectors.</p>
            <p className="my-5">They are both the same object, only with a boolean to change its attraction or repulsion status</p>
            <code>
                # Constructs attraction vector<br/>
                ContextVector acv = new ContextVector(x, y, true);<br/>
                <br/>
                # Constructs repulsion vector<br/>
                ContextVector rcv = new ContextVector(x, y, false);
            </code>
            <p className="my-5">They have different parameters that can be edited after construction</p>
            <code>
                double cv.strength;<br/>
                bool cv.isAttraction;<br/>
                float cv.x;<br/>
                float cv.y;
            </code>
            <p className="my-5">The strength parameter changes how much the vector is weighed compared to other vectors.  Increasing its strength increases its attraction/repulsion</p>
            <p className="my-5">isAttraction can be used to edit if this vector is an attraction or repulsion vector</p>
            <p className="my-5">These vectors once constructed can be added to the context steering class so they are accounted for in calculations</p>
            <code>
                ContextVector cv = new ContextVector(x, y, true);<br/>
                cts.AddVector(cv);<br/>
                cts.DeleteVector(cv);<br/>
                cts.ClearVectors();
            </code>

            <p className="my-5">The strength parameter changes how much this vector is weighed compared to other vectors.  Increasing its strength increases its attraction/repulsion</p>
            <p className="my-5">isAttraction can be used to edit if this vector is an attraction or repulsion vector</p>
            <p className="my-5">These vectors, once constructed, can be added to the context steering class so they are accounted for in calculations</p>
            
            <code>
                ContextVector cv = new ContextVectr(x, y, true);<br/>
                cts.AddVector2(cv);<br/>
                cts.DeleteVector(cv);<br/>
                cts.ClearVectors();
            </code>

            <p className="my-5">You can also set the context vectors to be accounted for equal to a given list of context vectors</p>

            <code>
                List&lt;ContextVector&gt; contextVectors = new List&lt;ContextVector&gt;();<br/>
                cts.SetVectors(contextVectors);
            </code>

            <p className="my-5">This method stores the context method by reference, so changing the list externally also changes the vectors accounted for</p>

            <h4 className="text-xl mt-10">Update</h4>
            <p className="my-5">The method UpdateMap() is used to update the context map in accordance to the context vectors given</p>
            <code>
                cts.UpdateMap();
            </code>
            <p className="my-5">This method returns an array of doubles, but it is recommended that this is ignored</p>
            <p className="my-5">Getting the most desired angle should be done by calling teh angle after the map is updated</p>
            <code>
                cts.angle;
            </code>

            <h4 className="text-xl mt-10">Other Options</h4>

            <p className="my-5">The context map contains some parameters taht can be changed to your specifications</p>
            <code>
                int resolution; //Default value is 16
            </code>
            <p className="my-5">This parameter changes how many weight values are calculated when constructing the context map, thereby increasing most desired angle accuracy</p>
            <p className="my-5">In most situations, 16 will suffice</p>

            <h4 className="text-xl mt-10">See Attraction and Repulsion Maps</h4>
            <p className="my-5">The raw attraction and repulsion maps can be gotten as an array of doubles using these methods</p>
            <code>
                cts.GetAttractionMap(); //Returns double[]
                cts.GetRepulsionMap();  //Returns double[]
            </code>
        </>
    )
}

function ExampleBuild() {
    return (
        <>
            <h2 id="example" className="text-3xl mt-10">Example Build</h2>

            <h3 className="text-2xl mt-10">Buid Simulation</h3>

            <Image
                src='/projects/contextsteering2d/Boids.jpg'
                alt='Context steering visualization 2'
                width={500}
                height={0}
                unoptimized
                >
            </Image>

            <p className="my-5">On the left is the boid simulation.  By default, there is a debug boid colored blue.  Its attraction and repulsion maps are drawn on its position at all times</p>
            <p className="my-5">Boids have three main behaviors:</p>
            <ul>
                <li className="list-disc mx-10">
                    <p className="my-5">Separation</p>
                    <ul className="mx-10">
                        <li>Each boid is processed as a repulsion vector</li>
                        <li>Generates repulsion map</li>
                    </ul>
                </li>
                <li className="list-disc mx-10">
                    <p className="my-5">Alignment</p>
                    <ul className="mx-10">
                        <li>The average boid angle is gotten and a relative attraction vector is created to represent this angle</li>
                        <li>Represented by blue line</li>
                    </ul>
                </li>
                <li className="list-disc mx-10">
                    <p className="my-5">Cohesion</p>
                    <ul className="mx-10">
                        <li>The average boid position is gotten and an attraction vector with increased strength is used to represent this desire</li>
                        <li>Represented by green dot.  Generates attraction map</li>
                    </ul>
                </li>
            </ul>

            <h3 className="text-2xl mt-10">Static Context Map</h3>

            <p className="my-5">On the right is a display of the context map.  In the example build, this is interactive</p>
            <p className="my-5">Left click to create attraction vector.  Right click to create a repulsion vector.  press SPACE to create a relative attraction vector.  Prss R to clear all created vectors.</p>
            <p className="my-5">What is displayed in the white circle is the fully generated and accounted for context map</p>
            <p className="my-5">On the bottom right, the attraction map is displayed</p>
            <p className="my-5">On the bottom left, the repulsion map is displayed</p>
            
        </>
    )
}

export default function ContextSteering2D() {
    return (
        <div className="flex flex-col w-full">
            <h2 id="contents" className="text-3xl mt-10">Contents</h2>
            <ul className="text-xl">
                <li className="relative list-disc left-8"><button onClick={() => document.querySelector('#overview')?.scrollIntoView()}>Overview</button></li>
                <li className="relative list-disc left-8"><button onClick={() => document.querySelector('#report')?.scrollIntoView()}>User Guide</button></li>
                <li className="relative list-disc left-8"><button onClick={() => document.querySelector('#example')?.scrollIntoView()}>Example Build</button></li>
                <li className="relative list-disc left-8"><button onClick={() => document.querySelector('#seemore')?.scrollIntoView()}>See More</button></li>
            </ul>
            <Overview />
            <UserGuide />
            <ExampleBuild />
            <SeeMore />
        </div>
    )
}
