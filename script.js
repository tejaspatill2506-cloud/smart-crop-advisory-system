function getAdvice() {
  const city = document.getElementById("city").value;
  const soil = document.getElementById("soil").value;
  const season = document.getElementById("season").value;

  fetch(`http://127.0.0.1:5000/weather/${city}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("output").innerHTML =
        `<h3>🌦 Weather</h3>
         Temperature: ${data.main.temp} °C<br>
         Humidity: ${data.main.humidity}%`;
    });

  fetch("http://127.0.0.1:5000/recommend", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ soil, season })
  })
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      document.getElementById("output").innerHTML +=
        `<h3>🌾 Recommended Crop: ${item.crop}</h3>
         Fertilizer: ${item.fertilizer}<br>
         Pesticide: ${item.pesticide}<br>`;
    });
  });
}
