import { Metadata } from "next";
import ProjectCard from "@/app/ui/projects/project-card";

export const metadata: Metadata = {
    title: 'Projects'
};

export default function Projects() {
    return <>
        <div>
            <h1>Projects</h1>
            <ProjectCard />
        </div>
    </>
}