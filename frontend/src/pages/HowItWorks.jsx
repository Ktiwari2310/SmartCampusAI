function HowItWorks() {
  const steps = [
    "Upload Content",
    "Generate Embeddings",
    "Store in Vector DB",
    "User Query",
    "Semantic Search",
    "Display Results"
  ];

  return (
    <div style={{ padding: "40px" }}>
      {steps.map((step, index) => (
        <div key={index} style={cardStyle}>
          <h3>Step {index + 1}</h3>
          <p>{step}</p>
        </div>
      ))}
    </div>
  );
}

const cardStyle = {
  background: "#f9f9f9",
  padding: "20px",
  margin: "10px",
  borderRadius: "10px"
};

export default HowItWorks;
