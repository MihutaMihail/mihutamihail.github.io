## Table of Contents
- [Development](#development)
- [Installation](#installation)
- [Usage](#usage)

## Development

This section will explain the procedure to prepare your environment and start developing.

1. **Clone the Repository**

    Use Git to clone the repository to your local machine:
    ```bash
    git clone https://github.com/MihutaMihail/mihutamihail.github.io
    cd mihutamihail.github.io
    ```

2. **Install Dependencies**

    Run `npm install` to read the `package.json` file and install all dependencies:
    ```bash
    cd showcase-app
    npm install
    ```

4. **Run the Application**
    
    Start the development server:
    ```bash
    npm start
    ```

## Installation

This section will explain how to install React

1. **Create React App**

    Install React App using npx:
    ```bash
    npx create-react-app my-react-app
    cd my-react-app
    ```

2. **Install `gh-pages`**

    Install `gh-pages` as a development dependency:
    ```bash
    npm install gh-pages --save-dev
    ```

3. **Install `react-router-dom`**

    Install `react-router-dom` to manage routing between components:
    ```bash
    npm install react-router-dom
    ```

4. **Update `package.json`**

    Add the homepage field to specify the path where the app will be hosted:
    ```json
    "name": "my-react-app",
    "version": "0.1.0",
    "homepage": "https://username.github.io/repo-name",
    "private": true
    ```

    Update the scripts section to include:
    ```json
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
        }
    ```

5. **Deploy the App**

    Run the following command to deploy your App to Github Pages
    ```bash
    npm run deploy
    ```

    **Don't forget to change in the *Pages* settings inside your Github Repository to use the `gh-pages` branch as the one that the site is built off.**

## Usage

### Local Development

This section will explain how to start the development server of development purposes or how to deploy your app to GitHub Pages

1.  **Start the development server**

    Run the following command to start the local developments server
    ```bash
    npm start
    ```

### Deployment to GitHub Pages

2.  **Deploy the application**

    Run the following command to build and deploy your application to GitHub Pages
    ```bash
    npm run deploy
    ```
    