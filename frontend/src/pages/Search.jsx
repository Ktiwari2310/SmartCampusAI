import { useState } from "react";
import { searchResources } from "../Api";

function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);

    const data = await searchResources(query);

    // simulate AI delay
    setTimeout(() => {
      setResults(data);
      setLoading(false);
    }, 600);
  };

  return (
    <div style={styles.container}>
      <h2>Search Resources</h2>

      <div style={styles.searchBox}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search notes, PDFs, research papers..."
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>
          Search
        </button>
      </div>

      {loading && <p style={styles.loading}>🔎 AI is analyzing...</p>}

      {!loading && results.length === 0 && query && (
        <p style={styles.empty}>No results found.</p>
      )}

      <div style={styles.results}>
        {results.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardHeader}>
              <h3>{item.title}</h3>
              <span style={styles.score}>
                {Math.round(item.relevanceScore * 100)}%
              </span>
            </div>

            <p style={styles.summary}>{item.summary}</p>

            <div style={styles.footer}>
              <span style={styles.fileType}>{item.fileType}</span>
              <button style={styles.viewBtn}>View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "80px 40px",
    backgroundColor: "#f9fbff",
    minHeight: "100vh"
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px"
  },
  input: {
    padding: "14px",
    width: "400px",
    borderRadius: "10px 0 0 10px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "14px 20px",
    borderRadius: "0 10px 10px 0",
    border: "none",
    backgroundColor: "#1976d2",
    color: "#fff",
    cursor: "pointer"
  },
  loading: {
    textAlign: "center",
    marginTop: "20px",
    color: "#1976d2"
  },
  empty: {
    textAlign: "center",
    marginTop: "20px",
    color: "#777"
  },
  results: {
    marginTop: "40px",
    display: "grid",
    gap: "25px"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "16px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    transition: "transform 0.2s ease"
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  score: {
    backgroundColor: "#e3f2fd",
    color: "#1976d2",
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "14px"
  },
  summary: {
    marginTop: "15px",
    color: "#555"
  },
  footer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  fileType: {
    backgroundColor: "#f1f1f1",
    padding: "6px 12px",
    borderRadius: "8px",
    fontSize: "13px"
  },
  viewBtn: {
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer"
  }
};

export default Search;
