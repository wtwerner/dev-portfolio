const projects = [
  { title: 'Project 1', description: 'A web app built with Node.js and React.' },
  { title: 'Project 2', description: 'Backend service built using Go and MongoDB.' },
  { title: 'Project 3', description: 'CLI tool for deployment automation.' },
];

function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <p>Explore some of the projects I've worked on.</p>
      <div className="grid">
        {projects.map((project, index) => (
          <div key={index} style={{
            background: 'var(--block-bg)',
            padding: '1.5rem',
            borderRadius: '8px',
            margin: '0.5rem 0',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
