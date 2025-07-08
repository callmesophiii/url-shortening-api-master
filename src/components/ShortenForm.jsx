import { useState } from 'react';

const ShortenForm = () => {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleShorten = async (e) => {
    e.preventDefault();

    if (!url.trim()) {
      setError('Please add a link');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const res = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
      if (!res.ok) throw new Error('Failed to shorten URL');
      
      const shortUrl = await res.text();

      const existing = JSON.parse(localStorage.getItem('links') || '[]');
      const updated = [{ original: url, short: shortUrl }, ...existing];

      localStorage.setItem('links', JSON.stringify(updated));
      window.dispatchEvent(new Event('storage'));

      setUrl('');
    } catch (err) {
      console.error('Shortening failed:', err);
      setError('Failed to shorten URL');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleShorten} className="shorten-form">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Shorten a link here..."
        className={error ? 'error' : ''}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Shortening...' : 'Shorten It!'}
      </button>
      {error && <small className="error-msg">{error}</small>}
    </form>
  );
};

export default ShortenForm;