const t = require('./typescript_files/checkFile.ts')
const {fileExist} = require('./typescript_files/checkFile.ts')

console.log(t.default())

console.log(t.fileExist())

console.log(fileExist())