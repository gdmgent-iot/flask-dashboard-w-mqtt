const currentTemperature = 25; // De huidige temperatuur (pas dit aan)
const maxTemperature = 40; // Max temperatuur

const data = {
  labels: ["Huidige Temperatuur", "Resterende"],
  datasets: [
    {
      data: [currentTemperature, maxTemperature - currentTemperature],
      backgroundColor: ["#FF6384", "#E0E0E0"], // Kleuren voor huidige temp en resterende
      hoverBackgroundColor: ["#FF6384", "#E0E0E0"],
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            if (tooltipItem.dataIndex === 0) {
              return "Temperatuur: " + currentTemperature + "°C";
            }
            return "Maximaal: " + maxTemperature + "°C";
          },
        },
      },
      legend: {
        display: false,
      },
    },
    cutout: "80%", // Voor het donut-effect
    rotation: -90, // Startpositie om bij 0 graden onderaan te beginnen
  },
};

const ctx = document.getElementById("myChart").getContext("2d");
const temperatureChart = new Chart(ctx, config);
