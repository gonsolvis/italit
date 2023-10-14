# Italian Learning Website - README

## Overview

This React application is designed to serve as an Italian learning platform. It utilizes React Router for navigation and modular components for different sections of the website.

## File Structure

**Key Files and Directories:**

- `App.js`: The main entry point of your application, setting up routing.
- `DataFolder`: Contains lesson and level data.
- `NavFooter`: Navigation and footer components.
- `Home`: The main landing page.
- `LevelChoice`: Component for selecting learning levels.
- `IndividualLevelLandingPage`: Displays lessons for specific levels.
- `IndividualLesson`: Displays individual lessons with associated games.
- `GameStructure`: Sets up the game structure.
- `NotFoundPage`: The 404 error page for missing routes.

## Routing

The application uses `react-router-dom` to handle routing. Different pages are defined using the `<Route>` component and organized within the `<Routes>` element.

- Root URL ("/"): Displays the `Home` component.
- "/level_choice" URL: Displays the `LevelChoice` component.
- Lessons and game URLs are dynamically generated based on the data in the `LESSONS_BREAKDOWN` and `LESSONS_INDEX` arrays.

## Data Management

Data for lessons, levels, and games is stored in the `DataFolder` directory. These data structures are used to dynamically generate routes and content within the application.

## Usage

To run this application:

1. Ensure you have Node.js and npm installed.
2. Open your terminal.
3. Navigate to the project directory.
4. Run `npm install` to install the project's dependencies.
5. Run `npm start` to start the development server.
6. Open your web browser and visit the URL provided by the development server (usually `http://localhost:5173`) to view your Italian learning website.

## Customize and Extend

You can customize and extend this website by modifying the components and data in your project. To add more lessons, levels, or games, update the data structures in the `DataFolder` directory. To create new components, follow the structure of existing components.

Feel free to make changes and enhancements to meet your specific Italian learning needs!

## TODO

- [ ] Add more lesson content for learners.
- [ ] Make it completely responsive including different size devices.
- [ ] Fix deployment issues.
- [ ] Improve the UI/UX design of the website.
- [ ] Add back end using SQL and ironlauncher.
- [ ] Implement user authentication for personalized learning, can use ironlauncher.
- [ ] Deploy back.
- [ ] Refactor using more react hooks.
- [ ] Write tests for the application to ensure reliability.


Enjoy building your Italian learning website! 🇮🇹📚🌐
