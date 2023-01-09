This Project show how to use Typescript file with commonJs project

Here we create a index.js file which use ts-node register 

this transpiles the ts file to js on run time 


# Installation 

npm install

# Execution

node start.js

# Explanation 

Here start.js is a javascript project , and we want to import the checkFile.ts into it. As typescript is superset of javascript , we cannot theoritically use typescript in javascript . 

This limitation can be overcome using ts-node , a transpiler (ts to js converter)

ts-node can register the typescript file to be transpiled on runtime and there by allows us to use the typescript project in JS project

so for using checkFile.ts , we create a index.js file which uses ts-node.register and then exports the typescript pacakage . This index.js file transforms the exported typescript to js in runtime. Note: VScode understand the workflow so can do lazy loading or intellisence and make over life easier. 

Now instead of importing the checkFile,ts in the start.js file , we imports index.js file . Index.js file exposes all the typescript methods and properties from checkFile.ts to start.js






