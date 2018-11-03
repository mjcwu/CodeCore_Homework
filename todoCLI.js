
const readLine = require("readline");
const interface = readLine.createInterface( {
  input: process.stdin,
  output: process.stdout
});
const doList=[]
const uncheck='[ ]'
const checked='[💯]'
const menu = `(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit`
masterList=[]
const headLine = (header) => {
  interface.question(header, (userAns) => {
    if(userAns==='v'){
      list()
      headLine(`\n${menu}\n`);
    } else if (userAns==='n'){
      interface.question('What?\n', (addList) => {
      masterList = list(addList)
      headLine(`\n${menu}\n`);
      });
    } else if(userAns.charAt(0)==='c' && Number.isInteger(parseInt(userAns.charAt(1)))){
      masterList[(parseInt(userAns.charAt(1)))].complete = checked
      console.log(Object.values(masterList[parseInt(userAns.charAt(1))]).join(' '))
      headLine(`\n${menu}\n`);
    } else if(userAns.charAt(0)==='d' && Number.isInteger(parseInt(userAns.charAt(1)))){
      let index=parseInt(userAns.charAt(1))
      let deleteList = masterList.splice(index, 1)
      console.log(`Deleted \"${deleteList[0].task}\"`)
      headLine(`\n${menu}\n`);
    } else if(userAns==='q'){
      console.log('bye')
      process.exit();
    } else {
      headLine(`Can not read, try again\n`);
    }
  });
}

const list = (newList) =>{  
  if(doList.length ===0 && newList===undefined){
    console.log('List is emtpy.....Nothing to show')
  }else if(newList!=undefined) {
    doList.push({index: doList.length, complete: uncheck, task: newList})
    console.log(`\n\"${newList}\" added`)
  } else {
    for(let value of doList){
      console.log(Object.values(value).join(' '));
    }
  }
  return doList;
}




headLine(`Welcome to TODO CLI! \n --------------------------------------------------------\n(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit\n`)