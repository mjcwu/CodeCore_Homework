
const readLine = require("readline");
const interface = readLine.createInterface( {
input: process.stdin,
output: process.stdout
});

const headLine = (header) => {
  interface.question(header, userAns => {
    console.log(userAns)
    switch(userAns){
      case 'v':
        console.log('viewing')
        list();
        break;
      case 'n':
        console.log('What?')

    }
    process.exit();
  });
}
const doList=[]
const list = () =>{
  if(doList===undefined||doList.length ===0){
    console.log('List is emtpy.....Nothing to show')
  }
}

headLine(`Welcome to TODO CLI! \n --------------------------------------------------------\n(v) View • (n) New • (cX) Complete • (dX) Delete • (q) Quit\n`)