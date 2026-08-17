import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();

  return (
    <section className="page-section">
      <div className="container">
        <p className="small-title">PROJECT DETAILS</p>

        <h1>Project {id}</h1>

        <p>
          You are viewing the details of project number {id}.
        </p>

        <div className="info-card">
          <h2>Project Information</h2>

          <p>
            This project demonstrates dynamic routing using
            React Router DOM and useParams().
          </p>

          <p>
            The project ID is taken directly from the URL.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;