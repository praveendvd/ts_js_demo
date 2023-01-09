/**
 * This function transpiles TS file
 * to JS on Runtime
 */
 const tsNode = require('ts-node');
 let json = require('json5');
 let fs = require ('fs-extra')
 
 //register compiler with tsconfig
 let tsconfig = {
    compilerOptions: {
      /** read existing tsconfig
       * json5.parses json with comments to proper json
      */
      ...json.parse(fs.readFileSync(`${__dirname}/tsconfig.json`)).compilerOptions,
    },
    transpileOnly: true,
  };
  
  tsNode.register(tsconfig);
  
  module.exports = require('./checkFile');