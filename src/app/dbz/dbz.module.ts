import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { FormsComponent } from './components/forms/forms.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    FormsComponent//Primer paso para utilizar un modulo en el main

  ],
  exports: [
    MainPageComponent//Segundo paso para que el componente sea visible la app main
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
