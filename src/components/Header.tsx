import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        {/* Logo */}
        <h1>
          <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            Tommy Werner
          </a>
        </h1>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="menu-toggle"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul className={`menu ${menuOpen ? 'open' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><ThemeToggle /></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
