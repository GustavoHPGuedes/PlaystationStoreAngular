import { Component } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import {RouterModule} from '@angular/router';
import { MenuBarraComponent } from "../../components/menu-barra/menu-barra.component";
import { JogoCardComponent } from "../../components/jogo-card/jogo-card.component";

@Component({
  selector: 'page-inicio',
  standalone: true,
  imports: [CardComponent, RouterModule, MenuBarraComponent, JogoCardComponent],
  templateUrl: './inicio.page.html',
  styleUrl: './inicio.page.css'
})
export class InicioPage {

}
