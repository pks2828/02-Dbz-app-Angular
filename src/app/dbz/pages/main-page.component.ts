import { Component,} from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private dbzService: DbzService ){}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id : string ):void{
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:Character){
    this.dbzService.addCharacter(character);
  }
  //dbzService es una instancia de la clase DbzService por lo tanto tenemos las clases y metodos
}

// ESTE ES EL COMPONENTE PADRE, EL HIJO ES EL QUE TIENE EL FORMULARIO Y LOS DATOS DEL CHARACTER
