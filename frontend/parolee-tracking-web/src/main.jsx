// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Dashboard from "./pages/Dashboard";
import TrackParolee from "./pages/TrackParolee";
import Reports from "./pages/Reports";
import './index.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/track" element={<TrackParolee />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  </React.StrictMode>
);