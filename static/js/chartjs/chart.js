var sensorNames = ["Sensor 1", "Sensor 2", "Sensor 3", "Sensor 4", "Sensor 5"];
var sensorValues = [20, 35, 40, 50, 65];
var barColors = ["red", "green", "blue", "orange", "purple"];

const chart = new Chart("myChart", {
    type: "bar",
    data: {
        labels: sensorNames,
        datasets: [{
            backgroundColor: barColors,
            data: sensorValues
        }]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: "IoT Sensor Data"
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Sensor Values'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Sensors'
                }
            }
        }
    }
});
