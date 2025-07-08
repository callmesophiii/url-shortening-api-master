import facebook from '../assets/images/icon-facebook.svg';
import twitter from '../assets/images/icon-twitter.svg';
import pinterest from '../assets/images/icon-pinterest.svg';
import instagram from '../assets/images/icon-instagram.svg';

const Footer = () => {
  return (
    <footer className="container">
      <div className="footer-grid">
        <div className="footer-column">
          <h2 style={{ color: 'white' }}>Shortly</h2>
        </div>

        <div className="footer-column">
          <h4>Features</h4>
          <a href="#">Link Shortening</a>
          <a href="#">Branded Links</a>
          <a href="#">Analytics</a>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <a href="#">Blog</a>
          <a href="#">Developers</a>
          <a href="#">Support</a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <a href="#">About</a>
          <a href="#">Our Team</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-column footer-socials">
          <img src={facebook} alt="Facebook" />
          <img src={twitter} alt="Twitter" />
          <img src={pinterest} alt="Pinterest" />
          <img src={instagram} alt="Instagram" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
