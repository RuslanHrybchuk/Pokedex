import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnePokemonComponent } from './one-pokemon/one-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    OnePokemonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
