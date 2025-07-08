import illustration from '../assets/images/illustration-working.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h2>More than just shorter links</h2>
        <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
        <button>Get Started</button>
      </div>
      <img src={illustration} alt="Illustration of someone working" className="hero-image" />
    </section>
  );
};

export default Hero;
