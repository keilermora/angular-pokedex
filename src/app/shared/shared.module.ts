import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { PokemonImageUrlPipe } from './pipes/pokemon-image-url.pipe';
import { PokemonNumberPipe } from './pipes/pokemon-number.pipe';
import { PokemonNamePipe } from './pipes/pokemon-name.pipe';
import { PokemonSpritePositionPipe } from './pipes/pokemon-sprite-position.pipe';
import { PokemonHeightPipe } from './pipes/pokemon-height.pipe';
import { PokemonWeightPipe } from './pipes/pokemon-weight.pipe';
import { PokemonTypePipe } from './pipes/pokemon-type.pipe';
import { PokemonStatPipe } from './pipes/pokemon-stat.pipe';
import { PokedexVersionNamePipe } from './pipes/pokedex-version-name.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PokedexVersionNamePipe,
    PokemonHeightPipe,
    PokemonImageUrlPipe,
    PokemonNumberPipe,
    PokemonNamePipe,
    PokemonSpritePositionPipe,
    PokemonStatPipe,
    PokemonTypePipe,
    PokemonWeightPipe,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    NavbarComponent,
    FooterComponent,
    PokedexVersionNamePipe,
    PokemonHeightPipe,
    PokemonImageUrlPipe,
    PokemonNamePipe,
    PokemonNumberPipe,
    PokemonSpritePositionPipe,
    PokemonStatPipe,
    PokemonTypePipe,
    PokemonWeightPipe,
  ]
})
export class SharedModule { }
