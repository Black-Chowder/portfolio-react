"use client"

import { useParams } from "next/navigation"


export default function ProjectPage() {
    const params = useParams();
    const { slug } = params;
    return (
        <>
            <p>This slug is {slug}</p>
        </>
    )
}