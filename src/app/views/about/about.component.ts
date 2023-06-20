import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { QueryParamsHandlingDirective } from '../../shared/directives/query-params-handling.directive';
import { DialogBoxComponent } from '../../shared/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [DialogBoxComponent, QueryParamsHandlingDirective, RouterLink, TranslateModule],
})
export class AboutComponent {
  homeAngular: string = environment.homeAngular;
  homePokeApi: string = environment.homePokeApi;
  pokedexGithub: string = environment.pokedexGithub;
  keilerLinkedin: string = environment.keilerLinkedin;

  constructor() {}
}
