import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Smart Campus AI</h2>

      <div style={styles.links}>
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/features" className="nav-link">
          Features
        </NavLink>
        <NavLink to="/how-it-works" className="nav-link">
          How It Works
        </NavLink>
        <NavLink to="/search" className="nav-link">
          Search
        </NavLink>
        <NavLink to="/admin" className="nav-link admin-btn">
          Admin
        </NavLink>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 60px",
    backgroundColor: "#ffffff",
    boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  logo: {
    margin: 0,
    fontWeight: "700",
    fontSize: "22px",
    color: "#1976d2",
    letterSpacing: "0.5px"
  },
  links: {
    display: "flex",
    gap: "18px"
  }
};

export default Navbar;
