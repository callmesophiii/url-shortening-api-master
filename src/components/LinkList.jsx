import { useState, useEffect } from 'react';

const LinkList = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('links') || '[]');
    setLinks(stored);

    const handleStorageChange = () => {
      const updated = JSON.parse(localStorage.getItem('links') || '[]');
      setLinks(updated);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <div className="link-list">
      {links.map((link, index) => (
        <div className="link-card" key={index}>
          <p>{link.original}</p>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href={link.short} target="_blank" rel="noopener noreferrer">
              {link.short}
            </a>
            <button
              onClick={() => {
                navigator.clipboard.writeText(link.short);
              }}
            >
              Copy
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinkList;
