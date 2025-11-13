export default function Scroller() {
    const scrollerContent =
        ["HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Motion",
        "MongoDB"]

    return(
        <>
            <div className={"overflow-hidden bg-black w-full m-auto"}>
                <ul className={"text-slate-200 flex flex-wrap gap-4 animate-loop-scroll"}>
                    {scrollerContent.map((scrollerContent) => (
                        <li key={scrollerContent}>{scrollerContent}</li>
                        ))}
                </ul>

            </div>
        </>
    );
}