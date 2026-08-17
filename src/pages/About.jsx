function About() {
  return (
    <section className="page-section">
      <div className="container">
        <p className="small-title">ABOUT ME</p>

        <h1>About Me</h1>

        <p>
          I am a passionate frontend developer interested in
          building modern, responsive and user-friendly websites.
        </p>

        <p>
          I enjoy working with React, JavaScript, HTML, CSS and
          modern frontend technologies.
        </p>

        <div className="about-grid">
          <div className="info-card">
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML, CSS</p>
          </div>

          <div className="info-card">
            <h3>Responsive Design</h3>
            <p>Mobile, Tablet and Desktop websites</p>
          </div>

          <div className="info-card">
            <h3>Problem Solving</h3>
            <p>Building functional and user-friendly applications</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;