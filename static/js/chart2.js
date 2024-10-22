// Laatste 5 temperatuurwaarden (pas dit aan)
const temperatures = [22, 24, 23, 25, 26]; // Voorbeeldwaarden
const labels = [
  "5 min geleden",
  "10 min geleden",
  "15 min geleden",
  "20 min geleden",
  "25 min geleden",
];

const tempData = {
  labels: labels,
  datasets: [
    {
      label: "Temperatuur (°C)",
      data: temperatures,
      backgroundColor: "#FF6384",
      borderColor: "#FF6384",
      borderWidth: 1,
    },
  ],
};

const tempConfig = {
  type: "bar",
  data: tempData,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 40, // Max temperatuur op de Y-as
        title: {
          display: true,
          text: "Temperatuur (°C)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Tijd",
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Verberg de legende voor één dataset
      },
    },
  },
};

const tempCtx = document.getElementById("temperatureBarChart").getContext("2d");
const temperatureBarChart = new Chart(ctx, config);
