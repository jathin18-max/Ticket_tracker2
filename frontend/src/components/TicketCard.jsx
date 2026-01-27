import { useNavigate } from "react-router-dom";
import minus from "../assets/minus.png";
import "./TicketCard.css";

export default function TicketCard({ ticket }) {
  const navigate = useNavigate();
  return (
    <div className="ticket-card" onClick={() => navigate(`/ticket/${ticket.id}`)}>
      <div className="ticket-info">
        <div className="ticket-name">{ticket.name}</div>
        <div className="client-name">Client: {ticket.client}</div>
      </div>
      <div className="ticket-meta">
        <div className="ticket-points">{ticket.points} pts</div>
        <div className="ticket-priority">{ticket.priority}</div>
        <div className="ticket-icon">
          <img src={minus} alt="status" />
        </div>
      </div>
    </div>
  );
}
