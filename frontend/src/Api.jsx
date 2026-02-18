// Fake API (Mock Data)

const mockData = [
  {
    title: "Data Structures Notes",
    summary: "Complete DSA handwritten notes for semester 3.",
    fileType: "PDF",
    relevanceScore: 0.92
  },
  {
    title: "AI Research Paper",
    summary: "Introduction to AI embeddings and semantic search.",
    fileType: "Research Paper",
    relevanceScore: 0.87
  }
];

export const searchResources = (query) => {
  return new Promise((resolve) => {
    const filtered = mockData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.summary.toLowerCase().includes(query.toLowerCase())
    );
    resolve(filtered);
  });
};
