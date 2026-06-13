function ProjectCard({project}) {
    return (
        <div>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Status {project.status}</p>
            <p>Progress:{project.progress}%</p>
        </div>
    );
}

export default ProjectCard