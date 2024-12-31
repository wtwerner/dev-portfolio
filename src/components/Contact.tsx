function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        Feel free to reach out via email:
        <a href="mailto:tommy@wtwerner.dev" style={{ color: 'var(--link)', marginLeft: '0.25rem' }}>
          tommy@wtwerner.dev
        </a>
      </p>
      <p>
        Connect with me on{' '}
        <a
          href="https://github.com/wtwerner"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--link)', marginLeft: '0.25rem' }}
        >
          GitHub
        </a>{' '}
        or{' '}
        <a
          href="https://www.linkedin.com/in/wtwerner"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--link)', marginLeft: '0.25rem' }}
        >
          LinkedIn
        </a>
      </p>
    </section>
  );
}

export default Contact;
