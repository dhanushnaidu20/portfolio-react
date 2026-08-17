import { useParams } from "react-router-dom";

function ServiceDetails() {
  const { serviceId } = useParams();

  return (
    <div className="info-card service-details">
      <h2>{serviceId}</h2>

      <p>
        This is the detailed information about the selected
        service.
      </p>

      <p>
        This page demonstrates nested routing and dynamic
        routing using React Router.
      </p>
    </div>
  );
}

export default ServiceDetails;