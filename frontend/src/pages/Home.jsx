
import TicketCard from "../components/TicketCard";
import Navbar from "../components/Navbar";
import "./Home.css";
export default function Home({ tickets,points,onSearch,onPriority }) {
  return (
    <div className="page-container" style={{ marginTop: 80 ,background: "none"}}>
      <Navbar
        points={points}
        onSearch={onSearch}
        onPriority={onPriority}
      />
      <div className="list">
        {tickets.length === 0 ? (
          <p style={{ color: "#fff" }}>No tickets found.</p>
        ) : (
          tickets.map(t => <TicketCard key={t.id} ticket={t} />)
        )}
      </div>
    </div>
  );
}
