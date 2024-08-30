import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-jogo-card',
  standalone: true,
  imports: [],
  templateUrl: './jogo-card.component.html',
  styleUrl: './jogo-card.component.css'
})
export class JogoCardComponent {

  @Input() coluna:number = 1
  @Input() imgLink:string = ""
  @Input() tituloJogo:string = ""

}
