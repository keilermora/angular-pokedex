import { Component, OnInit } from '@angular/core';
import { PokemonService } from '@data/services/pokemon.service';
import { Observable } from 'rxjs';
import { Pokedex } from '@data/types/pokedex';
import { PokedexService } from '@data/services/pokedex.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokedex: Pokedex | null = null;
  pokemons: any[] = [];

  constructor(
    private pokedexService: PokedexService,
    private pokemonService: PokemonService
  ) {
    this.pokedexService.getPokedex().subscribe((pokedex: Pokedex) => {
      this.pokedex = pokedex;
      // Actualizar la lista de Pokémon
      this.updatePokemonList();
    });
  }

  ngOnInit() {

  }

  /**
   * Calcular la posición del sprite del Pokémon, según su posición.
   * La posición del Pokémon se divide entre 10, porque son 10 los Pokémon que hay por fila en las imágenes de sprites.
   * La parte entera representa la posición Y y la parte decimal la posición X.
   * Las dimensiones de cada sprite es de 56x56.
   */
  calcSpritePosition(position: number): any {
    const numberDiv = parseFloat((position / 10).toString()).toFixed(1);
    const posX = parseInt(numberDiv.substring(numberDiv.toString().length - 1), 10) * 56;
    const posY = Math.floor(parseFloat(numberDiv)) * 56;

    return {
      backgroundImage: `url(${this.pokedex?.version.spritesUrl})`,
      backgroundPosition: `-${posX}px -${posY}px`,
    };
  }

  /**
   * Actualizar la lista de Pokémon
   */
  updatePokemonList(): void {
    if(this.pokedex) {
      this.pokemonService.getPokemons(this.pokedex.version.limit).subscribe(value => {
        this.pokemons = value;
      });
    }
  }
}
