const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">

        <p className="section-label">GET IN TOUCH</p>

        <h1>Contact Me</h1>

        <p className="contact-intro">
          Have a project in mind or want to work together?
          Feel free to get in touch with me.
        </p>

        <div className="contact-info">

          <div className="contact-card">
            <h3>Email</h3>
            <p>dhanush@example.com</p>
          </div>

          <div className="contact-card">
            <h3>Phone</h3>
            <p>+91 XXXXX XXXXX</p>
          </div>

          <div className="contact-card">
            <h3>Location</h3>
            <p>India</p>
          </div>

        </div>

        <a
          href="mailto:dhanush@example.com"
          className="contact-button"
        >
          Send Me an Email
        </a>

      </div>
    </section>
  );
};

export default Contact;