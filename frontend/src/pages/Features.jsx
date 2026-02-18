import { useState } from "react";

function Features() {
  const [activeIndex, setActiveIndex] = useState(null);

  const features = [
    {
      title: "Semantic Search",
      icon: "🔍",
      description:
        "Understands the meaning behind your query instead of just matching keywords. Provides context-aware and intelligent results."
    },
    {
      title: "AI Summarization",
      icon: "🧠",
      description:
        "Automatically generates concise summaries from long academic documents to save students valuable time."
    },
    {
      title: "Multi-Modal Support",
      icon: "📄",
      description:
        "Supports PDFs, lecture notes, research papers, presentations, and multiple file formats in one platform."
    },
    {
      title: "Personalized Recommendations",
      icon: "🎯",
      description:
        "Suggests relevant academic resources based on your department and previous search activity."
    }
  ];

  const handleClick = (index) => {
    // If same card clicked, close it
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Key Features</h2>

      <div style={styles.grid}>
        {features.map((feature, index) => (
          <div
            key={index}
            style={{
              ...styles.card,
              backgroundColor:
                activeIndex === index ? "#dbeeff" : "#ffffff"
            }}
            onClick={() => handleClick(index)}
          >
            <h3>
              {feature.icon} {feature.title}
            </h3>

            {activeIndex === index && (
              <p style={styles.description}>
                {feature.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "100px 40px",
    textAlign: "center",
    backgroundColor: "#f7fbff",
    minHeight: "100vh"
  },

  heading: {
    fontSize: "28px",
    marginBottom: "60px"
  },

  grid: {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "30px",
  maxWidth: "1100px",
  margin: "auto",
  alignItems: "start"   // ⭐ THIS FIXES IT
},


  card: {
    padding: "30px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    textAlign: "left",
    minHeight: "120px"
  },

  description: {
    marginTop: "15px",
    color: "#444",
    lineHeight: "1.6"
  }
};

export default Features;
