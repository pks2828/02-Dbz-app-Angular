import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title2 }}</h1>
    <h3>Counter:  {{ counter }}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="reset()" >Reset</button>
    <button (click)="increaseBy(-1)">-1</button>



  `
})

export class CounterComponent {
  public title2: string = 'Hola mundo desde el componente counter!';
  public counter: number = 10;

  increaseBy(value:number):void{
    this.counter += value;
  }

  reset():void{
    this.counter = 10;
  }


}
