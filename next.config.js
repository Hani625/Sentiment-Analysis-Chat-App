/* next.config.js */
    
const webpack = require('webpack');
require('dotenv').config();
    
module.exports = {

  // The DefinePlugin allows you to create global constants which can be configured at compile time. 
  // This can be useful for allowing different behavior between development builds and release builds. 
  // If you perform logging in your development build but not in the release build you might use a global 
  // constant to determine whether logging takes place. 
  // That's where DefinePlugin shines, set it and forget it rules for development and release builds.
  webpack: config => {
    const env = Object.keys(process.env).reduce((acc, curr) => {
      acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);
      return acc;
    }, {});
        
    config.plugins.push(new webpack.DefinePlugin(env));
        
    return config;
  }

};
