import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()// Este decorador se utiliza para pasar datos del componente padre al componente hijo.
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]


  //Segundo paso definir el evento que se va a emitir
  @Output()
  public characterDeleted = new EventEmitter<string>();//Este decorador se utiliza para emitir eventos del componente hijo al componente padre.

  onDeleteCharacter(id?: string): void {

    if (!id) return;

    console.log({id});

    this.characterDeleted.emit(id);
  }

}
