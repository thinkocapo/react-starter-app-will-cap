# react-starter-app-will-cap
### Description
Starter App for React, utilizes Webpack, Babel, React-Bootstrap, React-Scripts

### Steps:
 1. `git clone https://github.com/thinkocapo/react-starter-app-will-cap.git && cd react-starter-app-will-cap`
 2. `npm install`
 3. `npm start` (or `npm run build` first if npm start fails)
 4. Go to `http://localhost:3000/` in a new browser tab

### How I made this:
I used this tutorial repo [Webpack Configuration for using Bootstrap and React](https://medium.com/@vladbezden/webpack-configuration-for-using-bootstrap-in-react-a6ef2dfa1d95) because I had trouble getting Webpack.config.js to link bootstrap-react properly. But the tutorial featured a `npm run build` step but after that I couldn't get it to run off of `Node` or in localhost, I had to manually open the `index.html` file. And `npm start` didn't have a script associated to it because it lacked *react-scripts* binary, which normally comes with the [create-react-app](https://github.com/facebookincubator/create-react-app) so I `npm install react-scripts`'d and added `"start": "react-scripts start"` to package.json's scripts key, so now I can run `npm start` instead of manually opening `public/index.html` and re-reunning `npm build` everytime I make a change. Now it re-builds and re-runs automatically everytime a change is saved to a file in the project.

*React-scripts* is a binary that gets added in `node_modules/.bin/react-scripts` when you npm install it, and this is what the command in `npm start` invokes. React-scripts also looks for `index.html` in the `public` directory so I had to mkdir `public` and put index.html there. Same for `src/index.js`.
