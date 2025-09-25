import './project-card.css';
import Image from "next/image";


export default function ProjectCard() {
    return (
        <>
            <div className={"flex flex-col "}>
                <Image src="/headshot.jpeg" alt="Project" width={300} height={300} className={""} />
                <h2>Project</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, ea!</p>
            </div>
        </>
    )
}