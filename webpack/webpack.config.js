/**
 * dat-gui JavaScript Controller Library
 * http://code.google.com/p/dat-gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

var path = require("path");

module.exports = {
  target: 'web',

  context: path.resolve(__dirname, '..', 'src'),

  entry: {
    main: '../index',

  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader'
      },
    ],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: [["es2015", {"loose": true}], "stage-0"],
          plugins: ["add-module-exports"]
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        loader: 'css-loader!sass-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },

  output: {
    path: path.join(__dirname, '..', 'build'),
    filename: 'dat.gui.js',
    library: ['dat'],
    libraryTarget: 'umd'
  }
};