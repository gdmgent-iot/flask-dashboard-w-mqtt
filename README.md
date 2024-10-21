# Project Setup Instructions

To set up this project, follow these steps:

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