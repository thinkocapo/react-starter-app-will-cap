# react-starter-app-will-cap
### Description
Starter App for React, utilizes Webpack, Babel, React-Bootstrap, React-Scripts

### Steps:
 1. `git clone https://github.com/thinkocapo/react-starter-app-will-cap.git && cd react-starter-app-will-cap`
 2. `npm install`
 3. `npm start` (or `npm run build` first if npm start fails)
 4. Go to `http://localhost:3000/` in a new browser tab

### How I made this:
I used [Webpack Configuration for using Bootstrap and React](https://medium.com/@vladbezden/webpack-configuration-for-using-bootstrap-in-react-a6ef2dfa1d95) because I had trouble getting Webpack.config.js to link bootstrap-react properly. But this didn't feature *react-scripts* from create-react-app so I `npm install react-scripts`'d and added `"start": "react-scripts start"` to package.json's scripts key, so now I can run `npm start` instead of manually opening `public/index.html` and re-reunning `npm build` everytime I make a change. Now it re-builds and re-runs automatically everytime a change is saved to a file in the project.

*React-scripts* is a binary that gets added to `node_modules/.bin react-scripts` when you npm install it, so this is why the command in `npm start` now works. React-scripts also looks for `index.html` in the `public` directory so I had to mkdir `public` and put index.html there. Same for `src/index.js`.
