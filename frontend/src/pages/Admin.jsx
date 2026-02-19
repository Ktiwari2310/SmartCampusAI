import { useState } from "react";

function Admin() {
  const [form, setForm] = useState({
    title: "",
    summary: "",
    fileType: "PDF Document",
    file: null
  });

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();
  data.append("title", form.title);
  data.append("summary", form.summary);
  data.append("fileType", form.fileType);
  data.append("file", form.file);

  try {
    const response = await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: data
    });

    const result = await response.json();
    console.log(result);

    setSuccess(true);
  } catch (error) {
    console.error("Upload failed:", error);
  }
};


  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.iconCircle}>📄</div>

        <h2 style={styles.heading}>Admin Upload Panel</h2>
        <p style={styles.subtitle}>
          Upload academic resources to the Smart Campus AI repository
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Resource Title</label>
          <input
            type="text"
            placeholder="e.g. Introduction to Quantum Physics"
            value={form.title}
            required
            onChange={(e) =>
              setForm({ ...form, title: e.target.value })
            }
            style={styles.input}
          />

          <label style={styles.label}>Short Summary</label>
          <textarea
            placeholder="Provide a brief overview of the academic content..."
            value={form.summary}
            required
            onChange={(e) =>
              setForm({ ...form, summary: e.target.value })
            }
            style={styles.textarea}
          />

          <label style={styles.label}>File Type</label>
          <select
            value={form.fileType}
            onChange={(e) =>
              setForm({ ...form, fileType: e.target.value })
            }
            style={styles.select}
          >
            <option>PDF Document</option>
            <option>Notes</option>
            <option>Research Paper</option>
            <option>Presentation</option>
          </select>

          <label style={styles.label}>File Attachment</label>

          <div style={styles.uploadBox}>
  <input
    type="file"
    accept=".pdf,.pptx,.docx"
    onChange={(e) =>
      setForm({ ...form, file: e.target.files[0] })
    }
    style={styles.fileInput}
  />

  <div>
    <div style={styles.uploadIcon}>☁️</div>

    {form.file ? (
      <div>
        <p style={{ margin: "8px 0", fontWeight: "500" }}>
          {form.file.name}
        </p>
        <small style={{ color: "#777" }}>
          {(form.file.size / 1024).toFixed(2)} KB
        </small>
      </div>
    ) : (
      <p style={{ margin: "8px 0" }}>
        Click to browse or drag and drop
      </p>
    )}

    <small style={{ color: "#777" }}>
      Maximum file size: 50MB (PDF, PPTX, DOCX)
    </small>
  </div>
</div>


          <button type="submit" style={styles.button}>
            ⬆ Upload Resource
          </button>

          {success && (
            <p style={styles.success}>
              ✅ Resource Uploaded Successfully!
            </p>
          )}
        </form>

        <div style={styles.footerText}>
          AUTHORIZED ADMIN ACCESS ONLY
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f4f8ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px"
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
    width: "480px",
    textAlign: "center"
  },
  iconCircle: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    backgroundColor: "#e3f2fd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    margin: "0 auto 20px auto"
  },
  heading: {
    marginBottom: "8px"
  },
  subtitle: {
    color: "#666",
    marginBottom: "30px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    textAlign: "left"
  },
  label: {
    fontSize: "14px",
    fontWeight: "500"
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
  uploadBox: {
    position: "relative",
    border: "2px dashed #cfd8dc",
    borderRadius: "15px",
    padding: "30px",
    textAlign: "center",
    cursor: "pointer",
    backgroundColor: "#fafcff"
  },
  fileInput: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0,
    cursor: "pointer",
    top: 0,
    left: 0
  },
  uploadIcon: {
    fontSize: "28px"
  },
  button: {
    marginTop: "15px",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    backgroundColor: "#1976d2",
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "16px"
  },
  success: {
    marginTop: "10px",
    color: "green",
    fontWeight: "500"
  },
  footerText: {
    marginTop: "25px",
    fontSize: "12px",
    letterSpacing: "1px",
    color: "#888"
  }
};

export default Admin;