import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    category: "React",
    description: "A responsive online shopping application."
  },
  {
    id: 2,
    title: "Travel Booking App",
    category: "React",
    description: "A travel destination and booking application."
  },
  {
    id: 3,
    title: "Student Management",
    category: "JavaScript",
    description: "A student information management application."
  }
];

function Projects() {
  return (
    <section className="page-section">
      <div className="container">
        <p className="small-title">MY WORK</p>

        <h1>Projects</h1>

        <p>
          Here are some projects that demonstrate my frontend
          development skills.
        </p>

        <div className="project-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <span>{project.category}</span>

              <br />
              <br />

              <Link to={`/projects/${project.id}`}>
                View Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;