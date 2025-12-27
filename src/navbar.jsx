import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="title">Grade Calculator App</h1>
      </div>

      {/* Hamburger icon */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`navbar-right ${open ? "open" : ""}`}>
        <a href="/#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#calculator" onClick={() => setOpen(false)}>Calculator</a>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
      </div>
    </nav>
  );
}

export default Navbar;


