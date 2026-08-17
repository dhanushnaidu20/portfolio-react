const NotFound = () => {
  return (
    <section className="not-found-page">
      <div className="not-found-container">
        <p className="section-label">ERROR</p>

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Sorry, the page you are looking for does not exist.
        </p>

        <a href="/" className="contact-button">
          Go Back Home
        </a>
      </div>
    </section>
  );
};

export default NotFound;