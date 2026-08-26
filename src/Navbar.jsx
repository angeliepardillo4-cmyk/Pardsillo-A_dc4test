import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>EventHub</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;
