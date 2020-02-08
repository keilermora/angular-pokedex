import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {
  imageStyle: any;
  formattedName: string;
  formattedNumber: string;

  @Input() name: string;
  @Input() number: number;
  constructor() { }

  ngOnInit() {
    this.imageStyle = this.calcSpritePosition(this.number);
    this.formattedName = this.formatName(this.name);
    this.formattedNumber = this.formatNumber(this.number);
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

  /**
   * Formatear nombre.
   */
  formatName(name: string): string {
    return name
      .replace(/-f$/g, '♀')
      .replace(/-m$/g, '♂')
      .replace(/^mr-/g, 'Mr. ');
  }

  /**
   * Formatear número.
   * Como el número corresponde a la posición del Pokémon en el arreglo y esta se comienza a contar desde 0,
   * debemos sumar 1 al número formateado.
   */
  formatNumber(position: number): string {
    position++;
    return '#' + (position.toString()).padStart(3, '0');
  }
}
