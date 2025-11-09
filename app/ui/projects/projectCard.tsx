'use client';
import React, {useState} from "react";
import Image from "next/image";
import {projects} from "@/app/lib/projects/projectInfo";
import './projectCard.module.css'


export const ProjectCard = () => {
    const [project, setProject] = useState({'id': (0), 'name': '', 'description': '', 'image': '','height': (0), 'width': (0), 'link': ''})

    return (
        <>
            <div key={project.id}>
                <Image width={project.width} height={project.height} src={project.image} alt={project.name} />
                <div>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                </div>
                <button>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        Visit Site 􀮵
                    </a>
                </button>
            </div>
        </>
    )
}