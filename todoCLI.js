
const readLine = require("readline");
const interface = readLine.createInterface( {
input: process.stdin,
output: process.stdout
});
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
    } else if(userAns.charAt(0)==='c' && userAns.length===2){
      
      masterList = completePro(masterList, userAns.charAt(1))
      headLine(`\n${menu}\n`);
    } else if(userAns.charAt(0)==='d' && userAns.length===2){

    } else if(userAns==='q'){
      console.log('bye')
      process.exit();
    } else {
      headLine(`Can not read, try again\n`);
    }
  });
}
const doList=[]
const uncheck='[ ]'
const check='[✓]'

const list = (newList) =>{  
  if(doList.length ===0 && newList===undefined){
    console.log('List is emtpy.....Nothing to show')
  }else if(newList!=undefined) {
    doList.push({index: doList.length, complete: uncheck, task: newList})
    console.log(`\n\"${newList}\" added`)
  } else {
    for(let value of doList){
      console.log(Object.values(value));
    }
  }
  return doList;
}

const completePro = (masterList, itemNum) =>{  
  // let singleList = []
  // singleList = masterList[itemNum].split(' ')
  // singleList = singleList.splice(1,0,'[✓]').join(' ')
  // console.log(singleList)
  console.log(masterList)
  // console.log(typeof singleList)

  // return singleList;
}



headLine(`Welcome to TODO CLI! \n --------------------------------------------------------\n(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit\n`)