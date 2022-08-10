import { Component } from '@angular/core';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import FilterModel from 'src/app/core/services/filter/filter.model';
import { FilterService } from 'src/app/core/services/filter/filter.service';
import PokedexVersionModel from 'src/app/core/services/pokedex-version/pokedex-version.model';
import { PokedexVersionService } from 'src/app/core/services/pokedex-version/pokedex-version.service';
import PokemonTypeModel from 'src/app/core/services/pokemon-type/pokemon-type.model';
import { PokemonTypeService } from 'src/app/core/services/pokemon-type/pokemon-type.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  iconSearch = faSearch;
  iconTimes = faTimes;

  showNav = true;
  pokedexVersions: PokedexVersionModel[] = [];
  pokemonTypes: PokemonTypeModel[] = [];

  currentPokemonName!: string;
  currentPokemonTypeId!: number;
  currentVersionId!: number;

  constructor(
    private filterService: FilterService,
    private pokemonTypeService: PokemonTypeService,
    private pokedexVersionService: PokedexVersionService
  ) {
    this.filterService.getFilter().subscribe((filter: FilterModel) => {
      this.currentVersionId = filter.pokedexVersionId;
      this.currentPokemonName = filter.pokemonName;
      this.currentPokemonTypeId = filter.pokemonTypeId;
    });

    this.pokedexVersions = this.pokedexVersionService.getAllPokedexVersions();

    this.pokemonTypeService.getAllPokemonTypes().subscribe((pokemonTypes: PokemonTypeModel[]) => {
      this.pokemonTypes = pokemonTypes;
    });
  }

  changePokemonName(pokemonName: string) {
    this.filterService.setPokemonName(pokemonName);
  }

  changePokemonType(pokemonTypeId: string) {
    this.filterService.setPokemonTypeId(pokemonTypeId);
  }

  changeVersion(versionId: number) {
    this.filterService.setPokedexVersionId(versionId);
  }
}
