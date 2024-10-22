# Project Setup Instructions

To set up this project, follow these steps:


1. **Clone the Repository**:
    First, clone the repository to your local machine using the following command:

    ```bash
    git clone https://github.com/yourusername/flask-dashboard-w-mqtt.git
    ```

2. **Navigate to the Project Directory**:
    Change your working directory to the project folder:

    ```bash
    cd flask-dashboard-w-mqtt
    ```

3. **Create a Virtual Environment**:
    Set up a virtual environment to manage your project dependencies:

    ```bash
    python -m venv venv
    ```

4. **Activate the Virtual Environment**:
    Activate the virtual environment. The command varies depending on your operating system:

    - On Windows:

      ```bash
      .\venv\Scripts\activate
      ```

    - On macOS and Linux:

      ```bash
      source venv/bin/activate
      ```

5. **Install Python Dependencies**:
    Install the required Python packages using `pip`:

    ```bash
    pip install -r requirements.txt
    ```

6. **Set Up Environment Variables - not necessary at this point**:
    Create a `.env` file in the root directory of the project and add your environment-specific variables. For example:

    ```env
    FLASK_APP=app.py
    FLASK_ENV=development
    MQTT_BROKER_URL=your_mqtt_broker_url
    MQTT_BROKER_PORT=your_mqtt_broker_port
    ```

7. **Run the Flask Application**:
    Start the Flask development server:

    ```bash
    flask run
    ```

8. **Access the Application**:
    Open your web browser and navigate to `http://127.0.0.1:5000` to view the application.


## Setting Up Tailwind CSS
1. **Install Tailwind CSS**:
    Make sure you have Node.js installed. Then, run the following command to install Tailwind CSS:

    ```bash
    npm install -D tailwindcss
    ```

2. **Initialize Tailwind CSS**:
    Create a `tailwind.config.js` file by running:

    ```bash
    npx tailwindcss init
    ```

3. **Configure Tailwind CSS**:
    In your `tailwind.config.js` file, configure the paths to all of your template files:

    ```javascript
    module.exports = {
      content: [
         './templates/**/*.html',
         './static/**/*.js',
      ],
      theme: {
         extend: {},
      },
      plugins: [],
    }
    ```

4. **Create Input CSS File**:
    Create an input CSS file at `./static/css/input.css` and add the following lines:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

5. **Build Tailwind CSS**:
    Run the following command to build your Tailwind CSS and watch for changes:

    ```bash
    npx tailwindcss -i ./static/css/input.css -o ./static/css/output.css --watch
    ```

6. **Include Output CSS**:
    Make sure to include the generated `output.css` file in your HTML templates.

That's it! Your project should now be set up with Tailwind CSS.