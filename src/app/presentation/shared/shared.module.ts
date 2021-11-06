import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Components
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

// Pipes
import { PokemonImageUrlPipe } from './pipes/pokemon-image-url.pipe';
import { PokemonNumberPipe } from './pipes/pokemon-number.pipe';
import { PokemonNamePipe } from './pipes/pokemon-name.pipe';
import { PokemonSpritePositionPipe } from './pipes/pokemon-sprite-position.pipe';
import { PokemonHeightPipe } from './pipes/pokemon-height.pipe';
import { PokemonWeightPipe } from './pipes/pokemon-weight.pipe';
import { PokemonTypePipe } from './pipes/pokemon-type.pipe';
import { PokemonStatPipe } from './pipes/pokemon-stat.pipe';
import { PokedexVersionNamePipe } from './pipes/pokedex-version-name.pipe';
import { SearchResultsMessagePipe } from './pipes/search-results-message.pipe';

// Directives
import { LazyImgDirective } from './directives/lazy-img.directive';

@NgModule({
  declarations: [
    DialogBoxComponent,
    FooterComponent,
    LazyImgDirective,
    NavbarComponent,
    PokedexVersionNamePipe,
    PokemonHeightPipe,
    PokemonImageUrlPipe,
    PokemonNamePipe,
    PokemonNumberPipe,
    PokemonSpritePositionPipe,
    PokemonStatPipe,
    PokemonTypePipe,
    PokemonWeightPipe,
    SearchResultsMessagePipe,
  ],
  imports: [CommonModule, FontAwesomeModule, FormsModule, RouterModule],
  exports: [
    CommonModule,
    DialogBoxComponent,
    FontAwesomeModule,
    FooterComponent,
    FormsModule,
    LazyImgDirective,
    NavbarComponent,
    PokedexVersionNamePipe,
    PokemonHeightPipe,
    PokemonImageUrlPipe,
    PokemonNamePipe,
    PokemonNumberPipe,
    PokemonSpritePositionPipe,
    PokemonStatPipe,
    PokemonTypePipe,
    PokemonWeightPipe,
    SearchResultsMessagePipe,
  ],
})
export class SharedModule {}
