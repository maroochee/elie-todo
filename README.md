# Getting Started with Elie Todo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## How I built this sample project
1. Based on this [tutorial](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
2. Added some custom styling
3. Added Jest for testing and coverage

## What this project implemented
1. Users are able to Add, Edit, Delete, Complete, and Re-Activate todo tasks
2. Users are able to filter todo tasks
3. All todo tasks and current filter status are persistent with localStorage
4. Unit test and coverage report applied (report will be generated both on the screen and lcov report)
5. Dockerfile added
   
## The limits of this project
1. Unit test are not component base, all the test cases are in one test file
2. Unit test covers basic assertions only for the initial app status
3. Coverage threshold are set to 70%, so current unit test fails as it's below the threshold

## How to use Dockerfile
1. In the project directory, build Docker image first
```sh
docker build -t sample/elie-todo .
```
2. Check the Docker image
```sh
docker images
```
3. Run the Docker image
```sh
docker run --name elie-todo -p 4680:3000 -d sample/elie-todo
```
4. Access the app in the browser
```sh
# first, need to get the ip address of our running Docker engine
docker-machine ip default
-> <ip-address-of-docker-engine>

# then visit http://ip-address-of-docker-engine>:4680
docker run --name elie-todo -p 4680:3000 -d sample/elie-todo
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
