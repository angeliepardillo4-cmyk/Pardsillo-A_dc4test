import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validation 1: Name is required
    if (name.trim() === "") {
      newErrors.name = "Name is required.";
    }

    // Validation 2: Email is required and must contain @
    if (email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!email.includes("@")) {
      newErrors.email = "Email must contain @.";
    }

    // Validation 3: Event selection is required
    if (event === "") {
      newErrors.event = "Please select an event.";
    }

    setErrors(newErrors);

    // If there are errors, stop here
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Successful registration
    navigate("/confirmation", {
      state: {
        name: name,
        event: event
      }
    });
  };

  return (
    <div className="container">
      <h1>Register for an Event</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

          {errors.name && (
            <p className="error">{errors.name}</p>
          )}
        </div>

        <div className="form-group">
          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />

          {errors.email && (
            <p className="error">{errors.email}</p>
          )}
        </div>

        <div className="form-group">
          <label>Select Event</label>

          <select
            value={event}
            onChange={(e) => setEvent(e.target.value)}
          >
            <option value="">-- Select an Event --</option>
            <option value="Web Development Night">
              Web Development Night
            </option>
            <option value="IT Career Talk">
              IT Career Talk
            </option>
            <option value="Programming Workshop">
              Programming Workshop
            </option>
          </select>

          {errors.event && (
            <p className="error">{errors.event}</p>
          )}
        </div>

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
