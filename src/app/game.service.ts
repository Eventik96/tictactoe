import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  player=true;

  table=["","","","","","","","",""];


  step(i)
  {
    if(!this.table[i])
    {
      var sign=this.player ?"X" : "O";
      this.table[parseInt(i)]=sign;
    }
    console.log(this.table);
    this.checkWin();
  
  }


  switch () {
    if(this.player)
    {
      this.player=false;
    }
    else{
      this.player=true;
    }

    console.log(this.player);
  }

  getPlayer()
  {
    return this.player;
  }


  reset()
  {
    this.table=["","","","","","","","",""];
  }



  checkWin(){
    
    if((this.table[0] === "X" &&
      this.table[1] === "X" &&
      this.table[2] === "X" ) || (this.table[0] === "O" &&
      this.table[1] === "O" &&
      this.table[2] === "O" )) { alert((this.player?"X" : "O")+" Won the game")}
    else if (
      (this.table[3] === "X" &&
      this.table[4]=== "X" &&
      this.table[5] === "X"
    ) ||(this.table[3] === "O" &&
      this.table[4] === "O" &&
      this.table[5] === "O" ) ){ alert((this.player?"X" : "O")+" Won the game")}
     else if (
      (this.table[6] === "X" &&
      this.table[7] === "X" &&
      this.table[8] === "X"
    ) || (this.table[6] === "O" &&
    this.table[7] === "O" &&
    this.table[8] === "O" )){ alert((this.player?"X" : "O")+" Won the game")}
     
    console.log("checkwin:");
    console.log(this.table);
    
    
  }


  constructor() { }
}
