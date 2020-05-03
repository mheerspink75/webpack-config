### Webpack Config

*A starter template with webpack dependencies pre-configured*

[![Edit webpack-config](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/github/mheerspink75/webpack-config/tree/master/?fontsize=14&hidenavigation=1&theme=dark)

---

**1.** Clone the repository
```bash
git clone https://github.com/mheerspink75/webpack-config.git
```

**2.** Install the npm packages
```bash
npm install
```

**3.** Run the build with webpack
```bash
// build files output to ./dist
npm run build
```

**4.** Run the webpack dev server
```bash
npm start
```

---

*To install npm packages individually...*

```bash
// webpack 4
npm i webpack

// webpack cli and dev server
npm i webpack-cli webpack-dev-server -D

// html plugin and html loader
npm i html-webpack-plugin html-loader -D

// css, sass and style loader 
npm i css-loader style-loader node-sass sass-loader mini-css-extract-plugin -D

// file loader
npm i file-loader -D

// babel
npm i @babel/core babel-loader @babel/preset-env -D
```