import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header style={{ borderBottom: '1px solid var(--secondary)', backgroundColor: 'var(--bg)' }}>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <h1 style={{ fontSize: '1.5rem', fontWeight: 600 }}>Tommy Werner</h1>

        {/* Navigation Links */}
        <ul
          style={{
            display: 'flex',
            gap: '1.5rem',
            listStyle: 'none',
            alignItems: 'center',
            margin: 0,
          }}
          className="desktop-menu"
        >
          <li>
            <a href="#about" style={{ color: 'var(--link)', textDecoration: 'none' }}>
              About
            </a>
          </li>
          <li>
            <a href="#projects" style={{ color: 'var(--link)', textDecoration: 'none' }}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" style={{ color: 'var(--link)', textDecoration: 'none' }}>
              Contact
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.5rem',
            display: 'none',
          }}
          className="menu-toggle"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>
    </header>
  );
}

export default Header;
