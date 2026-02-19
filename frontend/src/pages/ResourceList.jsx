import { useState } from "react";
import resourcesData from "../data/resourcesData";

function ResourceList() {
  const [selectedType, setSelectedType] = useState("All");

  // 🔹 Filtering Logic (use fileType, not type)
  const filteredResources =
    selectedType === "All"
      ? resourcesData
      : resourcesData.filter((item) => item.fileType === selectedType);

  return (
    <div style={styles.container}>
      <div style={styles.layout}>

        {/* Sidebar */}
        <div style={styles.sidebar}>
          <h3>Filters</h3>
          <p style={styles.filterTitle}>Filter Type</p>

          {["All", "Research Paper", "Lecture Notes", "Case Study"].map(
            (type) => (
              <label key={type} style={styles.filterItem}>
                <input
                  type="radio"
                  name="resourceType"
                  value={type}
                  checked={selectedType === type}
                  onChange={() => setSelectedType(type)}
                  style={{ accentColor: "#1976d2" }}
                />
                {type}
              </label>
            )
          )}
        </div>

        {/* Results */}
        <div style={styles.results}>

          {filteredResources.map((item) => (
            <div key={item.id} style={styles.card}>

              <div style={styles.cardLeft}>
                {/* ✅ Proper Badge instead of blue dot */}
                <span
  style={{
    ...styles.badge,
    backgroundColor:
      item.fileType === "Research Paper"
        ? "#1976d2"
        : item.fileType === "Lecture Notes"
        ? "#2e7d32"
        : item.fileType === "Case Study"
        ? "#f57c00"
        : "#1976d2",
  }}
>
  {item.fileType}
</span>


                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.date}>{item.date}</p>
                <p style={styles.summary}>{item.summary}</p>
              </div>

              <div style={styles.buttons}>
                <button style={styles.viewBtn}>View PDF</button>
                <button style={styles.downloadBtn}>Download</button>
              </div>
            </div>
          ))}

          {filteredResources.length === 0 && (
            <p style={{ marginTop: "20px", color: "#777" }}>
              No resources found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "#f4f8ff",
    minHeight: "100vh",
    padding: "40px",
  },
  layout: {
    display: "flex",
    gap: "30px",
  },

  sidebar: {
    width: "220px",
    background: "white",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    textAlign: "left",
    height: "fit-content"
  },

  filterTitle: {
    marginBottom: "12px",
    fontWeight: "600",
  },

  filterItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "12px",
    cursor: "pointer",
    fontSize: "14px",
  },

  results: {
    flex: 1,
  },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "18px",
    marginBottom: "25px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardLeft: {
    maxWidth: "600px"
  },

  badge: {
  display: "inline-block",
  color: "white",
  padding: "6px 14px",
  borderRadius: "20px",
  fontSize: "12px",
  marginBottom: "12px",
  fontWeight: "500"
},


  title: {
    marginBottom: "6px"
  },

  date: {
    fontSize: "13px",
    color: "#777",
  },

  summary: {
    marginTop: "8px",
    color: "#444",
  },

  buttons: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  viewBtn: {
    padding: "10px 18px",
    backgroundColor: "#1976d2",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },

  downloadBtn: {
    padding: "10px 18px",
    backgroundColor: "#e3f2fd",
    color: "#1976d2",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default ResourceList;
