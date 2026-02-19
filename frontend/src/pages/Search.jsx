import { useState, useEffect } from "react";
import resourcesData from "../data/resourcesData";

function Search() {
  const [query, setQuery] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [results, setResults] = useState(resourcesData);

  
  useEffect(() => {
    let filtered = resourcesData;

    // Filter by search text (title + summary)
    if (query.trim()) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.summary.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Filter by fileType
    if (selectedType !== "All") {
      filtered = filtered.filter(
        (item) => item.fileType === selectedType
      );
    }

    setResults(filtered);
  }, [query, selectedType]);

 
  const getBadgeStyle = (fileType) => {
    switch (fileType) {
      case "Research Paper":
        return { backgroundColor: "#1976d2" };
      case "Lecture Notes":
        return { backgroundColor: "#43a047" };
      case "Case Study":
        return { backgroundColor: "#f57c00" };
      default:
        return { backgroundColor: "#555" };
    }
  };

  return (
    <div style={styles.wrapper}>
      
      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h3>Filters</h3>

        <div style={styles.filterGroup}>
          <p style={styles.filterTitle}>File Type</p>

          {["All", "Research Paper", "Lecture Notes", "Case Study"].map(
            (type) => (
              <label key={type} style={styles.filterItem}>
                <input
                  type="radio"
                  name="fileType"
                  value={type}
                  checked={selectedType === type}
                  onChange={(e) => setSelectedType(e.target.value)}
                  style={{ accentColor: "#1976d2" }}
                />
                {type}
              </label>
            )
          )}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={styles.content}>
        <h2>Search Resources</h2>

        <div style={styles.searchBox}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search notes, PDFs, research papers..."
            style={styles.input}
          />
        </div>

        <p style={styles.resultCount}>
          Showing {results.length} results
        </p>

        <div style={styles.results}>
          {results.length === 0 ? (
            <p>No resources found.</p>
          ) : (
            results.map((item) => (
              <div key={item.id} style={styles.card}>
                
                {/* FILE TYPE BADGE */}
                <div style={styles.badgeWrapper}>
                  <span
                    style={{
                      ...styles.badge,
                      ...getBadgeStyle(item.fileType)
                    }}
                  >
                    {item.fileType}
                  </span>
                </div>

                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.summary}>{item.summary}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    padding: "40px",
    background: "#f5f8ff",
    minHeight: "100vh"
  },

  sidebar: {
    width: "250px",
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
    textAlign: "left"
  },

  filterGroup: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },

  filterTitle: {
    fontWeight: "600"
  },

  filterItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer"
  },

  content: {
    flex: 1,
    marginLeft: "40px"
  },

  searchBox: {
    marginTop: "20px"
  },

  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #ccc"
  },

  resultCount: {
    marginTop: "20px",
    color: "#555",
    fontWeight: "500"
  },

  results: {
    marginTop: "30px",
    display: "grid",
    gap: "20px"
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "15px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)"
  },

  badgeWrapper: {
    marginBottom: "10px"
  },

  badge: {
    color: "white",
    padding: "5px 12px",
    borderRadius: "20px",
    fontSize: "12px"
  },

  title: {
    marginTop: "10px"
  },

  summary: {
    marginTop: "8px",
    color: "#555"
  }
};

export default Search;
