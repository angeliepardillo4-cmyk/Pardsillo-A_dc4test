import { Link, useLocation } from "react-router-dom";

function Confirmation() {
  const location = useLocation();

  const name = location.state?.name;
  const event = location.state?.event;

  return (
    <div className="container">
      <h1>Registration Successful!</h1>

      {name && event ? (
        <p>
          Thanks, {name}! You are registered for {event}.
        </p>
      ) : (
        <p>
          Your registration has been successfully submitted.
        </p>
      )}

      <Link to="/events">View Events</Link>
    </div>
  );
}

export default Confirmation;