
class Turtle {
  constructor(x,y){
    this.origin=[x,y];
    this.direction='east'; //assume east first
    this.newPoint=[];
    this.newPoint=[x,y]
    this.xArray=[];
    this.xArray[0]=x;
    this.yArray=[];
    this.yArray[0]=y;
    this.stepPoints=[];
    this.stepPoints.push(this.origin);
    this.allStepsPoints=[];
    this.dirArray=['east']; // assume east first
    this.stepLength=[];
  }
  forward(forwardStep){
    this.forwardStep = forwardStep;

    if(this.direction==='north'){
      this.newPoint = [this.newPoint[0], this.newPoint[1]-forwardStep]
      this.xArray.push(this.newPoint[0]);
      this.yArray.push(this.newPoint[1]);
      this.stepPoints.push([this.newPoint[0],this.newPoint[1]]);
      this.stepLength.push(this.forwardStep);
    } else if(this.direction==='east'){
      this.newPoint = [this.newPoint[0]+forwardStep, this.newPoint[1]]
      this.xArray.push(this.newPoint[0]);
      this.yArray.push(this.newPoint[1]);
      this.stepPoints.push([this.newPoint[0],this.newPoint[1]]);
      this.stepLength.push(this.forwardStep);
    } else if(this.direction==='south'){
      this.newPoint = [this.newPoint[0], this.newPoint[1]+forwardStep]
      this.xArray.push(this.newPoint[0]);
      this.yArray.push(this.newPoint[1]);
      this.stepPoints.push([this.newPoint[0],this.newPoint[1]]);
      this.stepLength.push(this.forwardStep);
    } else {
      this.newPoint = [this.newPoint[0]-forwardStep, this.newPoint[1]]
      this.xArray.push(this.newPoint[0]);
      this.yArray.push(this.newPoint[1]);
      this.stepPoints.push([this.newPoint[0],this.newPoint[1]]);
      this.stepLength.push(this.forwardStep);
    }
    return this;
  }
  right(){
    if(this.direction==='north'){
      this.direction='east';
      this.dirArray.push('east');
    } else if(this.direction==='east'){
      this.direction='south';
      this.dirArray.push('south');
    } else if(this.direction==='south'){
      this.direction='west';
      this.dirArray.push('west');
    } else {
      this.direction='north';
      this.dirArray.push('north');
    }
    return this;
  }
  left(){
    if(this.direction==='north'){
      this.direction='west';
      this.dirArray.push('west');
    } else if(this.direction==='east'){
      this.direction='north';
      this.dirArray.push('north');
    } else if(this.direction==='south'){
      this.direction='east';
      this.dirArray.push('east');
    } else {
      this.direction='south';
      this.dirArray.push('south');
    }
    return this;
  }
  allSteps(){
    for(let k=0; k<this.xArray.length; k+=1){
      if(k===0){
          this.allStepsPoints.push([this.xArray[k],this.yArray[k]]);
        for(let i=1; i<= this.stepLength[k] ; i+=1){
          this.allStepsPoints.push([this.xArray[k]+i,this.yArray[k]]);
        } 
        // assume head to east first
      } 
      else if(k!=1 && k!=0){
        if((this.xArray[k]-this.xArray[k-1])===0){
          if(this.dirArray[k-1]==='north'){
            for(let i=-1; i>= -this.stepLength[k-1] ; i-=1){
              this.allStepsPoints.push([this.xArray[k-1],this.yArray[k-1]+i]);
            }
            
          } else if(this.dirArray[k-1]==='south'){
            for(let i=1; i<= this.stepLength[k-1]  ; i+=1){
              this.allStepsPoints.push([this.xArray[k-1],this.yArray[k-1]+i]);
            }
            
          }
        } else if((this.yArray[k]-this.yArray[k-1])===0){
          if(this.dirArray[k-1]==='east'){
            for(let j=1; j<= this.stepLength[k-1]  ; j+=1){
              this.allStepsPoints.push([this.xArray[k-1]+j,this.yArray[k-1]]);
            }
          } else if(this.dirArray[k-1]==='west'){
            for(let l=-1; l>= -this.stepLength[k-1]  ; l-=1){
              this.allStepsPoints.push([this.xArray[k-1]+l,this.yArray[k-1]]);
            }
          } 
          }
        }

      }
    return this;
  }

  print(){
    
    this.grid = '';
    
    let emptyBox='\u25A1'
    for(let i=Math.min(...this.yArray); i <= Math.max(...this.yArray); i+=1){
      console.log(Math.min(...this.yArray))
      for(let j=Math.min(...this.xArray); j <= Math.max(...this.xArray); j+=1){
        for(let k=0; k<this.allStepsPoints.length; k+=1){
          if(i===this.allStepsPoints[k][1] && j===this.allStepsPoints[k][0]){
  
            console.log('---',j,'+++',i)
            this.grid+='🦁';
            
            break;
          } else if(k===this.allStepsPoints.length-1){
            
            this.grid+=emptyBox;
          }
        }
      }
      this.grid+='\n'
    }
    console.log(this.grid)
    return this;
  }
}

// const flash = new Turtle(0, 4)
//   .forward(3)
//   .left()
//   .forward(3)
//   .right()
//   .forward(5)
//   .right()
//   .forward(8)
//   .right()
//   .forward(5)
//   .right()
//   .forward(3)
//   .left()
//   .forward(3);
// const flash = new Turtle(0,0).forward(3).right().forward(2)
const flash = new Turtle(0,0).forward(3).right().forward(2).right().forward(8).left().forward(3);
// 0,0  0,3  2,3  2,-5  5,-5
// const flash = new Turtle(1,2).forward(3).right().forward(2).right().forward(8).left().forward(3);
// 1,2  4,2  4,0 -4,0 -4,-3
console.log(flash.allSteps().print());