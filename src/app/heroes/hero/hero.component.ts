import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string { //Propiedad
    return this.name.toUpperCase();
  }

  getHeroDescription(): string { //Metodo
    return `${this.name} - ${this.age}`;
  }

  changeHero( nombre:string ):void {
    this.name = nombre;
  }

  changeAge( value:number ):void {
    this.age = value;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;

  }

}
