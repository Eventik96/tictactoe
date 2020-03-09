import { GameService } from './../game.service';
import { Component, OnInit } from '@angular/core';
import {ElementRef,Renderer2} from '@angular/core';



@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  constructor(private gameservice: GameService) { }

  ngOnInit(): void {
    
  }




  step($event) {
    if(!$event.srcElement.innerHTML)
    {
     

      this.gameservice.step($event.srcElement.id);
      this.gameservice.switch();
    }
  
  }

  reset()
  {
    this.gameservice.reset();
  }


  

}
