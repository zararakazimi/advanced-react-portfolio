import projects from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";
function Projects(){
    return(
<div>
            <h1>My Projects</h1>

            {projects.map((project)  => (
                <ProjectCard key={project.id}
                project={project}
                />
            ))}

            <p>My Portfolio</p>
        </div>
    );
    
        
}

export default Projects;