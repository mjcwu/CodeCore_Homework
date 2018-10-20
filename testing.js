

// const uncheck='[ ]'
// const check='[✓]'

// const obj=[{complete: uncheck, task: "hello"}, {complete: uncheck, task: "ac"}];

// console.log(obj[0].complete, obj[0].task)
// obj[1].complete = check
// console.log(obj[1].complete, obj[1].task)

// const str='c2'
// const str2='cc'

// console.log(Number.isInteger(parseInt(str.charAt(1))))
// console.log(Number.isInteger(parseInt(str2.charAt(1))))

//-------------------------------------------------------------------------


const readLine = require("readline");
const fs = require("fs");

const interface = readLine.createInterface( {
  input: process.stdin,
  output: process.stdout
});

let doList=[]
const uncheck='[ ]'
const checked='[💯]'
const menu = `(v) View • (n) New • (cX) Complete • (dX) Delete • (s) Save • (r) Read• (q) Quit`
masterList=[]

const headLine = (header) => {
  interface.question(header, (userAns) => {
    if(userAns==='v'){
      if(masterList.length ===0){
        console.log('List is emtpy.....Nothing to show');
      } else {
        let viewList = []
        for(let i=0; i<masterList.length;i++){
          viewList.push(`${i} ${Object.values(masterList[i]).join(' ')}\n`);
        }
        console.log(viewList.join(''))
      }
      headLine(`\n${menu}\n`);
    } else if (userAns==='n'){
      interface.question('What?\n', (addList) => {
      masterList = list(addList)
      headLine(`\n${menu}\n`);
      });
    } else if(userAns.charAt(0)==='c' && Number.isInteger(parseInt(userAns.charAt(1)))){
      masterList[(parseInt(userAns.charAt(1)))].completed = checked
      console.log(Object.values(masterList[parseInt(userAns.charAt(1))]).join(' '))
      headLine(`\n${menu}\n`);
    } else if(userAns.charAt(0)==='d' && Number.isInteger(parseInt(userAns.charAt(1)))){
      let index=parseInt(userAns.charAt(1))
      let deleteList = masterList.splice(index, 1)
      console.log(`Deleted \"${deleteList[0].task}\"`)
      headLine(`\n${menu}\n`);
    } else if(userAns==='q'){
      console.log('See you around! 👋👋')
      process.exit();
    } else if(userAns==='r'){
      interface.question('Name of file?\n', (readFileName) => {
      masterList = readFile(readFileName)
      console.log(masterList)
      headLine(`\n${menu}\n`);
      });
    } else if(userAns==='s'){
      interface.question('Name of file?\n', (saveOfFile) => {
      masterList = saveFile(saveOfFile)
      doList = masterList;
      headLine(`\n${menu}\n`);
      });
    } else {
      headLine(`Can not read, try again\n`);
    }
  });
}

const list = (newList) =>{
  doList.push({completed: uncheck, title: newList})
  console.log(`\n\"${newList}\" added`)
  return doList
}

headLine(`Welcome to TODO CLI! \n --------------------------------------------------------\n(v) View • (n) New • (cX) Complete • (dX) Delete • (s) Save • (r) Read• (q) Quit\n`)


const readFile = (fileName) =>{ 
  let dataFromFile = []
  dataFromFile = JSON.parse(fs.readFileSync(fileName, 'utf8'));

  return dataFromFile
}

const saveFile = (storeFile) =>{    
  fs.writeFile(storeFile, storeData.join('\n'), (err) => {
    if(err) {
      console.log(`Could not write file ${err}`);
    } else {
      console.log(`writing to file ${storeFile} done!`);
    }
  });
}


