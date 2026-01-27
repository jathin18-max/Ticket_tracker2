import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./TicketInfo.css";
export default function TicketInfo({ tickets,points}) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [flag, setFlag] = useState(1);
  const ticket = tickets.find(t => t.id === Number(id));
  const [desc, setDesc] = useState();

  if (!ticket) return <div style={{ marginTop: 100, color: "#fff" }}>Ticket not found</div>;

  async function handleSubmit() {
    if (!desc.trim()) {
      alert("Please add a solution description before submitting.");
      return;
    }
    //completeTicket(ticket.id, desc);
    try {
      await fetch("http://localhost:5000/show-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: ticket.id,
          name: ticket.name,
          client: ticket.client,
          points: ticket.points,  
          problem: ticket.problem,
          solution: desc
        })
      });
      await fetch("http://localhost:5000/show-post", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: ticket.id
        })
      });
      await fetch("http://localhost:5000/show-points", {
        method: "put",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          points: ticket.points
        })
      });
      setFlag(0);
      alert("Ticket completed successfully");
      navigate("/completed");
    } catch (err) {
      console.error("Error:", err);
      alert("Error completing ticket");
    }
  }
  return (
    <div className="ticketinfo-container" style={{ marginTop: 30, padding: 20 }}>
      <Navbar points={points}/>
      <h1>{ticket.name}</h1>
      <p><b>Client:</b> {ticket.client}</p>
      <p><b>Priority:</b> {ticket.priority}</p>
      <p><b>Points:</b> {ticket.points}</p>

      <h3>Problem</h3>
      <div className="problem-box">{ticket.problem}</div>

      {flag==1 ? (
        <>
          <h3>Solution</h3>
          <textarea rows="6" value={desc} onChange={e => setDesc(e.target.value)} />
          <div style={{ marginTop: 12 }}>
            <button className="submit-btn" onClick={handleSubmit}>Submit</button>
          </div>
        </>
      ) : (
        <>
          <h3>Solution (saved)</h3>
          <div className="solution-text">{desc}</div>
        </>
      )}
    </div>
  );
}
