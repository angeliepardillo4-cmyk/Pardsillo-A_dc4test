import { Link, useParams } from "react-router-dom";

const events = [
  {
    id: "1",
    title: "Web Development Night",
    date: "September 10, 2026",
    location: "Computer Laboratory",
    description: "Learn modern web development with React.",
  },
  {
    id: "2",
    title: "UI/UX Design Workshop",
    date: "September 17, 2026",
    location: "IT Room 204",
    description: "Explore the fundamentals of user interface and experience design.",
  },
  {
    id: "3",
    title: "Programming Competition",
    date: "September 24, 2026",
    location: "School Auditorium",
    description: "Test your programming skills in a friendly competition.",
  },
];

function EventDetails() {
  const { id } = useParams();

  const event = events.find((event) => event.id === id);

  if (!event) {
    return (
      <div>
        <h1>Event Not Found</h1>
        <Link to="/events">Back to Events</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{event.title}</h1>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p>{event.description}</p>

      <Link to="/register">Register for this Event</Link>
    </div>
  );
}

export default EventDetails;
