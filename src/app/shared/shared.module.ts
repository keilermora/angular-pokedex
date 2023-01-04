import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';

// Components
import { DialogBoxComponent } from './components/dialog-box/dialog-box.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

// Pipes
import { I18nKeyPipe } from './pipes/i18n-key/i18n-key.pipe';
import { PokemonImageUrlPipe } from './pipes/pokemon-image-url/pokemon-image-url.pipe';
import { PokemonNumberPipe } from './pipes/pokemon-number/pokemon-number.pipe';
import { PokemonNamePipe } from './pipes/pokemon-name/pokemon-name.pipe';
import { PokemonSpritePositionPipe } from './pipes/pokemon-sprite-position/pokemon-sprite-position.pipe';
import { PokemonHeightPipe } from './pipes/pokemon-height/pokemon-height.pipe';
import { PokemonWeightPipe } from './pipes/pokemon-weight/pokemon-weight.pipe';

// Directives
import { HideElementDirective } from './directives/hide-element.directive';
import { LazyImgDirective } from './directives/lazy-img.directive';
import { QueryParamsHandlingDirective } from './directives/query-params-handling.directive';

@NgModule({
  declarations: [
    DialogBoxComponent,
    FooterComponent,
    LazyImgDirective,
    HideElementDirective,
    NavbarComponent,
    I18nKeyPipe,
    PokemonHeightPipe,
    PokemonImageUrlPipe,
    PokemonNamePipe,
    PokemonNumberPipe,
    PokemonSpritePositionPipe,
    PokemonWeightPipe,
    QueryParamsHandlingDirective,
  ],
  imports: [CommonModule, FontAwesomeModule, FormsModule, RouterModule, TranslateModule],
  providers: [],
  exports: [
    CommonModule,
    DialogBoxComponent,
    FontAwesomeModule,
    FooterComponent,
    FormsModule,
    HideElementDirective,
    LazyImgDirective,
    NavbarComponent,
    I18nKeyPipe,
    PokemonHeightPipe,
    PokemonImageUrlPipe,
    PokemonNamePipe,
    PokemonNumberPipe,
    PokemonSpritePositionPipe,
    PokemonWeightPipe,
    QueryParamsHandlingDirective,
    TranslateModule,
  ],
})
export class SharedModule {}
