function Credits() {
  const tools = [
    { name: 'React', description: 'JavaScript library for building user interfaces.', link: 'https://reactjs.org/' },
    { name: 'Vite', description: 'Next-generation frontend tooling for fast builds.', link: 'https://vitejs.dev/' },
    { name: 'TypeScript', description: 'Typed JavaScript for better tooling.', link: 'https://www.typescriptlang.org/' },
    { name: 'Catppuccin', description: 'A soothing pastel theme for many applications.', link: 'https://github.com/catppuccin/catppuccin' },
    { name: 'Geist Fonts', description: 'Modern, minimal sans-serif font family.', link: 'https://vercel.com/design/geist' },
    { name: 'ESLint', description: 'Find and fix problems in your JavaScript code.', link: 'https://eslint.org/' },
    { name: 'Prettier', description: 'Code formatter for consistent style.', link: 'https://prettier.io/' },
  ];

  return (
    <section id="credits">
      <h2>Credits</h2>
      <p>This project was made possible thanks to these incredible open-source tools and libraries:</p>
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
