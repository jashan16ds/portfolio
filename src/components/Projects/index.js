/*
  File Name: components/Projects/index.js
  Student's Name: Jashandeep Singh
  Student ID: 301340927
  Date: 26-01-2024
  
  Description: Project List/Page Component
*/
import projects from "../../data/projects.js";
import ProjectCard from "./ProjectCard";
export default function Projects() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold text-orange-500 mb-4">Projects</h1>

      <div className="flex flex-col justify-center space-y-4">
        {projects.map((project, index) => (
          <div className="w-full container max-w-4xl mx-auto" key={index}>
            <ProjectCard
              title={project.title}
              description={project.description}
              role={project.role}
              outcome={project.outcome}
              imageUrl={project.imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
