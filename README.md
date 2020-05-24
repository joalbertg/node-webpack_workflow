# Webpack Flow

* Link [Webpack Worflow | Sass, Handlebars, Css, Imagenes y más][tutorial]
* Link [webpack][webpack]
* Link [webpack-dev-server][webpack_dev_server]
* Link [html-webpack-plugin][html_webpack_plugin]
* Link [mini-css-extract-plugin][mini_css_extract_plugin]
* Link [css-loader][css_loader]
* Link [handlebars][handlebarsjs]
* Link [handlebars-loader][handlebars_loader]

[tutorial]: https://youtu.be/7e5apiL6tVQ
[webpack]: https://webpack.js.org/
[webpack_dev_server]: https://github.com/webpack/webpack-dev-server
[html_webpack_plugin]: https://github.com/jantimon/html-webpack-plugin
[mini_css_extract_plugin]: https://github.com/webpack-contrib/mini-css-extract-plugin
[css_loader]: https://github.com/webpack-contrib/css-loader
[handlebarsjs]: https://handlebarsjs.com/
[handlebars_loader]: https://github.com/pcardune/handlebars-loader

## Install


```shell
docker-compose run app yarn add handlebars node-sass rimraf
docker-compose run app yarn add --dev webpack webpack-cli html-webpack-plugin handlebars handlebars-loader css-loader mini-css-extract-plugin sass-loader node-sass autoprefixer postcss-loader file-loader webpack-dev-server
```

## build

```shell
docker-compose run app yarn build
```

## devServer

```shell
docker-compose up
```

