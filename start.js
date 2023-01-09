const t = require('./typescript_files/index.js')
const {fileExist} = require('./typescript_files/index.js')

// getting default export
console.log(t.default())

// getting named export
console.log(t.fileExist())

//getting named export
console.log(fileExist())