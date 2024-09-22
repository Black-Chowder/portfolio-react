'use client'

/**
 * This component heavily uses three.js, more specifically react-three fiber (plus drei extension).
 * Because of this, it requires the react plugin for astro ($npx astro add react).
 * 
 * Note that the Model component MUST be separate from the ModelViewer or else things don't work
 * for some reason. -> it just needs the <primitive> and gltf = useGLTF() parts to be separate I
 * think. Idk why.
 * 
 * The data in here was manually set for a specific model (PlaneFull24.gltf). So for other
 * models, properties must be changed like position, rotation, etc. These should probably be
 * passed through in a nicer way instead of hard coded.
 * 
 * Many sections are commented out, labelled "highlight model part on hover". These parts contain code
 * for highlighting whichever part of the model is being hovered over by the cursor. It was removed
 * because it didn't work the way we wanted it to, but the code is preserved because I worked hard on
 * it and want to save it just in case I want it in the future, I guess. There are some straggling
 * parts that are not uncommented but they are a bit too mixed with other code for me to want to
 * remove them.
 */

// highlight model part on hover
// import * as THREE from 'three'

import { useState, Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Grid, Stage } from "@react-three/drei";


const Model = (props: any) => {
    const gltf: any = useGLTF(props.filepath);

    return ( 
        <group {...props} >
            <primitive object={ gltf.scene } scale={5} position={[0, 0, 1.5]} rotation={[-Math.PI / 2, 0, 0]}/>
        </group>
    )
}

export function ModelViewer({ name, filepath }: { name:any, filepath:any}) {
    const [autoRotate, setAutoRotate] = useState(true);

    return (
        <div className="flex justify-center p-5">
            <div className="flex flex-col justify-center w-full max-w-5xl">
                <h1 className='text-3xl lg:text-4xl font-bold text-center leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200'>{name}</h1>
                <Canvas camera={{ position: [0, .5, 2], zoom: 2 }} className="w-max aspect-[16/6] backdrop-blur-md rounded-lg">
                    <Suspense>
                        <Grid scale={2} fadeDistance={12} infiniteGrid={true} position={[0, -1, 0]}/>
                        <Stage intensity={0}>
                            <Model filepath={filepath} />
                        </Stage>
                        <OrbitControls autoRotate={autoRotate} autoRotateSpeed={-1} enableDamping={false} />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}

export default ModelViewer;