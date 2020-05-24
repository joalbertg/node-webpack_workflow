# Webpack Workflow

* [Webpack Worflow | Sass, Handlebars, Css, Imagenes y más][tutorial]

* [webpack][webpack]
* [handlebars][handlebarsjs]
* [node-sass][node_sass]
* [rimraf][rimraf]

* [webpack-dev-server][webpack_dev_server]
* [webpack-cli][webpack_cli]
* [html-webpack-plugin][html_webpack_plugin]
* [mini-css-extract-plugin][mini_css_extract_plugin]
* [css-loader][css_loader]
* [handlebars-loader][handlebars_loader]
* [sass-loader][sass_loader]
* [file-loader][file_loader]

[tutorial]: https://youtu.be/7e5apiL6tVQ

[handlebarsjs]: https://handlebarsjs.com/
[node_sass]: https://github.com/sass/node-sass
[rimraf]: https://github.com/isaacs/rimraf

[webpack]: https://webpack.js.org/
[webpack_cli]: https://github.com/webpack/webpack-cli
[html_webpack_plugin]: https://github.com/jantimon/html-webpack-plugin
[handlebars_loader]: https://github.com/pcardune/handlebars-loader
[css_loader]: https://github.com/webpack-contrib/css-loader
[mini_css_extract_plugin]: https://github.com/webpack-contrib/mini-css-extract-plugin
[sass_loader]: https://github.com/webpack-contrib/sass-loader
[file_loader]: https://github.com/webpack-contrib/file-loader
[webpack_dev_server]: https://github.com/webpack/webpack-dev-server

## Install

```shell
docker-compose run app yarn add handlebars node-sass rimraf
docker-compose run app yarn add --dev webpack webpack-cli html-webpack-plugin handlebars-loader css-loader mini-css-extract-plugin sass-loader file-loader webpack-dev-server
```

## Project Structure

> run `tree -I 'node_modules'`.

```shell
.
├── Dockerfile
├── README.md
├── docker-compose.yml
├── package.json
├── src
│   ├── app.js
│   ├── index.handlebars
│   ├── partials
│   │   ├── footer.handlebars
│   │   └── navigation.handlebars
│   ├── static
│   │   └── react.png
│   └── styles
│       ├── _variables.scss
│       └── main.scss
├── webpack
│   └── webpack.config.js
└── yarn.lock

5 directories, 13 files
```

## build

```shell
docker-compose run app yarn build
```

## devServer

```shell
docker-compose up
```

