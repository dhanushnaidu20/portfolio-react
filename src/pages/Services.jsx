const Services = () => {
  return (
    <section className="page-section">
      <p className="section-label">WHAT I DO</p>

      <h1>My Services</h1>

      <p className="section-description">
        I provide modern and reliable web development services to help
        businesses and individuals build a strong online presence.
      </p>

      <div className="services-grid">
        <div className="service-card">
          <h2>Web Development</h2>
          <p>
            I build modern and responsive websites using React, JavaScript,
            HTML and CSS.
          </p>
        </div>

        <div className="service-card">
          <h2>Responsive Design</h2>
          <p>
            I create websites that work smoothly on desktop, tablet and
            mobile devices.
          </p>
        </div>

        <div className="service-card">
          <h2>UI Development</h2>
          <p>
            I create clean and user-friendly interfaces with a focus on
            usability and modern design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;