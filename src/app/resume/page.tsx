import Link from "next/link";
import { redirect } from "next/navigation";

export default function ResumePdfViewer() {
    return (
        <div className="flex flex-grow w-full md:w-5/6">
            <object data="/resume.pdf" type="application/pdf" className="flex flex-auto">
                <p>
                    Resume PDF failed to load. Try
                    <Link href="/resume.pdf"> clicking here instead! </Link>
                    or email me at trevoroblack@gmail.com
                </p>
            </object>
        </div>
    )
}