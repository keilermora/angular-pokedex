import { Component, Input, OnInit } from '@angular/core';
import { PokemonSpecieModel } from 'src/app/core/services/pokemon-specie/pokemon-specie.model';
import { PaginatorComponent } from '../paginator/paginator.component';
import { NgIf } from '@angular/common';
import { DialogBoxComponent } from '../../../../shared/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-pokemon-profile',
  templateUrl: './pokemon-profile.component.html',
  styleUrls: ['./pokemon-profile.component.scss'],
  standalone: true,
  imports: [DialogBoxComponent, NgIf, PaginatorComponent],
})
export class PokemonProfileComponent {
  @Input({ required: true }) busy: boolean = true;

  @Input({ required: true }) pokemonSpecie!: PokemonSpecieModel;
}
