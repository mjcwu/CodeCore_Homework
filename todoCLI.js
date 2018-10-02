
const readLine = require("readline");
const interface = readLine.createInterface( {
input: process.stdin,
output: process.stdout
});
const menu = `(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit`
const headLine = (header) => {
  interface.question(header, (userAns) => {
    if(userAns==='v'){
      list();
      headLine(`\n${menu}\n`);
    } else if (userAns==='n'){
      interface.question('What?\n', (addList) => {
        list(addList)
      });
      headLine(`\n${menu}\n`);
    } else if(userAns.charAt(0)==='c' && userAns.length===2){

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
  }else if(newList!=undefined && newList!='null'){
    doList.push(`${doList.length+1} ${uncheck} ${newList}`)
  }
  console.log(`\n${doList.join('\n')}`)
  return headLine(`${menu}\n`);
}



headLine(`Welcome to TODO CLI! \n --------------------------------------------------------\n(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit\n`)