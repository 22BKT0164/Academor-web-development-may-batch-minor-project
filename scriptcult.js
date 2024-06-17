// Sample data for monument and cultural significance
const data = [
    { name: "Taj Mahal", significance: "Symbol of love; Fusion of Persian, Islamic, and Indian architecture" },
    { name: "Qutub Minar", significance: "Victory and cultural assimilation; Indo-Islamic architecture" },
    { name: "Red Fort", significance: "Seat of Mughal power; Architectural marvel of Mughal era" },
    { name: "Hawa Mahal", significance: "Iconic Rajput architecture; Cultural heritage of Jaipur" },
    { name: "Ajanta Caves", significance: "Buddhist rock-cut caves; Spiritual and artistic significance" },
    { name: "Mysore Palace", significance: "Cultural symbol of Karnataka; Blend of Hindu, Rajput, and Muslim styles" },
    { name: "Victoria Memorial", significance: "Colonial architecture; Tribute to Queen Victoria" },
    { name: "Lotus Temple", significance: "Bahá'í House of Worship; Symbol of peace and unity" },
    { name: "Charminar", significance: "Symbol of Hyderabad; Blend of Indo-Islamic architecture" },
    { name: "Konark Sun Temple", significance: "Architectural marvel; Dedicated to the Sun God Surya" }
];

// Create a mindmap using D3.js
const svg = d3.select("#mindmap")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("viewBox", "0 0 1000 800")
    .attr("preserveAspectRatio", "xMidYMid meet")
    .append("g");

// Add circles for each monument
const circles = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => (i % 5) * 200 + 100)
    .attr("cy", (d, i) => Math.floor(i / 5) * 200 + 100)
    .attr("r", 50)
    .attr("fill", "#1f77b4");

// Add monument names
const text = svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", (d, i) => (i % 5) * 200 + 100)
    .attr("y", (d, i) => Math.floor(i / 5) * 200 + 100 + 5)
    .attr("text-anchor", "middle")
    .attr("fill", "#fff")
    .text(d => d.name);

// Add cultural significance as title
text.append("title")
    .text(d => d.significance);