import { useState } from "react";

function Admin() {
  const [form, setForm] = useState({
    title: "",
    summary: "",
    fileType: ""
  });

  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // mock upload
    console.log("Uploaded:", form);

    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
      setForm({ title: "", summary: "", fileType: "" });
    }, 2000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Admin Upload Panel</h2>
        <p style={styles.subtitle}>
          Upload academic resources to Smart Campus AI
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Resource Title"
            value={form.title}
            required
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            style={styles.input}
          />

          <textarea
            placeholder="Short Summary"
            value={form.summary}
            required
            onChange={(e) =>
              setForm({ ...form, summary: e.target.value })
            }
            style={styles.textarea}
          />

          <select
            value={form.fileType}
            required
            onChange={(e) =>
              setForm({ ...form, fileType: e.target.value })
            }
            style={styles.select}
          >
            <option value="">Select File Type</option>
            <option value="PDF">PDF</option>
            <option value="Notes">Notes</option>
            <option value="Research Paper">Research Paper</option>
            <option value="Presentation">Presentation</option>
          </select>

          <button type="submit" style={styles.button}>
            Upload Resource
          </button>

          {success && (
            <p style={styles.success}>
              ✅ Resource Uploaded Successfully!
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "90vh",
    backgroundColor: "#f4f8ff",
    padding: "40px"
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
    width: "450px"
  },
  subtitle: {
    marginBottom: "25px",
    color: "#666"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "18px"
  },
  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd"
  },
  textarea: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    minHeight: "90px",
    resize: "none"
  },
  select: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ddd"
  },
  button: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#1976d2",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "500"
  },
  success: {
    marginTop: "10px",
    color: "green",
    fontWeight: "500"
  }
};

export default Admin;
