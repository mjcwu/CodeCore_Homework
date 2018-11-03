

const targetWord = "stranger".split("");
let numOfChance = 0;
let modifiedArr = "stranger".split("");
$(() => { 
  $("body").on("keypress", event =>{
    $(`#char${event.key.toUpperCase()}`).css("background-color", "red");
    const audioDead = document.createElement("audio");
    audioDead.src="./sounds/timetodie.mp3"
    const audioAlive = document.createElement("audio1");
    audioAlive.src="./sounds/applause2.wav"

    // if(modifiedArr.includes(event.key)){
    if(targetWord.includes(event.key)){
      if(!modifiedArr.includes(event.key)){
        alert("Don't use the same word twice");
      } else{
        let targetIndex=repeatedChar(targetWord,event.key)
        console.log("targetIndex", targetIndex)
        
        modifiedArr=removeWords(modifiedArr,event.key)
        console.log("modifiedArr", modifiedArr)
        console.log(`modifiedArr=${modifiedArr}`)
        
        for(let i=0;i<targetWord.length;i++){
          for(let j=0; j<targetIndex.length; j++){
            if(i===targetIndex[j]){
              $(`.guessWord.${i}`).html(`${targetWord[i]}`)
            }
          }
        }
        if(modifiedArr.length===0){
          alert("Congrats! You avoid death penalty");
          audioAlive.play()
          document.location.reload();
        }
      }     
    } else {
      numOfChance+=1;
      if(numOfChance===1){
        $(`#hangmanPic`).css('background-image','url(./images/gallows+head.jpg)');
      } else if(numOfChance===2){
        $(`#hangmanPic`).css('background-image','url(./images/gallows+head+torso.jpg)');
      } else if(numOfChance===3){
        $(`#hangmanPic`).css('background-image','url(./images/gallows+head+torso+leg.jpg)');
      } else if(numOfChance===4){
        $(`#hangmanPic`).css('background-image','url(./images/gallows+head+torso+2leg.jpg)');
      } else if(numOfChance===5){
        $(`#hangmanPic`).css('background-image','url(./images/gallows+head+torso+2leg+arm.jpg)');
      } else if(numOfChance===6){
        $(`#hangmanPic`).css('background-image','url(./images/gallows+head+torso+2leg+2arm.jpg)');
        alert("Time to DIE!!!");
        audioDead.play()
        document.location.reload();
      }
    }
  })
});

function removeWords(modifiedWord, key){
  for(let i=0;i<modifiedWord.length;i++){
    if(key===modifiedWord[i]){
      modifiedWord.splice(i,1)
    }
  }
  return modifiedWord;
}

function repeatedChar(originalWord, key){
  const targetIndex=[]
  for(let i=0;i<originalWord.length;i++){
    if(key===originalWord[i]){
      targetIndex.push(i);
    }
  }
  return targetIndex;
}



