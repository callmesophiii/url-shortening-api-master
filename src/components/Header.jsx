const Header = () => (
  <header className="header">
    <h1 className="logo">Shortly</h1>

    <nav className="nav">
      <ul className="nav-links">
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
      </ul>
    </nav>

    <div className="auth-buttons">
      <button className="login">Login</button>
      <button className="signup">Sign Up</button>
    </div>
  </header>
);

export default Header;
