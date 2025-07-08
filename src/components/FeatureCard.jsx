const FeatureCard = ({ icon, title, description, index }) => (
  <div className="feature-card" style={{ marginTop: `${index * 2}rem` }}>
    <div className="icon-wrapper">
      <img src={icon} alt={title} />
    </div>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

export default FeatureCard;