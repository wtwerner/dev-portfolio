function Credits() {
  const tools = [
    { name: 'React', description: 'JavaScript library for building user interfaces.', link: 'https://reactjs.org/' },
    { name: 'React Icons', description: 'SVG icons for React applications.', link: 'https://react-icons.github.io/react-icons/' },
    { name: 'Vite', description: 'Next-generation frontend tooling for fast builds.', link: 'https://vitejs.dev/' },
    { name: 'TypeScript', description: 'Typed JavaScript for better tooling.', link: 'https://www.typescriptlang.org/' },
  ];

  return (
    <section id="credits">
      <h2>Credits</h2>
      <p>This portfolio was made possible thanks to these open-source tools and libraries:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tools.map((tool) => (
          <li key={tool.name} style={{ marginBottom: '1rem' }}>
            <strong>{tool.name}</strong>: {tool.description}{' '}
            <a href={tool.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--link)' }}>
              Learn more
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Credits;
