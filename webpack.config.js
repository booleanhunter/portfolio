var webpack = require('webpack');
var bower_dir = __dirname + '/bower_components',
    node_dir = __dirname + '/node_modules',
    lib_dir = __dirname + '/private/js/libs';

var config = {
    resolve: {
        alias: {
            react: bower_dir + '/react/react.min.js',
            jquery: lib_dir + '/jquery-1.11.2.min.js',  
            //elastic: lib_dir + '/jquery.elastic.source.js',
        }
    }, 
    plugins: [
    // new webpack.ProvidePlugin({
    //    	jQuery: "jquery",
    // }),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
    ],

    entry: {
        app: ['./private/js/main.js'],
        vendors: ['react','jquery'] //,'elastic'
    },

    output: {
        path: './private/js',
        filename: 'bundle.js'
    },

    module: {
        noParse: [
            new RegExp(bower_dir + '/react/react.min.js'),
            new RegExp(lib_dir +'/jquery-1.11.2.min.js'),
        ],
        loaders: [
            { 
                test: /\.js$/, 
                loader: 'jsx-loader' 
            }, 
        ]
    }
};

module.exports = config; 

/*
----------
View package.json for more configuration details

npm run dev will run webpack-dev-server with the arguments specified (--devtool eval --progress --colors --content-base build)

1. --devtool eval will add source urls to your code, which will make sure that any errors point to the right file and line.
2. --progress and --colors will just improve the feedback you get in the terminal when running your workflow.
3. --content-base build points to where you have your custom index.html located.
----------
Since we are using React, we need to evaluate XML along with JS.  This can be done by using jsx-loader. npm insstall jsx-loader --save will make 
the module available, and then we specify the loader in here- {test:/\.js$/,loader: 'jsx-loader'}. This tells
WebPack that whenever we try to require something that ends with .js it should run the contents of that file through the jsx-loader. 
----------

"scripts": {
"dev": "webpack-dev-server --devtool eval --progress --colors --content-base views/"
},

The resolve.alias object takes require expressions  (require('react')) as keys and filepath to actual
module as values

*/