This User Management Application is a simple web application built using modern web development technologies including Next.js, Redux Toolkit, and Framer Motion. It allows users to view a list of users fetched from a database and navigate to a detailed page for each user to view their information.

## Technologies Used:

Next.js: Next.js is a React framework for building server-side rendered (SSR) and statically generated web applications.

Redux Toolkit: Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development, making it easier to write Redux logic.

Framer Motion: Framer Motion is a library for React that makes it easy to create smooth animations and gestures.

React: React is a JavaScript library for building user interfaces.

## Features:

User List Page: Displays a list of all users fetched from the database.

User Details Page: Allows users to click on a particular user from the list to view detailed information about that user.

Smooth Transitions: Utilizes Framer Motion for smooth animations and transitions between pages and components.

Redux Integration: Uses Redux Toolkit for managing application state, including fetching and storing user data.

Next.js SSR: Utilizes Next.js for server-side rendering, improving performance and SEO.

## Folder Structure:

src: Root directory where all the components and file
app: Containes only navigation pages or entry point of web page
data: Conains only static data for redabele and reusablepurpose
components: Contains reusable React components used throughout the application.
styles: Contains only css styles.
types: Contains the types of data
redux: Contains Redux Toolkit slices for managing application state.

## Getting Started

Clone the repository: git clone <repository-url>
Install dependencies: npm install
Run the development server: npm run dev
Navigate to http://localhost:3000 in your web browser.
