import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import user from "../assets/user.png";


export default function Navbar({ points, onSearch, onPriority }) {
  const [search, setSearch] = useState("");
  const [priority, setPriority] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  function handleSearch(e) {
    setSearch(e.target.value);
    onSearch && onSearch(e.target.value);
  }

  function handlePriority(e) {
    setPriority(e.target.value);
    onPriority && onPriority(e.target.value);
  }

  return (
    <>
      <div className="navbar">
        <div className="titleName">Ticket Tracker</div>

        <div className="nav-links">
          <Link to="/Home">Home</Link>
          <Link to="/completed">Completed</Link>
        </div>

        <div className="searchbar">
          <input value={search} onChange={handleSearch} placeholder="Search by client..." />
        </div>

        <div className="dropdown">
          <select value={priority} onChange={handlePriority}>
            <option value="">All Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="points">Points: {points}</div>

        <div className="profile">
          <img src={user} className="profile_img" onClick={() => setShowProfile(true)} />
        </div>
      </div>
      {showProfile && (
        <div className="profile_popup" onClick={() => setShowProfile(false)}>
          <div className="profile_box" onClick={(e) => e.stopPropagation()}>
            <div className="profilephoto">
              <img src={user} alt="me" />
            </div>
            <div className="profile_info">
              <p>Name: <b>Jithin</b></p>
              <p>Role: <b>Developer</b></p>
            </div>
            <div className="two-items">
            <button className="close_btn2"><Link to="/">Logout</Link></button>
            <button className="close_btn" onClick={() => setShowProfile(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
