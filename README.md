## Table of Contents
- [Installation](#installation)
- [Usage](#usage)

## Installation

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

3. **Update `package.json`**

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

4. **Deploy the App**

    Run the following command to deploy your App to Github Pages
    ```bash
    npm run deploy
    ```

    **Don't forget to change in the *Pages* settings inside your Github Repository to use the `gh-pages` branch as the one that the site is built off.**

## Usage

### Local Development

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
    