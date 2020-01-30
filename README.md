# Build a webshop.

## Project assignment.

This project is an assignment i got from [Codaisseur](https://github.com/facebook/create-react-app).
If you are interested in following a coding bootcamp to kickstart a job as a webdevloper in 10 weeks you can visit their [site](https://github.com/facebook/create-react-app).

### Learning Objectives

Build a simple webshop using the following techniques.

- Setting up Redux
- Get the state of the Redux store adn using it in your component
- Dispatching actions to the Redux store to change its state
- Writing reusable actions (action creators - functions that return actions)
- Using async actions (thunks)
- If you refresh any page your app shouldn't crash (each component should be able - to fetch its own data)
- (If resfreshing empties your shoppingcart that's fine)

look at [ProjectAssignment.md](ProjectAssignment.md) for more detailed information.

### Detailed project description

The project should contain the following:

- Displaying products to the user in various ways
- Users can add products to their cart or remove products from their cart
- Users can go to a checkout page that shows their total
- Users can finalize their order by filling out a form with their personal - information
- Users can search the webshop for a specific product

I chose to make a webshop to sell second hand cars.

## Requirements.

### Tools.

During the assignment i will be using the following tooling. Some of them i will give a brief description.

- Visual studio code
- React
- Redux
- Redux-thunk

#### Setup Redux Store

- store.js with redux-devtools & redux-thunk
- a ./reducers folder with an index.js that combines all your reducers usinig - combineReducers()
- At least 1 reducer with an initial state
- Wrapping your app in the <Provider> component in index.js
- npm start your app and check redux-devtools to see if you've got an initial - state

# Information from create-react-app.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
