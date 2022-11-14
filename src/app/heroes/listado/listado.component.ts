import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ["Goku", "Vegeta", "Trunks", "Gohan"];
  heroeBorrado: string = "";

  borrarPersonaje(){
    this.heroeBorrado = this.heroes.shift() || "";
    
  }

}
