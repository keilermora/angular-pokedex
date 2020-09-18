import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { PokemonImageUrlPipe } from './pipes/pokemon-image-url.pipe';
import { PokemonNumberPipe } from './pipes/pokemon-number.pipe';
import { PokemonNamePipe } from './pipes/pokemon-name.pipe';
import { PokemonSpritePositionPipe } from './pipes/pokemon-sprite-position.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    PokemonImageUrlPipe,
    PokemonNumberPipe,
    PokemonNamePipe,
    PokemonSpritePositionPipe,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    NavbarComponent,
    FooterComponent,
    PokemonImageUrlPipe,
    PokemonNamePipe,
    PokemonNumberPipe,
    PokemonSpritePositionPipe,
  ]
})
export class SharedModule { }
