'use client'

import ExternalLinks from "@/components/external-links"
import { contactLinks } from "@/lib/data"

export default function ContactPage() {

    return <>
        <ExternalLinks header="Contact Me" links={contactLinks}/>
    </>
}