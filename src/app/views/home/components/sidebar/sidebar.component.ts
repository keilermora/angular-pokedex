import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { TranslateModule } from '@ngx-translate/core';
import FilterModel from 'src/app/core/services/filter/filter.model';
import PokemonTypeModel from 'src/app/core/services/pokemon-type/pokemon-type.model';
import PokedexVersionModel from 'src/app/core/services/pokedex-version/pokedex-version.model';
import { FilterService } from 'src/app/core/services/filter/filter.service';
import { PokedexVersionService } from 'src/app/core/services/pokedex-version/pokedex-version.service';
import { PokemonTypeService } from 'src/app/core/services/pokemon-type/pokemon-type.service';
import { I18nKeyPipe } from 'src/app/shared/pipes/i18n-key/i18n-key.pipe';
import { DialogBoxComponent } from 'src/app/shared/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [
    DialogBoxComponent,
    FontAwesomeModule,
    FormsModule,
    I18nKeyPipe,
    NgClass,
    NgForOf,
    NgIf,
    TranslateModule,
  ],
})
export class SidebarComponent {
  iconSearch = faSearch;
  iconTimes = faTimes;

  showNav = true;
  pokedexVersions: PokedexVersionModel[] = [];
  pokemonTypes: PokemonTypeModel[] = [];

  currentPokemonName!: string;
  currentPokemonTypeId!: number;
  currentVersionId!: number;

  private filterService = inject(FilterService);
  private pokemonTypeService = inject(PokemonTypeService);
  private pokedexVersionService = inject(PokedexVersionService);

  constructor() {
    this.pokemonTypeService
      .getAllPokemonTypes()
      .pipe(takeUntilDestroyed())
      .subscribe((pokemonTypes: PokemonTypeModel[]) => {
        this.pokemonTypes = pokemonTypes;
      });

    this.filterService.getFilter().subscribe((filter: FilterModel) => {
      this.currentVersionId = filter.pokedexVersionId;
      this.currentPokemonName = filter.pokemonName;
      this.currentPokemonTypeId = filter.pokemonTypeId;
    });

    this.pokedexVersions = this.pokedexVersionService.getAllPokedexVersions();
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
