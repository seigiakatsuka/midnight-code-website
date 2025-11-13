"use client";
import React from "react";
import Image from "next/image";
import { projects } from "@/app/lib/projects/projectInfo";
import styles from "./projectCard.module.css";
import { Button } from "@/app/components/ui/button";

export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  height: number;
  width: number;
  link: string;
}

export const ProjectCard: React.FC = () => {
  const projectList: Project[] = Object.values(projects || {});

  if (!projectList || projectList.length === 0) return null;

  return (
    <div className={styles.projectCard}>
      {projectList.map((project) => (
        <article className={styles.project} key={project.id}>
          <div className={styles.projectImage}>
            <Image
              src={project.image}
              alt={project.name}
              width={project.width}
              height={project.height}
              // if you need layout/responsive behavior, replace with appropriate props
            />
          </div>

          <div className={styles.projectContent}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>

            <Button>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Visit Site →
              </a>
            </Button>
          </div>
        </article>
      ))}
    </div>
  );
};
