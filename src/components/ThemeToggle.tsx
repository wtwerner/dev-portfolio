import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    return storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    const root = document.body;
    if (theme === 'dark') {
      root.classList.add('dark-mode');
    } else {
      root.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      onClick={toggleTheme}
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        gap: '0.5rem',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '50px',
          height: '24px',
          background: theme === 'light' ? '#ccc' : '#4f5b66',
          borderRadius: '50px',
          transition: 'background 0.3s ease',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '2px',
            left: theme === 'light' ? '2px' : '26px',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: theme === 'light' ? '#fff' : '#ffa500',
            transition: 'left 0.3s ease',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {theme === 'light' ? (
            <FiSun size={14} color="#ffa500" />
          ) : (
            <FiMoon size={14} color="#fff" />
          )}
        </div>
      </div>
    </div>
  );
}

export default ThemeToggle;
