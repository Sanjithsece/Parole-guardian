// pages/TrackParolee.jsx
import { useState } from "react";

function TrackParolee() {
  const [parolees, setParolees] = useState([
    { id: 1, name: "John Doe", status: "Active", lastKnownLocation: "Zone A" },
    { id: 2, name: "Jane Smith", status: "On Leave", lastKnownLocation: "Zone B" },
  ]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Track Parolees</h2>
      <ul>
        {parolees.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> - {p.status} @ {p.lastKnownLocation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrackParolee;