### Project

This project is a React application that uses Redux Toolkit to fetch data from the JSONPlaceholder API
and display posts and photos. It also features a login form that uses local storage to store user 
credentials, and uses React Hook Form for form validation. The project is styled with Tailwind CSS and 
Material UI, and supports internationalization with i18next. Additionally, it uses react-hot-toast to 
display success and error messages.

### Features

- Fetches and displays posts and photos data from JSONPlaceholder API
- Allows deleting existing posts
- Includes pagination for posts
- Allows deleting existing photos
- Includes pagination for photos
- User authentication with a hardcoded user account
- Ability to persist login credentials using localStorage
- Loading spinner when data is being fetched
- Error message display when there is a problem with authentication
- Success message display when there not problem with authentication
- Internationalization with i18next

### Usage
Once the development server is running, open a web browser and navigate to http://localhost:3000. 
The home page will display a list of posts and photos retrieved from the JSONPlaceholder API. 
Clicking on a news will take you to a detailed view of that news.

To access the login form, click the "Login" button in the navigation bar. The form requires 
a valid username and password to submit. If the form is submitted with valid credentials, 
the user will be redirected to the profile page and a success message will be displayed.
If the form is submitted with invalid credentials, an error message will be displayed.

### Technologies

- React
- Type script
- Redux Toolkit
- React Router DOM
- react-hook-form
- Axios
- Tailwind CSS
- Material Ui
- i18next
- react-hot-toast

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
