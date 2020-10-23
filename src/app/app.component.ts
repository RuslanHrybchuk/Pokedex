import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'Pokedex';
  private counter = 1;
  public selectedPokemon;
  public pokemonArray: Array<object> = [];
  private numberOfPokemon = 12;

  ngOnInit(): void {
    this.getArray();
  }

  private getArray(): void {
    for ( ; this.counter <= this.numberOfPokemon; ) {
      this.getPokemon(this.counter);
      this.counter++;
    }
    this.numberOfPokemon += 12;
  }

  private async getPokemon(id): Promise<void> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    this.pokemonArray.push(pokemon);
  }

  private openPokemon(i): void {
    this.selectedPokemon = i;
    console.log(this.selectedPokemon);

  }

  public getStat(type): number {
    let returnStat: number;
    this.selectedPokemon.stats.forEach((stat) => {
      if (stat.stat.name === type) {
        returnStat = stat.base_stat;
      }
    });
    return returnStat;
  }

  public loadMore(): void {
    this.getArray();
  }
}
