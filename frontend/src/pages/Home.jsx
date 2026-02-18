import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO SECTION */}
      <div style={styles.hero}>
        <h1 style={styles.heading}>
          Find Academic Resources Instantly
        </h1>

        <p style={styles.subheading}>
          AI-powered unified search across campus materials
        </p>

        <div style={styles.searchBox}>
          <input
            placeholder="Search notes, PDFs, research papers..."
            style={styles.input}
          />
          <button
            style={styles.searchButton}
            onClick={() => navigate("/search")}
          >
            Search
          </button>
        </div>

        {/* STATS */}
        <div style={styles.statsContainer}>
          <div>
            <h2>10,000+</h2>
            <p>Resources Indexed</p>
          </div>

          <div>
            <h2>500+</h2>
            <p>Research Papers</p>
          </div>

          <div>
            <h2>98%</h2>
            <p>Search Accuracy</p>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div style={styles.processSection}>
          <h3 style={styles.processTitle}>How It Works</h3>

          <div style={styles.processGrid}>
            <div style={styles.stepCard}>
              <span style={styles.icon}>📤</span>
              <p>Upload Academic Content</p>
            </div>

            <div style={styles.stepCard}>
              <span style={styles.icon}>🧠</span>
              <p>AI Generates Embeddings</p>
            </div>

            <div style={styles.stepCard}>
              <span style={styles.icon}>🔎</span>
              <p>Semantic Search Engine</p>
            </div>

            
            <div style={styles.stepCard}>
              <span style={styles.icon}>⚡</span>
              <p>Instant Smart Results</p>
            </div>
          </div>
        </div>
      </div>

      {/* WHY SECTION */}
      <div style={styles.whySection}>
        <h2>Why Choose Smart Campus AI?</h2>
        <p style={styles.whyText}>
          Smart Campus AI unifies scattered academic resources into one
          intelligent search platform. It reduces time spent searching and
          increases learning efficiency for students and faculty.
        </p>
      </div>

      {/* FOOTER */}
      <div style={styles.footer}>
        <div style={styles.footerContainer}>
          <div>
            <h3>Smart Campus AI</h3>
            <p style={styles.footerText}>
              AI-powered knowledge search platform for smart campuses.
            </p>
          </div>

         
          <div>
            <h4>Contact</h4>
            <p style={styles.footerText}>
              Email: support@smartcampus.ai
            </p>
            <p style={styles.footerText}>
              Location: University Campus
            </p>
          </div>
        </div>

        <div style={styles.bottomBar}>
          © 2026 Smart Campus AI. All rights reserved.
        </div>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    background: "linear-gradient(to right, #dbeeff, #c3dcf5)",
    padding: "100px 40px",
    textAlign: "center",
    minHeight: "90vh"
  },

  heading: {
    fontSize: "40px",
    fontWeight: "700"
  },

  subheading: {
    marginTop: "15px",
    fontSize: "18px",
    color: "#444"
  },

  searchBox: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center"
  },

  input: {
    padding: "14px",
    width: "400px",
    borderRadius: "10px 0 0 10px",
    border: "1px solid #ccc"
  },

  searchButton: {
    padding: "14px 20px",
    borderRadius: "0 10px 10px 0",
    border: "none",
    backgroundColor: "#1976d2",
    color: "#fff",
    cursor: "pointer"
  },

  statsContainer: {
    marginTop: "60px",
    display: "flex",
    justifyContent: "center",
    gap: "80px",
    flexWrap: "wrap"
  },

  processSection: {
    marginTop: "90px"
  },

  processTitle: {
    fontSize: "24px",
    marginBottom: "40px",
    fontWeight: "600"
  },

  processGrid: {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap"
  },

  stepCard: {
    backgroundColor: "rgba(255,255,255,0.7)",
    padding: "25px 35px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    width: "220px"
  },

  icon: {
    fontSize: "28px",
    display: "block",
    marginBottom: "10px"
  },

  whySection: {
    padding: "100px 40px",
    textAlign: "center",
    backgroundColor: "#f7fbff"
  },

  whyText: {
    marginTop: "20px",
    maxWidth: "700px",
    marginInline: "auto",
    color: "#555",
    fontSize: "16px",
    lineHeight: "1.6"
  },

  footer: {
    backgroundColor: "#f1f6ff",
    padding: "60px 40px 20px 40px",
    marginTop: "80px"
  },

  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "40px",
    maxWidth: "1100px",
    margin: "auto"
  },

  footerText: {
    color: "#555",
    marginTop: "8px",
    fontSize: "14px"
  },

  link: {
    cursor: "pointer",
    color: "#1976d2",
    marginTop: "8px",
    fontSize: "14px"
  },

  bottomBar: {
    textAlign: "center",
    marginTop: "40px",
    paddingTop: "20px",
    borderTop: "1px solid #ddd",
    fontSize: "13px",
    color: "#777"
  }
};

export default Home;
