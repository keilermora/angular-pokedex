import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { PokemonNumberPipe } from './pipes/pokemon-number.pipe';
import { PokemonNamePipe } from './pipes/pokemon-name.pipe';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, PokemonNumberPipe, PokemonNamePipe],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    FooterComponent,
    NavbarComponent,
    PokemonNamePipe,
    PokemonNumberPipe,
  ]
})
export class SharedModule { }
