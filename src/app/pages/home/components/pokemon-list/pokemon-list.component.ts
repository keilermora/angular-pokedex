import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../../core/services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[];

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.pokemonService.getPokemons(150).subscribe(value => {
      this.pokemons = value.results;
    });
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
      backgroundImage: `url('/assets/images/pokemon-green.png')`,
      backgroundPosition: `-${posX}px -${posY}px`,
    };
  }
}
