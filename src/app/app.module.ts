import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HeroesModule,
    BrowserModule,
    CounterModule,
    AppRoutingModule,
    DbzModule//tercer paso, importar el modulo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
