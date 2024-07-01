export default function ResumePdfViewer() {
    return (
        <div className="flex flex-grow w-full md:w-5/6">
            <object data="/resume.pdf" type="application/pdf" className="flex flex-auto">
                <p>Resume PDF failed to load. Email me at trevoroblack@gmail.com, and I&apos;ll send it to you!</p>
            </object>
        </div>
    )
}