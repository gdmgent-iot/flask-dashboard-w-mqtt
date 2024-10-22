
// Import the MQTT library is done in the HTML file
// Connect to the MQTT broker
const client = mqtt.connect('ws://broker.hivemq.com:8000/mqtt'); // Connect to the public HiveMQ broker using WebSocket

// Subscribe to the topic you want to listen to
const topic = 'IOT-test'; // Listen to all topics

client.on('connect', () => {
    console.log('Connected to MQTT broker');
    client.subscribe(topic, (err) => {
        if (!err) {
            console.log(`Subscribed to topic: ${topic}`);
        } else {
            console.error(`Failed to subscribe to topic: ${topic}`, err);
        }
    });
});

// Listen for messages on the subscribed topic
client.on('message', (topic, message) => {
    console.log(`Message received on topic ${topic}: ${message.toString()}`);

    // This line selects the HTML element with the ID 'amount' and accesses its Alpine.js data property '$data'.
    // It then sets the 'value' property of this data object to the integer representation of the 'message' string.
    // 'parseInt(message.toString(), 10)' converts the 'message' to a string and then parses it as a base-10 integer.
    document.querySelector('#amount').__x.$data.value = parseInt(message.toString(), 10);

    // Refresh the page when a message is received
    // location.reload();
});