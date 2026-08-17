import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="hero">
        <div className="hero-container">
          <p className="hero-label">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Dhanush</span>
          </h1>

          <h2>Frontend Developer</h2>

          <p>
            I build responsive and user-friendly web applications using React
            and modern web technologies.
          </p>

          <div className="hero-buttons">
            <Link to="/projects" className="primary-button">
              View My Projects
            </Link>

            <Link to="/contact" className="secondary-button">
              Contact Me
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;