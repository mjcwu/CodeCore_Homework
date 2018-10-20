

const readLine = require("readline");
const fs = require("fs");
const uncheck='[ ]'
const checked='[💯]'
const readFile = (fileName) =>{ 
  let dataFromFile = []
  dataFromFile = JSON.parse(fs.readFileSync(fileName, 'utf8'))
  for(let val of dataFromFile) {
    if (Object.values(val)[0]){
      Object.values(val)[0].toString() = checked
      console.log(Object.values(val)[0].toString())
     } else {
     Object.values(val)[0] === uncheck
    }
    // console.log(dataFromFile)
    //return dataFromFile
}
}

console.log(readFile("myTodos.json"))

