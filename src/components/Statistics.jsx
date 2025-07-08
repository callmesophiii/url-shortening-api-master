import FeatureCard from './FeatureCard';
import icon1 from '../assets/images/icon-brand-recognition.svg';
import icon2 from '../assets/images/icon-detailed-records.svg';
import icon3 from '../assets/images/icon-fully-customizable.svg';

const Statistics = () => {
  const features = [
    {
      icon: icon1,
      title: 'Brand Recognition',
      description: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instill confidence in your content.'
    },
    {
      icon: icon2,
      title: 'Detailed Records',
      description: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
    },
    {
      icon: icon3,
      title: 'Fully Customizable',
      description: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
    }
  ];

  return (
    <section className="statistics container">
      <h3>Advanced Statistics</h3>
      <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      <div className="feature-grid">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Statistics;
