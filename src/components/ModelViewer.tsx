'use client'

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