const LinkCard = ({ original, short }) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(short);
    alert('Copied to clipboard!');
  };

  return (
    <div className="link-card">
      <p>{original}</p>
      <div>
        <a href={short} target="_blank" rel="noreferrer">{short}</a>
        <button onClick={handleCopy}>Copy</button>
      </div>
    </div>
  );
};

export default LinkCard;
