interface Project {
  title: string;
  description: string;
}

const projects: Project[] = [
  { title: 'Project 1', description: 'A web app built with Node.js and React.' },
  { title: 'Project 2', description: 'Backend service built using Go and MongoDB.' },
  { title: 'Project 3', description: 'CLI tool for deployment automation.' },
];

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="grid">
        {projects.map((project, index) => (
          <div key={index} style={{ background: 'var(--bg)', padding: '1.5rem', borderRadius: '8px' }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
