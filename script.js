// Simulação de rota automática no mapa (Leaflet)
const script = document.createElement("script");
script.src = "https://unpkg.com/leaflet/dist/leaflet.js";
document.head.appendChild(script);

script.onload = () => {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://unpkg.com/leaflet/dist/leaflet.css";
  document.head.appendChild(link);

  const map = L.map("map").setView([-12.9714, -38.5014], 13); // Salvador exemplo

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap",
  }).addTo(map);

  const route = [
    [-12.9714, -38.5014],
    [-12.9725, -38.4935],
    [-12.9760, -38.4890],
    [-12.9800, -38.4850],
  ];

  const polyline = L.polyline(route, { color: "#72bcd4", weight: 5 }).addTo(map);
  const marker = L.marker(route[0]).addTo(map);

  let i = 0;
  setInterval(() => {
    i = (i + 1) % route.length;
    marker.setLatLng(route[i]);
  }, 2000);
};
