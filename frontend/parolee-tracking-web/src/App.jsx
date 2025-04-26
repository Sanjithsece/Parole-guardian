import { Link } from "react-router-dom";

function App() {
  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>ParoleGuardian</h1>
      <p>Modern Parole Monitoring System</p>
      <nav style={{ marginTop: 20 }}>
        <Link to="/dashboard">Dashboard</Link> | <Link to="/track">Track</Link> | <Link to="/reports">Reports</Link>
      </nav>
    </div>
  );
}

export default App;