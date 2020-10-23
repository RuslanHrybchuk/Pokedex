import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-one-pokemon',
  templateUrl: './one-pokemon.component.html',
  styleUrls: ['./one-pokemon.component.css']
})

export class OnePokemonComponent implements OnInit {
  @Input() pokemonData;
  public pokemonTypes: Array<string>;

  constructor() {  }

  ngOnInit(): void {
    this.getTypes();
  }

  private getTypes(): void {
    this.pokemonTypes = this.pokemonData.types.map(el => el.type.name);
  }

}
